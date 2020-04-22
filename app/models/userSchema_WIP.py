from mongoengine.document import Document
from mongoengine.fields import DateTimeField, IntField, StringField, URLField


class User(Document):
    '''Class for defining structure of User collection
    '''
    userId = StringField(max_length=30, required=True)
    userPassword = StringField(max_length=30, required=True)

    meta = {
        'collection': 'users'
    }
