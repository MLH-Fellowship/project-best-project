import unittest
from peewee import *

from app import TimelinePost

MODELS = [TimelinePost]

test_db = SqliteDatabase(':memory:')


class TestTimelinePost(unittest.TestCase):

    def setUp(self):
        # Bind model classes to test db. Since we have a complete list of
        # all models, we do no need to recursively bind dependencies.
        test_db.bind(MODELS, bind_refs=False, bind_backrefs=False)

        test_db.connect()
        test_db.create_tables(MODELS)

    def tearDown(self):
        test_db.drop_tables(MODELS)
        test_db.close()

    def test_timeline_post(self):
        first_post = TimelinePost.create(
            date='September 20',
            title='Hello world!',
            events=
            'Do not look under your sink on November 24, 2026 at 5:25PM MDT.')
        assert first_post.id == 1
        second_post = TimelinePost.create(
            date='November 5',
            title='A soliloquy',
            events='O, the Pelican. So smoothly doth he crest. A wind god!')
        assert second_post.id == 2

        assert TimelinePost.get_by_id(1) == first_post
        assert TimelinePost.get_by_id(2) == second_post
