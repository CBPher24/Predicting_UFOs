import os
from flask import Flask, render_template
# from flask_pymongo import PyMongo

# template_fol = os.path.abspath("../templates")
app = Flask(__name__, template_folder = "Dashboard\pages")



@app.route("/")
def home():
    return render_template("index.html")


@app.route("/TheScience")
def science():
    return render_template("the_science.html")

@app.route("/TheSpeculation")
def speculation():
    return render_template("the_speculation.html")

@app.route("/TheData")
def data():
    return render_template("the_data.html")

@app.route("/O'Hare")
def ohare():
    return render_template("ohare.html")

@app.route("/Phoenix")
def phoenix():
    return render_template("phoenix.html")

if __name__ == "__main__":
    app.run(debug=True)