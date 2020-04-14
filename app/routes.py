# The routes are the different URLs that the application implements. In Flask, handlers for the application routes are
# written as Python functions, called view functions. View functions are mapped to one or more route URLs so that Flask
# knows what logic to execute when a client requests a given URL.

from flask import render_template
from flask_bootstrap import Bootstrap
from flask_login import LoginManager, UserMixin, login_required, login_user, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy

from app import forms
from app import app
from app.forms import LoginForm, RegisterForm

Bootstrap(app)

# necessary for flask wtforms to work
app.config['SECRET_KEY'] = 'dev'


@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Macy Gray'}
    return render_template('index.html', title='Home', user=user)


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    return render_template('login.html', title='Login', form=form)


@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegisterForm()
    return render_template('register.html', title='Register', form=form)

@app.route('/slither')
def slither():
    return render_template('slither.html', title='Slither')

@app.route('/menu')
def menu():
    return  render_template('menu.html', title= 'Menu')

@app.route('/credits')
def credits():
    return render_template('credits.html', title='Credits')


@app.route('/options')
def options():
    return render_template('options.html', title='Options')
