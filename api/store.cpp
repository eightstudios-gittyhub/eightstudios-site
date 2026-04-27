#include <iostream>
#include <vector>
#include <string>

using namespace std;

// PRODUCT STRUCT
struct Product {
    int id;
    string name;
    double price;
};

// CART
vector<Product> cart;

// PRODUCTS (fake database)
vector<Product> products = {
    {1, "Gaming Mouse", 25.0},
    {2, "Keyboard", 45.0},
    {3, "Headset", 60.0}
};

// SHOW PRODUCTS
void showProducts() {
    cout << "\n🛍 Available Products:\n";
    for (const auto& p : products) {
        cout << p.id << ". " << p.name << " - $" << p.price << endl;
    }
}

// ADD TO CART
void addToCart(int id) {
    for (const auto& p : products) {
        if (p.id == id) {
            cart.push_back(p);
            cout << "✅ Added " << p.name << " to cart\n";
            return;
        }
    }
    cout << "❌ Product not found\n";
}

// VIEW CART
void viewCart() {
    double total = 0;
    cout << "\n🛒 Your Cart:\n";

    if (cart.empty()) {
        cout << "Cart is empty\n";
        return;
    }

    for (const auto& item : cart) {
        cout << "- " << item.name << " ($" << item.price << ")\n";
        total += item.price;
    }

    cout << "Total: $" << total << endl;
}

// CHECKOUT
void checkout() {
    double total = 0;

    for (const auto& item : cart) {
        total += item.price;
    }

    if (cart.empty()) {
        cout << "🛒 Cart is empty\n";
        return;
    }

    cout << "\n💰 Total Paid: $" << total << endl;
    cout << "✅ Order placed!\n";

    cart.clear();
}

// MAIN MENU
int main() {
    int choice, id;

    while (true) {
        cout << "\n==== STORE MENU ====\n";
        cout << "1. View Products\n";
        cout << "2. Add to Cart\n";
        cout << "3. View Cart\n";
        cout << "4. Checkout\n";
        cout << "5. Exit\n";
        cout << "Choose: ";
        cin >> choice;

        switch (choice) {
            case 1:
                showProducts();
                break;

            case 2:
                cout << "Enter product ID: ";
                cin >> id;
                addToCart(id);
                break;

            case 3:
                viewCart();
                break;

            case 4:
                checkout();
                break;

            case 5:
                cout << "👋 Goodbye!\n";
                return 0;

            default:
                cout << "❌ Invalid choice\n";
        }
    }
}
