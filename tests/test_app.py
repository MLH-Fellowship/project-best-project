
import unittest
import os
os.environ['TESTING'] = 'true'

from app import app

class AppTestCase(unittest.TestCase):
	def setUp(self):
		self.client = app.test_client()

	def test_home(self):
		response = self.client.get("/")
		assert response.status_code == 200
		html = response.get_data(as_text=True)
		assert "<title>MLH Fellow</title>" in html
		# Add more tests relating to home page
		assert "Education" in html
		assert "<img" in html

	def test_timeline(self):
		response = self.client.get("/api/timeline_post")
		assert response.status_code == 200
		assert response.is_json
		json = response.get_json()
		assert "timeline_posts" in json
		assert len(json["timeline_posts"]) == 0
		# Add more tests relating to the /api/timeline_post GET and POST apis

		post_info = {
			'name': 'Test!',
			'email': 'test@b.com',
			'content': 'Test Content'
		}		

		response = self.client.post("/api/timeline_post", data=post_info)
		assert response.status_code == 200
		assert response.is_json
		json = response.get_json()
		assert json['name'] == post_info['name']
		assert json['email'] == post_info['email']
		assert json['content'] == post_info['content']

		# Add more tests relating to the timeline page

	def test_malformed_timeline_post(self):
		response = self.client.post("/api/timeline_post", data={"email": "john@example.com", "content": "Hello world, I'm John!"})
		assert response.status_code == 400
		html = response.get_data(as_text=True)
		assert "Invalid name" in html

		response = self.client.post("/api/timeline_post", data={"name": "John Doe", "email": "john@example.com", "content": ""})
		assert response.status.code == 400
		html = response.get_data(as_text=True)
		assert "Invalid content" in html

		response = self.client.post("/api/timeline_post", data={"name": "John Doe", "email": "not-an-email", "content": "Hello world, I'm John!"})
		assert response.status_code == 400
		html = response.get_data(as_text=True)
		assert "Invalid email" in html
