from flask import Flask, jsonify, redirect, render_template, request
from dotenv import load_dotenv
from peewee import MySQLDatabase, Model, CharField, TextField, SqliteDatabase
from playhouse.shortcuts import model_to_dict
import os

load_dotenv()
app = Flask(__name__)

if os.getenv("TESTING") == "true":
    print("Running in test mode")
    db = SqliteDatabase('file:memory?mode=memory&cache=shared', uri=True)
else:
    db = MySQLDatabase(os.getenv("MYSQL_DATABASE"),
                       user=os.getenv("MYSQL_USER"),
                       password=os.getenv("MYSQL_PASSWORD"),
                       host=os.getenv("MYSQL_HOST"),
                       port=3306)


class TimelinePost(Model):
    date = CharField()
    title = CharField()
    events = TextField()

    class Meta:
        database = db


db.create_tables([TimelinePost], safe=True)


@app.route("/api/timeline_post", methods=["GET", "POST", "DELETE"])
def timeline_post():
    if request.method == "POST":
        if 'date' not in request.form:
            return jsonify({"error": "Invalid date"}), 400
        if 'title' not in request.form:
            return jsonify({"error": "Invalid title"}), 400
        if 'events' not in request.form or request.form['events'] == '':
            return jsonify({"error": "Invalid events"}), 400

        date = request.form["date"]
        title = request.form["title"]
        events = request.form["events"]

        timeline_post = TimelinePost.create(date=date,
                                            title=title,
                                            events=events)
        timeline_post.save()
        return model_to_dict(timeline_post)
    elif request.method == "GET":
        return {'posts': [model_to_dict(p) for p in TimelinePost.select()]}
    elif request.method == "DELETE":
        del_id = request.form["id"]
        TimelinePost.delete_by_id(del_id)
        return f'Removed ID: {del_id}'


@app.route("/flask/timeline")
def timeline():
    return render_template("timeline.html")


@app.route("/")
def index():
    return redirect(request.environ.get('HTTP_ORIGIN',
                                        'http://localhost:5000').replace(
                                            ":5000", ":3000"),
                    code=301)
