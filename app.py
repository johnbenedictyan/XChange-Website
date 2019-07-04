from flask import Flask,render_template,request
from dotenv import load_dotenv
import os

load_dotenv()
app = Flask(__name__)

CURRENCY_LIST = [
    "AUD","BGN","BRL",
    "CAD","CHF","CNY",
    "CZK","DKK","EUR",
    "GBP","HKD","HRK",
    "HUF","IDR","ILS",
    "INR","ISK","JPY",
    "KRW","MXN","MYR",
    "NOK","NZD","PHP",
    "PLN","RON","RUB",
    "SEK","SGD","THB",
    "TRY","USD","ZAR"
]
@app.route("/")
def init():
    return render_template("index.html", CURRENCY_LIST = CURRENCY_LIST)

@app.route("/test")
def test():
    return render_template("taxi-availability.html", api = os.getenv('api'))

if __name__ == '__main__':
    app.run(host=os.getenv('IP'),
            port=int(os.getenv('PORT')),
            debug=True)