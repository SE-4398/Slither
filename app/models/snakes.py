class Snake:
    registered_date = None
    species = None
    length = None
    name = None
    is_venomous = None

    # collection: table name of where snake records will be stored
    meta = {
        'db_alias': 'core',
        'collection': 'snakes'
    }
