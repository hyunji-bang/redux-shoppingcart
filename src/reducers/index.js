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
                    const a = newState.every((cartObj) => {
                        return cartObj.name !== action.item.name
                    })

                    const firstItem = {...action.item, amount: 1};

                    if ( a ) { // a는 기존 배열(카트)에 없다
                        newState.push(firstItem);
                    } else { // 있다 -> 해당위치에 +1
                        newState.map((cartObj, index) => {
                            if (cartObj.name === action.item.name) {
                                newState[index] = {
                                    ...newState[index],
                                    amount: cartObj.amount + 1
                                }
                            }
                        })

                    }
                    return newState;


                    // newState.map((cartObj, index) => {// cart_list 배열의 obj들을 하나하나 돌면서 있는건지 검증
                    //     if (cartObj.name === action.item.name) { // 기존에 있는 제품이면, 그 제품을 바꿔주기
                    //         console.log('* 같 다 ----------');
                    //         console.log('* index', index);
                    //         console.log('*cartObj.name: ', cartObj.name, ' / action.item.name : ', action.item.name)
                    //         const addedItem = {...action.item, amount: cartObj.amount + 1};
                    //         console.log('애프터 >>>>>> addedItem', addedItem);
                    //         newState[index] = {
                    //             ...cartObj,
                    //             amount: addedItem.amount
                    //         }
                    //     } else { // 기존에 없는 제품이 들어왔을 경우
                    //         // 1. 그냥 건너뛰던지
                    //         // 2. 아예 없으니까 추가해줘야하는 제품인지.
                    //         console.log('* 같 지 않 다 ----------');
                    //         console.log('*cartObj.name : ', cartObj.name, ' / action.item.name : ', action.item.name)
                    //
                    //         // console.log('<<<------아무것도 없으니까 푸쉬----->>>');
                    //         // const firstItem = {...action.item, amount: 1};
                    //         // newState.push(firstItem);
                    //     }
                    // })
                    // console.log('newState 리턴!!!!!!!!!!!!!', newState)
                    // return newState
                    //
                    // //console.log('after>> newState: ', newState)
                    // //return newState
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