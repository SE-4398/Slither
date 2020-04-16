import mongoengine


def global_init():
    # database name: slither
    mongoengine.register_connection(alias='core', name='slither')
