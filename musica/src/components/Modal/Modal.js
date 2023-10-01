import React from "react";
import styles from './Modal.module.scss';
import Button from "../Button/Button";
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAC } from '../../store/modal/actionCreators';

function Modal () {
    const dispatch = useDispatch();
    const {header, text, closeButton, confirmModalHandle} = useSelector(store => store.modal.modalProps);
    const card = useSelector(store => store.modal.card);

    return <div className={styles.container}>
                <div data-testid = 'closeModal' onClick={()=>{dispatch(closeModalAC())}} className={styles.containerBackground}></div>
                <div className={styles.content}>
                    <div className={styles.modalHeader}>
                        <h2>{ header }</h2>
                        {closeButton && <Button handleClick = {()=>{dispatch(closeModalAC())}} 
                                                backgroundColor = 'rgba(0, 0, 0, 0.3)' 
                                                color = "white" btnText = 'X'/>}
                    </div>
                    <p className={styles.text}>{ text }</p>
                    <div className={styles.btns}>
                        <Button handleClick = {() =>{dispatch(confirmModalHandle(card)); dispatch(closeModalAC())}} 
                                backgroundColor = 'rgba(0, 0, 0, 0.2)' 
                                color="white" 
                                btnText ="OK" />
                        <Button handleClick = {()=>{dispatch(closeModalAC())}} 
                                backgroundColor = 'rgba(0, 0, 0, 0.2)' 
                                color="white" 
                                btnText ="Cansel"/>
                    </div>
                </div> 
            </div>
    }


export default Modal;