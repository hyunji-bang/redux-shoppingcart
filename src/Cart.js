import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const {cart} = state;
    return {cart}
}


class _Cart extends Component {
    render() {
        let cartPrice = 0;
        return (
            <div className="Cart">
                <h2>Cart</h2>
                Please add some products to cart.

                <ul>
                    {this.props.cart.map((cartItem, idx)=> {
                        return (
                            <li key={idx}>
                                {cartItem.name} {cartItem.price} x {cartItem.amount}
                            </li>
                        )
                    })}
                </ul>

                <div>
                    {this.props.cart.length > 0 ?
                        this.props.cart.map((cartItem)=> {
                            cartPrice += cartItem.price;
                            return ''
                        })
                        : ''
                    }
                    <p className="total">
                        TOTAL : ${cartPrice}
                    </p>
                </div>

                <div>
                    <button>Checkout</button>
                </div>
            </div>
        );
    }
}

const Cart = connect(
    mapStateToProps
)(_Cart);


export default Cart;
