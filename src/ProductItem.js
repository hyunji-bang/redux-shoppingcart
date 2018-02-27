import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { product, cart } from './reducers'

const mapStateToProps = (state) => ({
    state
})
const mapDispatchToProps = (dispatch) => ({
    addcart: () => dispatch(actions.addcart)
})


class _ProductItem extends Component {
    render() {
        console.log('this.props', this.props)

        return (
            this.props.state.product.map((v, i)=> {
                return (
                    <li key={i}>
                        <strong>{v.name}</strong> - ${v.price} x {v.amount}
                        <button>Add to Cart</button>
                    </li>
                )
            })
        );
    }
}

const ProductItem = connect(
    mapStateToProps, mapDispatchToProps
)(_ProductItem);

export default ProductItem;
