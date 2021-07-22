# import pymongo
# from flask import Flask, jsonify, render_template


# def call_superHeroe():
#   myclient = pymongo.MongoClient("mongodb://localhost:27017/")
#   mydb = myclient["superheroes_db"]
#   mycol = mydb["api_superheroes"]

#   mydoc = mycol.find({})

#   jsonHero = []
#   for x in mydoc:
#     del x['_id']
#     jsonHero.append(x["name"])

#   return jsonHero


# # # 2. Create an app, being sure to pass __name__
# app = Flask(__name__)


# # 3. Define what to do when a user hits the index route
# @app.route("/")
# def home():

#   return render_template("radar.html")


# @app.route("/api")
# def api():

#   myclient = pymongo.MongoClient("mongodb://localhost:27017/")
#   mydb = myclient["superheroes_db"]
#   mycol = mydb["api_superheroes"]

#   mydoc = mycol.find({})

#   jsonHero = []
#   for x in mydoc:
#     del x['_id']
#     jsonHero.append(x)

#   return jsonify(jsonHero)