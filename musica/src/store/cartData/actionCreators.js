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


export const loadCartDataAC = () => (dispatch) => {
  if (localStorage.getItem('cartData')) {
    const newCartData = JSON.parse(localStorage.getItem('cartData'));
    dispatch({type: LOAD_CART_DATA, payload: newCartData});
  }
};
export const saveCartDataAC = (cartData) => (dispatch) => {
    localStorage.setItem('cartData', JSON.stringify(cartData));
    dispatch({type: SAVE_CART_DATA});
};
export const refreshCounterCartAC = () => ({type: REFRESH_COUNTER_CART});
export const addToCartAC = (payload) => ({type: ADD_TO_CART, payload});
export const countTotalAmountAC = () => ({type: COUNT_TOTAL_AMOUNT});
export const delfromCartAC = (payload) => ({type: DEL_FROM_CART, payload});
export const increaseCountInCartAC = (payload) => ({type: INCREASE_ITEMS_CART, payload});
export const idecreaseCountInCartAC = (payload) => ({type: DECREASE_ITEMS_CART, payload});
export const clearCartAC = () => ({type: CLEAR_CART});


