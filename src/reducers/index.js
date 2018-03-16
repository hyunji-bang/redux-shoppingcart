import { combineReducers } from 'redux'
import * as types from '../actions/ActionTypes';

// 초기 상태를 정의합니다
const initialState = {
    products: [
        {name: 'iPad 4 Mini', price: 500.01, amount: 2},
        {name: 'H&M T-Shirt White', price: 10.99, amount: 10},
        {name: 'Galaxy5', price: 85.5, amount: 5}
    ],
    cart_list: []
}

function product(state = initialState.products, action) {
    console.log('프로덕트 action', action)
    switch(action.type) {
        default:
            return state;
        case types.ADD_CART :
            if (action.item.amount > 0) {
                const newState = [...state]
                newState[action.idx] = {
                    ...newState[action.idx],
                    amount: action.item.amount - 1
                }
                return newState
            } else {
                alert('Sold Out')
                return state;
            }
    }
}


function cart(state = initialState.cart_list, action) {
    switch(action.type) {
        default:
            return state;
        case types.ADD_CART :
            if (action.amount > 0) {
                const newState = [...state];
                newState.push[action.item]
                return newState;
            } else {
                return state;
            }
    }
}

const reducers = combineReducers({
    cart,
    product
})

export default reducers;