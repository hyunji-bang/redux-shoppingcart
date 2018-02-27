import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    state
})

class _ProductItem extends Component {
    render() {
        console.log('this.props', this.props)

        return (
            this.props.state.product.map((v, i)=> {
                return (
                    <li key={i}>
                        <strong>{v.name}</strong> - ${v.price} x {v.amount}
                    </li>
                )
            })
        );
    }
}

const ProductItem = connect(
    mapStateToProps, null
)(_ProductItem);

export default ProductItem;
