# test_hello.py
from unittest import TestCase

from app.routes import app,mongo

class Test(TestCase):
    def test_index(self):
        response = app.test_client().get('/')
        assert response.status_code == 200
        # self.fail()

    def test_login(self):
        response = app.test_client().get('/')
        user = {'name': 'developer5', 'password': 'admin123'}
        assert response.status_code == 200
        # self.fail()