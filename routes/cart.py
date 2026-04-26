from flask import Blueprint, request, jsonify
from data.db import products, cart

cart_bp = Blueprint("cart", __name__)

# ADD TO CART
@cart_bp.route("/", methods=["POST"])
def add_to_cart():
    data = request.json
    product_id = data.get("id")

    product = next((p for p in products if p["id"] == product_id), None)

    if product:
        cart.append(product)
        return jsonify({"message": "Added to cart", "cart": cart})
    return jsonify({"error": "Product not found"}), 404

# VIEW CART
@cart_bp.route("/", methods=["GET"])
def view_cart():
    total = sum(item["price"] for item in cart)
    return jsonify({"cart": cart, "total": total})
