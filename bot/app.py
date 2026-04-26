from flask import Flask
from routes.products import products_bp
from routes.cart import cart_bp
from routes.checkout import checkout_bp

app = Flask(__name__)

# REGISTER ROUTES
app.register_blueprint(products_bp, url_prefix="/api/products")
app.register_blueprint(cart_bp, url_prefix="/api/cart")
app.register_blueprint(checkout_bp, url_prefix="/api/checkout")

@app.route("/")
def home():
    return {"message": "🔥 Store API Running"}

if __name__ == "__main__":
    app.run(debug=True)
