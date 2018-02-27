import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div className="Cart">
                <h2>Cart</h2>
                Please add some products to cart.
                Total: $0.00

                <div>
                    <button>Checkout</button>
                </div>
            </div>
        );
    }
}

export default Cart;
