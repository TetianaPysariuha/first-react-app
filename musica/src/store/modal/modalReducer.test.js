import reduser from './reducer.js';
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

const openModal = {
    modalProps: {
        header:"Modal title",
        text:"Modal text",
        closeButton: true,
        closeModaleHandle: ()=>{},
        confirmModalHandle: ()=>{} 
    },
    isOpenModal: true,
    card: {}
}

const closeModal = {
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

describe('Reducers testinr',()=>{
    test('Should return the initial value', ()=>{
        expect(JSON.stringify(reduser(undefined,  {type: undefined}))).toEqual(JSON.stringify(initialState));
    })

    test('Should return with action OPEN_MODAL', ()=>{
        expect(JSON.stringify(reduser(undefined,  {type: OPEN_MODAL, payload: {modalProps: {
            header:"Modal title",
            text:"Modal text",
            closeButton: true,
            closeModaleHandle: ()=>{},
            confirmModalHandle: ()=>{} 
        }, card: {}}}))).toEqual(JSON.stringify(openModal));
    })
    
    test('Should return with action CLOSE_MODAL', ()=>{
        expect(JSON.stringify(reduser(undefined,  {type: CLOSE_MODAL}))).toEqual(JSON.stringify(closeModal));
    })
    
})