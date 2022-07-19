import unittest
import os

os.environ['TESTING'] = 'true'

from app import app, db, TimelinePost


class AppTestCase(unittest.TestCase):

    def setUp(self):
        self.client = app.test_client()

        try:
            db.connect()
            db.create_tables([TimelinePost])
        except:
            db.create_tables([TimelinePost])

    def tearDown(self):
        db.drop_tables([TimelinePost])
        db.close()

    def test_home(self):
        response = self.client.get("/")
        # assert we are redirected to the correct url
        assert response.status_code == 301
        html = response.get_data(as_text=True)
        assert "http://localhost:3000" in html

    def test_timeline_api(self):
        response = self.client.get("/api/timeline_post")
        assert response.status_code == 200
        assert response.is_json
        json = response.get_json()
        assert 'posts' in json
        assert len(json['posts']) == 0

        post_data = {
            'date': 'September 20',
            'title': 'Hello world!',
            'events': 'event'
        }
        response_post = self.client.post("/api/timeline_post", data=post_data)
        assert response_post.status_code == 200
        assert response_post.is_json
        json = response_post.get_json()
        assert json['date'] == 'September 20'
        assert json['title'] == 'Hello world!'
        assert json['events'] == 'event'

    def test_timeline(self):
        response = self.client.get("/flask/timeline")
        # assert we are redirected to the correct url
        assert response.status_code == 200
        html = response.get_data(as_text=True)
        assert "TimeLine Page" in html

    def test_malformed_timeline_post(self):
        # malformed title
        response = self.client.post("/api/timeline_post",
                                    data={
                                        'date': 'September 20',
                                        'event': 'Hello world!'
                                    })
        assert response.status_code == 400
        html = response.get_data(as_text=True)
        print(html)
        assert "Invalid title" in html

        # malformed events
        response = self.client.post("/api/timeline_post",
                                    data={
                                        'date': 'September 20',
                                        'title': 'Hello world!',
                                        'events': ''
                                    })
        assert response.status_code == 400
        html = response.get_data(as_text=True)
        assert "Invalid events" in html

        # malformed date
        response = self.client.post("/api/timeline_post",
                                    data={
                                        'title': 'Hello world!',
                                        'events': 'hiiiiii'
                                    })
        assert response.status_code == 400
        html = response.get_data(as_text=True)
        assert "Invalid date" in html