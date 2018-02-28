import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import { addcart } from './actions';

const mapStateToProps = (state) => ({
    product: state.product,
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    addcart: (idx) => dispatch(addcart(idx))
})

class _Products extends Component {
    render() {
        const product = this.props.product
        return (
            <div className="Products">
                <h2>Products</h2>
                <ul>
                    {product.map((item, idx) => (
                        <ProductItem
                            onAddCart={()=>this.onAddCart(idx)}
                            key={idx}
                            product={item}
                            name={item.name}
                            price={item.price}
                            amount={item.amount}
                        />
                    ))}
                </ul>
            </div>
        );
    }
    onAddCart = (idx) => {
        this.props.addcart(idx)
    }
}


const Products = connect(
    mapStateToProps, mapDispatchToProps
)(_Products);


export default Products;
