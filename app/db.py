# The routes are the different URLs that the application implements. In Flask, handlers for the application routes are
# written as Python functions, called view functions. View functions are mapped to one or more route URLs so that Flask
# knows what logic to execute when a client requests a given URL.
import click
from flask import current_app, g
from flask_pymongo import PyMongo
from flask.cli import with_appcontext
from app import app


def get_db():
    if 'db' not in g:
        app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
        app.config['SECRET_KEY'] = 'dev'
        app.config['MONGO_DBNAME'] = 'slither'
        app.config[
            'MONGO_URI'] = "mongodb+srv://root:SAdmin1@mongo-dev-db-0e9wb.mongodb.net/slither?retryWrites=true&w=majority"

        mongo = PyMongo(app)
        g.db = mongo
    return g.db


def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()


def init_db():
    db = get_db()

    with current_app.open_resource('schema.sql') as f:
        db.executescript(f.read().decode('utf8'))


@click.command('init-db')
@with_appcontext
def init_db_command():
    """Clear the existing data and create new tables."""
    init_db()
    click.echo('Initialized the database.')


def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)
