import * as types from '../actions/ActionTypes';

// 초기 상태를 정의합니다
const initialState = 0

function cart(state = initialState, action) {
    switch(action.types) {
        default:
            return state;
        case types.ADD_CART :
            return {};
        case types.CHECKOUT :
            return {};
    }
}
export default cart;