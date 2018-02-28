import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        console.log('this.props', this.props)
        const {name, price, amount} = this.props.product

        return (
            <li>
                <strong>{name}</strong> - ${price} x {amount}
                <button onClick={this.props.onAddCart}>Add to Cart</button>
            </li>
        );
    }
}

export default ProductItem;
