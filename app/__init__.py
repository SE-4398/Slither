# Script creates the application object as an instance of class Flask imported from the flask package. The
# __name__ variable passed to the Flask class is a Python predefined variable, which is set to the name of the module in
# which it is used. Flask uses the location of the module passed here as a starting point when it needs to load
# associated resources such as template files
import os
from flask import Flask

app = Flask(__name__, template_folder='templates', static_folder='static')


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # a simple page that says hello
    @app.route('/hello')
    def hello():
        return 'Hello, World!'

    from . import db
    db.init_app(app)

    return app


# app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

# Prevent circular imports
from app import routes
