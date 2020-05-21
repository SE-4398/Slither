import datetime

from click import DateTime
from flask import Flask, render_template, request
# from flask_mysqldb import MySQL
# import pymysql
# import yaml
from flask_wtf import FlaskForm, RecaptchaField
from wtforms import StringField, IntegerField, DateField, DecimalField, SubmitField, PasswordField, BooleanField, \
    DateTimeField
from datetime import datetime
from wtforms.validators import DataRequired, Length, Email, ValidationError, InputRequired


# class required to represent form. inherits from FlaskForm
class LoginForm(FlaskForm):
    username = StringField('username', validators=[InputRequired(), Length(min=4, max=15)])
    password = PasswordField('password', validators=[InputRequired(), Length(min=8, max=80)])
    recaptcha = RecaptchaField()
    remember = BooleanField('remember me')

