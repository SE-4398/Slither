# The routes are the different URLs that the application implements. In Flask, handlers for the application routes are
# written as Python functions, called view functions. View functions are mapped to one or more route URLs so that Flask
# knows what logic to execute when a client requests a given URL.

from flask import render_template
from app import app

@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Macy Gray'}
    return render_template('index.html', title='Home', user=user)

@app.route('/login')
def login():
    return render_template('login.html', title='Login')

@app.route('/register')
def register():
    return render_template('register.html', title='Register')

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
