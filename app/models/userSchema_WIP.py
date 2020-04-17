from mongoengine import *


# Document equivalent to a row in RDBMS

class User(Document):
    '''Class for defining structure of User collection
    '''

    userId = StringField(max_length=30, required=True)
    userPassword = StringField(max_length=30, required=True)
