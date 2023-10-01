import { combineReducers } from 'redux';
import cardDataReducer from './cardData/reducer';
import cartDataReducer from './cartData/reducer';
import modalReducer from './modal/reducer';

const appReducer = combineReducers({
    dataCards: cardDataReducer,
    cartData: cartDataReducer,
    modal: modalReducer
});

export default appReducer;