import Modal from './Modal';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modal/actionCreators';
import '@testing-library/jest-dom';


jest.mock('react-redux');

const closeModaleHandle = jest.fn();
const confirmModalHandle = jest.fn();

describe('Modal snapshot testing', ()=>{
    test('Should Modal to render with close button', () => {
        const modalProps = useSelector.mockReturnValue({
            header:"Modal title",
            text:"Modal text",
            closeButton: true,
            closeModaleHandle: closeModaleHandle,
            confirmModalHandle: confirmModalHandle
        });
        const { asFragment } = render(<Modal header = {modalProps.header} text={modalProps.text} closeButton= {true}/>);
        expect(asFragment()).toMatchSnapshot();
    })

    test('Should Modal to render without close button', () => {
        const modalProps = useSelector.mockReturnValue({
            header:"Modal title",
            text:"Modal text",
            closeButton: true,
            closeModaleHandle: closeModaleHandle,
            confirmModalHandle: confirmModalHandle
        });
        const { asFragment } = render(<Modal header = {modalProps.header} text={modalProps.text} closeButton= {false}/>);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('Modal buttons work', ()=>{
    test('Close modal by closeButton', ()=>{
        const modalProps = useSelector.mockReturnValue({
            header:"Modal title",
            text:"Modal text",
            closeButton: true,
            closeModaleHandle: closeModaleHandle,
            confirmModalHandle: confirmModalHandle
        });
        const dispatch =jest.fn();
        useDispatch.mockReturnValue(dispatch);

        const mockedCloseModalAC = jest.spyOn(actions, 'closeModalAC');
        render(<Modal header = {modalProps.header} text={modalProps.text} closeButton= {true}/>);
        fireEvent.click(screen.getByText('X'));
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(mockedCloseModalAC).toHaveBeenCalledTimes(1);
    })

    test('Close modal by click on background', ()=>{
        const modalProps = useSelector.mockReturnValue({
            header:"Modal title",
            text:"Modal text",
            closeButton: true,
            closeModaleHandle: closeModaleHandle,
            confirmModalHandle: confirmModalHandle
        });
        const dispatch =jest.fn();
        useDispatch.mockReturnValue(dispatch);

        const mockedCloseModalAC = jest.spyOn(actions, 'closeModalAC');
        render(<Modal header = {modalProps.header} text={modalProps.text} closeButton= {true}/>);
        fireEvent.click(screen.getByTestId('closeModal'));

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(mockedCloseModalAC).toHaveBeenCalledTimes(1);
    })

    test('Close modal by click on button Cansel', ()=>{
        const modalProps = useSelector.mockReturnValue({
            header:"Modal title",
            text:"Modal text",
            closeButton: true,
            closeModaleHandle: closeModaleHandle,
            confirmModalHandle: confirmModalHandle
        });
        const dispatch =jest.fn();
        useDispatch.mockReturnValue(dispatch);

        const mockedCloseModalAC = jest.spyOn(actions, 'closeModalAC');
        render(<Modal header = {modalProps.header} text={modalProps.text} closeButton= {true}/>);
        fireEvent.click(screen.getByText('Cansel'));
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(mockedCloseModalAC).toHaveBeenCalledTimes(1);
    })

    test('Confirm  modal by click on button Ok', ()=>{
        const modalProps = useSelector.mockReturnValue({
            header:"Modal title",
            text:"Modal text",
            closeButton: true,
            closeModaleHandle: closeModaleHandle,
            confirmModalHandle: confirmModalHandle
        });
        const dispatch =jest.fn();
        useDispatch.mockReturnValue(dispatch);

        const mockedCloseModalAC = jest.spyOn(actions, 'closeModalAC');

        render(<Modal header = {modalProps.header} text={modalProps.text} closeButton= {true}/>);
        fireEvent.click(screen.getByText('OK'));
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(mockedCloseModalAC).toHaveBeenCalledTimes(1);
        expect(confirmModalHandle).toHaveBeenCalledTimes(1);
    })
})
