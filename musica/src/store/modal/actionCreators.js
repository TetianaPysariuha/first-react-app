import { OPEN_MODAL, CLOSE_MODAL, CONFIRM_ACTION } from './actiions';

export const openModalAC = (payload) => ({type: OPEN_MODAL, payload});
export const closeModalAC = () => ({type: CLOSE_MODAL});
/* export const confirmActionModalAC = (dispatch) => (

    dispatch({type: CONFIRM_ACTION})
    ); */
