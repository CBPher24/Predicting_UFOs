# import os
from flask import Flask, render_template
# from flask_pymongo import PyMongo

# template_fol = os.path.abspath("../templates")
application = Flask(__name__, template_folder = "Dashboard/pages", static_folder="Dashboard/static")



@application.route("/")
def home():
    return render_template("index.html")


@application.route("/TheScience")
def science():
    return render_template("the_science.html")

@application.route("/TheSpeculation")
def speculation():
    return render_template("the_speculation.html")

@application.route("/TheData")
def data():
    return render_template("the_data.html")

@application.route("/DoD")
def dod():
    return render_template("dod.html")

@application.route("/O'Hare")
def ohare():
    return render_template("ohare.html")

@application.route("/Phoenix")
def phoenix():
    return render_template("phoenix.html")

if __name__ == "__main__":
    application.run(debug=True)