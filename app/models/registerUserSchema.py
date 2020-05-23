import datetime

from click import DateTime
from flask import Flask, render_template, request
# from flask_mysqldb import MySQL
# import pymysql
# import yaml
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateField, DecimalField, SubmitField, PasswordField, BooleanField, \
    DateTimeField
from datetime import datetime
from wtforms.validators import DataRequired, Length, Email, ValidationError, InputRequired


# class required to represent form. inherits from FlaskForm

class RegisterForm(FlaskForm):
    email = StringField('email', validators=[InputRequired(), Email(message='Invalid email'), Length(max=50)])
    username = StringField('username', validators=[InputRequired(), Length(min=4, max=15)])
    password = PasswordField('password', validators=[InputRequired(), Length(min=8, max=80)])
