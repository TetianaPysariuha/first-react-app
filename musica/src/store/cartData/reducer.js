import { 
    LOAD_CART_DATA, 
    SAVE_CART_DATA,
    REFRESH_COUNTER_CART, 
    ADD_TO_CART, 
    COUNT_TOTAL_AMOUNT, 
    DEL_FROM_CART, 
    INCREASE_ITEMS_CART,
    DECREASE_ITEMS_CART,
    CLEAR_CART
} from './actiions';

const initialState = {
    cartData: [ ],
    counterCart: 0,
    totalAmount: 0
}

const cartDataReducer = (state = initialState, action) => {
switch (action.type) {
    case LOAD_CART_DATA: {
        return {...state, cartData: action.payload};
    }
    case SAVE_CART_DATA: {
        return state;
    }
    case REFRESH_COUNTER_CART: {
        let newCounterCart = 0;
        if (state.cartData.length > 0) {
          let init = 0;
          newCounterCart = state.cartData.reduce((acc, cur) => acc + cur?.count, init);
        };
        return {...state, counterCart: newCounterCart};
    }
    case ADD_TO_CART: {
        const index =  state.cartData.findIndex((element) => element.art === action.payload.art);
        if (index === -1) {
            const newCartData =   [...state.cartData, { ...action.payload, count: 1 }]
            return {...state, cartData: newCartData};
        } else {
            const newCartData = [...state.cartData];
            newCartData[index].count += 1;
            return {...state, cartData: newCartData};
        };
    }
    case COUNT_TOTAL_AMOUNT: {
        let init = 0;
        const newTotalAmount = state.cartData.reduce((acc, cur) => acc + cur?.count*cur?.price, init);
        return {...state, totalAmount: newTotalAmount};
    }
    case DEL_FROM_CART: {
        const newCartData = [...state.cartData];
        const index = state.cartData.findIndex((element) => element.art === action.payload.art);
        if (index === -1) {
            return state;
        } else {
            newCartData.splice(index, 1);
        }
        return {...state, cartData: newCartData};
    }
    case INCREASE_ITEMS_CART: {
        const index = state.cartData.findIndex((element) => element.art === action.payload);
        const newCartData = [...state.cartData];
        newCartData[index].count += 1;
        return {...state, cartData: newCartData};
    }
    case DECREASE_ITEMS_CART: {
        const newCartData = [...state.cartData];
        const index = state.cartData.findIndex((element) => element.art === action.payload);
        if (newCartData[index].count === 1) {
            return state;
        };
        newCartData[index].count -= 1;
        return {...state, cartData: newCartData};
    }
    case CLEAR_CART: {
        return {...state, cartData: []}
    }
    default: {
        return state;
        }
    }
}

export default cartDataReducer;