import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const {cart} = state;
    return {cart}
}


class _Cart extends Component {
    render() {
        let cartPrice = 0;
        let cartList = this.props.cart || [];
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
                    {/*{this.props.cart.length > 0 ?*/}
                        {/*this.props.cart.map((cartItem)=> {*/}
                            {/*cartPrice += cartItem.price * cartItem.amount;*/}
                            {/*return ''*/}
                        {/*})*/}
                        {/*: ''*/}
                    {/*}*/}

                    {/*reduce 함수로 변경*/}
                    <p className="total">
                        TOTAL : $
                        {cartList.length > 0 ?
                            cartList.reduce((prev, cur)=> {
                                return cartPrice = ( prev ? prev : 0 ) + cur.price * cur.amount;
                            }, 0)
                            : ''
                        }
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
