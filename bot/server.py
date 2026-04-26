from flask import Flask, jsonify, request

app = Flask(__name__)

# FAKE DATABASE
products = [
    {"id": 1, "name": "Gaming Mouse", "price": 25},
    {"id": 2, "name": "Keyboard", "price": 45},
    {"id": 3, "name": "Headset", "price": 60}
]

cart = []

# GET PRODUCTS
@app.route("/api/products", methods=["GET"])
def get_products():
    return jsonify(products)

# ADD TO CART
@app.route("/api/cart", methods=["POST"])
def add_to_cart():
    data = request.json
    product_id = data.get("id")

    product = next((p for p in products if p["id"] == product_id), None)

    if product:
        cart.append(product)
        return jsonify({"message": "Added to cart", "cart": cart})
    else:
        return jsonify({"error": "Product not found"}), 404

# VIEW CART
@app.route("/api/cart", methods=["GET"])
def view_cart():
    total = sum(item["price"] for item in cart)
    return jsonify({"cart": cart, "total": total})

# CHECKOUT
@app.route("/api/checkout", methods=["POST"])
def checkout():
    global cart
    total = sum(item["price"] for item in cart)

    cart = []  # clear cart after checkout

    return jsonify({
        "message": "✅ Order placed!",
        "total_paid": total
    })

# RUN SERVER
if __name__ == "__main__":
    app.run(debug=True)
