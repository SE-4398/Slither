# Game View
# Retrieve all of the necessary data, organize it, and send it off to associated view

import json


# user characteristics: username, password, user game stats, etc.

class Game(object):
    def __init__(self, game_id=None, game_name=None):
        self.id = game_id
        self.name = game_name

    # returns Game name
    def name(self):
        return ("%s %s" % (self.id, self.name()))

    @classmethod
    # returns all people inside db.txt as list of User objects
    def getAll(self):
        database = open('db.txt', 'r')
        result = []
        json_list = json.loads(database.read())
        for item in json_list:
            item = json.loads(item)
            game = Game(item['game_id'], item['game_name'])
            result.append(game)
        return result
