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
            if (action.item.amount > 0) { // 클릭한 상품의 수량이 있을 경우
                const newState = [...state];
                if (newState.length < 1) { // 아무것도 없을경우 우선 넣어주기
                    const firstItem = {...action.item, amount: 1};
                    newState.push(firstItem);
                    return newState;
                } else {
                    const doesntExist = newState.every((cartObj) => { // 모든 요소가 true가 되는지 체크
                        return cartObj.name !== action.item.name // 클릭한 값이 state의 배열 값들과 모두같지 않다면 true => 클릭한거 push
                                                                 // 즉, 하나라도 같은 값이 있다면 false => 해당 인덱스에 +1
                    })

                    const pushItem = {...action.item, amount: 1}; // 푸쉬해줄 클릭한 값

                    if ( doesntExist ) { // 기존 배열(카트)에 없는 값을 클릭했을 경우
                        newState.push(pushItem);
                    } else { // 있는 값을 클릭했을 경우 -> 해당위치에 +1
                        newState.map((cartObj, index) => {
                            if (cartObj.name === action.item.name) { // 기존에 있던 else는 필요없다. else일 경우 모두다 pass
                                newState[index] = {
                                    ...newState[index],
                                    amount: cartObj.amount + 1
                                }
                            }
                            return ''
                        })

                    }
                    return newState;


                    // newState.map((cartObj, index) => {// cart_list 배열의 obj들을 하나하나 돌면서 있는건지 검증
                    //     if (cartObj.name === action.item.name) { // 기존에 있는 제품이면, 그 제품을 바꿔주기
                    //         const addedItem = {...action.item, amount: cartObj.amount + 1};
                    //         console.log('애프터 >>>>>> addedItem', addedItem);
                    //         newState[index] = {
                    //             ...cartObj,
                    //             amount: addedItem.amount
                    //         }
                    //
                    //     } else { // 기존에 없는 제품이 들어왔을 경우 -> X 차례대로 map이 도는 와중에 클릭한 값이 아닐 경우
                    //         // 1. 그냥 건너뛰던지 -> 이게 맞음 OOOOOO 건너뛰어야함
                    //
                    //         // 2. 아예 없으니까 추가해줘야하는 제품인지 -> 이건 애초에 먼저 다른 조건문으로 체크했어야 할 사항.
                    //         // console.log('<<<------아무것도 없으니까 푸쉬----->>>');
                    //         // const firstItem = {...action.item, amount: 1};
                    //         // newState.push(firstItem);
                    //     }
                    // })
                    // return newState
                }
            } else { // 수량이 없는 걸 클릭했을 경우
                return state;
            }

    }
}

const reducers = combineReducers({
    cart,
    product
})

export default reducers;