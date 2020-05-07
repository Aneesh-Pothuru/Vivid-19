from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():


if __name__ == '__main__':
    app.run()