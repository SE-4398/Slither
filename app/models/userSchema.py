# User View
# Retrieve all of the necessary data, organize it, and send it off to associated view

import json


# user characteristics: username, password, user game stats, etc.

class User(object):
    def __init__(self, first_name=None, last_name=None):
        self.first_name = first_name
        self.last_name = last_name

    # returns User name
    def name(self):
        return ("%s %s" % (self.first_name, self.last_name))

    @classmethod
    # returns all people inside db.txt as list of User objects
    def getAll(self):
        database = open('db.txt', 'r')
        result = []
        json_list = json.loads(database.read())
        for item in json_list:
            item = json.loads(item)
            user = User(item['first_name'], item['last_name'])
            result.append(user)
        return result
