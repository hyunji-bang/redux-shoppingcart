import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
            <div className="Products">
                <h2>Products</h2>
                <ul>
                    <li>iPad 4 Mini - $500.01 x 2
                        <button>Add to Cart</button>
                    </li>
                    <li>H&M T-Shirt White - $10.99 x 10
                        <button>Add to Cart</button>
                    </li>
                    <li>Galaxy5 - $85.5 x 5
                        <button>Add to Cart</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Products;
