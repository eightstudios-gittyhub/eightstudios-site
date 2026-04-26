from flask import Blueprint, jsonify
from data.db import products

products_bp = Blueprint("products", __name__)

@products_bp.route("/", methods=["GET"])
def get_products():
    return jsonify(products)
