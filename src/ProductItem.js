import React, { Component } from 'react';

class ProductItem extends Component {
    render() {

        const product = this.props.product || ''

        return (
            <li>
                <strong>{this.props.idx} {product.name}</strong> - ${product.price} x {product.amount}
                <button onClick={this.props.onAddCart}>Add to Cart </button>
            </li>
        );
    }
}

export default ProductItem;
