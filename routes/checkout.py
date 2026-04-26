from flask import Blueprint, jsonify
from data.db import cart

checkout_bp = Blueprint("checkout", __name__)

@checkout_bp.route("/", methods=["POST"])
def checkout():
    total = sum(item["price"] for item in cart)
    cart.clear()

    return jsonify({
        "message": "✅ Order placed!",
        "total_paid": total
    })
