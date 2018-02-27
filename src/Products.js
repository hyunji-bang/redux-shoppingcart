import React, { Component } from 'react';
import ProductItem from './ProductItem';

class Products extends Component {
    render() {
        return (
            <div className="Products">
                <h2>Products</h2>
                <ul>
                    <ProductItem/>
                </ul>
            </div>
        );
    }
}

export default Products;
