import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import { addcart } from './actions';

const mapStateToProps = (state) => ({
    product: state.product,
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    addcart: (idx, amount) => dispatch(addcart(idx, amount))
})

class _Products extends Component {
    render() {
        return (
            <div className="Products">
                <h2>Products</h2>
                <ul>
                    {this.props.product.map((item, idx) =>
                        <ProductItem
                            onAddCart={() => this.onAddCart(idx, item.amount)}
                            key={idx}
                            idx={idx}
                            product={item}
                        />)
                    }
                </ul>
            </div>
        );
    }
    onAddCart = (idx, amount) => {
        this.props.addcart(idx, amount)
    }
}

const Products = connect(
    mapStateToProps, mapDispatchToProps
)(_Products);


export default Products;
