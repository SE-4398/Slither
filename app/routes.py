# The routes are the different URLs that the application implements. In Flask, handlers for the application routes are
# written as Python functions, called view functions. View functions are mapped to one or more route URLs so that Flask
# knows what logic to execute when a client requests a given URL.

import os
from flask import render_template, url_for, request, session, redirect, flash, Response, jsonify, json
from json import loads, dumps
from flask_pymongo import PyMongo
import bcrypt  # added layer of security for arbitrary (weak) passwords provided by user
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import LoginManager, UserMixin, login_required, login_user, logout_user, current_user

from flask_bootstrap import Bootstrap
from app import app

from app.models.registerUserSchema import LoginForm
from app.models.loginUserSchema import RegisterForm

Bootstrap(app)

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config['SECRET_KEY'] = 'dev'
app.config['MONGO_DBNAME'] = 'slither'
app.config[
    'MONGO_URI'] = "mongodb+srv://root:SAdmin1@mongo-dev-db-0e9wb.mongodb.net/slither?retryWrites=true&w=majority"

mongo = PyMongo(app)

@app.route('/')
@app.route('/index', methods=['GET', 'POST'])
def index():
    # if 'username' in session:
    #     return 'You are logged in as ' + session['username']

    return render_template('index.html', title='Home')


@app.route('/search', methods=['GET', 'POST'])
def search():
    if 'username' in session:
        flash("You are logged in as ' + session['username']")
    return render_template('search.html', title='Search')

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        users = mongo.db.users
        login_user = users.find_one({'name': request.form['username']})
        if login_user is None:
            flash("User not registered!")
            return redirect(url_for('login'))
        if login_user:
            if bcrypt.checkpw(request.form['password'].encode(), login_user['password']):
                session['username'] = request.form['username']
                userOptions = users.find({'name': session['username']},
                                         {'name': 1, 'difficulty': 1, 'snakeskin': 1, 'background': 1, '_id': 0})
                for result in userOptions:
                    session['userOptions'] = str(result)
                flash(session['userOptions'])
                flash('You are logged in as ' + session['username'])
                return redirect(url_for('index'))
            else:
                flash("Invalid username or password")
    return render_template('login.html', title='Sign In', form=form)

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegisterForm()
    if request.method == 'POST':
        users = mongo.db.users
        existing_user = users.find_one({'name': request.form['username']})

        if existing_user is None:
            hashpass = bcrypt.hashpw(request.form['password'].encode('utf-8'), bcrypt.gensalt())
            users.insert({'name': request.form['username'], 'email': request.form['email'], 'password': hashpass})
            session['username'] = request.form['username']
            session['email'] = request.form['email']
            redirect(url_for('index'))
        else:
            return 'The username already exists!'

    return render_template('register.html', title='Register', form=form)


# @app.route('/slither')
# def slither():
#     return render_template('slither.html', title='Slither')

@app.route('/slither')
def slither():
    user_details = {
        'name': session['username'],
        'email': session['email'],
        'userOptions': session['userOptions']
        # 'snakeskin':  session['snakeskin'],
        # 'background':  session['background']
    }
    return render_template('slither.html', user=user_details)
