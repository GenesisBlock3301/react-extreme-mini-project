import {ADD_TO_CART,REMOVE_TO_CART} from '../../constants'

const initialState = {
    cartData: []
}

export default function cartItem(state=[],action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("Reducer",action)
            return [
                ...state,
                {cartData: action.data}
            ];
        case REMOVE_TO_CART:
            state.pop()
            return [
                ...state
            ]

        default:
            return state
    }
}