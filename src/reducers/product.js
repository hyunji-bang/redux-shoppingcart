import * as types from '../actions/ActionTypes';

// 초기 상태를 정의합니다
const initialState = [
    {name: 'iPad 4 Mini', price: 500.01, amount: 2},
    {name: 'H&M T-Shirt White', price: 10.99, amount: 10},
    {name: 'Galaxy5', price: 85.5, amount: 5}
]

function product(state = initialState, action) {
    console.log('action :', action)
    switch(action.types) {
        default:
            return state;
        case types.ADD_CART :
            return state.map(product => {
                if( product.idx === action.idx) {
                    return {
                        ...product
                    }
                }
            })
        case types.CHECKOUT :
            return {};
    }
}
export default product;