import { OPEN_MODAL, CLOSE_MODAL } from './actiions';

const initialState = {
    modalProps: {
        header: "", 
        text: "", 
        closeButton: true, 
        closeModaleHandle: ()=>{}, 
        confirmModalHandle: ()=>{}, 
    },
    isOpenModal: false,
    card: {}
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL: {

            return {...state, modalProps: action.payload.modalProps, card: action.payload.card, isOpenModal: true};
        }
        case CLOSE_MODAL: {
            return {...state, isOpenModal: false};
        }
        default: {
            return state;
            }
        }
}

export default modalReducer;