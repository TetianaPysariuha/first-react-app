import React from "react";
import styles from "./CartItem.module.scss";
import Img from '../Img/Img';
import PropTypes from 'prop-types';
import Button from "../Button/Button";
import { useDispatch } from 'react-redux';
import { openModalAC } from '../../store/modal/actionCreators';
import { delfromCartAC, increaseCountInCartAC, idecreaseCountInCartAC } from '../../store/cartData/actionCreators';

function CartItem (props) {

    const { url, title, color, count, art, price, isFavorite } = props;
    const dispatch = useDispatch();
    
    return(
        <div className={styles.cutrItem}>
            <Img url = {url} alt = {title}/>
            <span>{title} {color} (Арт. {art} )</span>
            <div className={styles.btnCount}>
                <Button btnText= "+" handleClick = {()=> {dispatch(increaseCountInCartAC(art))}} backgroundColor = "rgba(0,0,0,0.2)" color = "rgba(0, 128, 50, 0.8)"/>
                <Button btnText= "-" handleClick = {()=> {dispatch(idecreaseCountInCartAC(art))}} backgroundColor = "rgba(0,0,0,0.2)" color = "rgba(0, 128, 50, 0.8)"/>
            </div>
            <p>{count}</p>
            <p>x</p>
            <p>{price}</p>
            <p>=</p>
            <p>{count*price}</p>
            <Button btnText= "delete" handleClick = {()=> {dispatch(openModalAC({modalProps: {header:"Видалити з кошика?",
                                                                            text:"Товар: " + title + " (" + color +") " ,
                                                                            closeButton: false,
                                                                            closeModaleHandle: ()=>{},
                                                                            confirmModalHandle: delfromCartAC},
                                                                card: {name: title,
                                                                        price: price,
                                                                        imgSrc: url,
                                                                        art: art,
                                                                        color: color,
                                                                        isFavorite: isFavorite,
                                                                        count: count}}))}}  backgroundColor = "rgba(0, 128, 50, 0.8)" color = "white"/>
        </div>
    )
}

CartItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired, 
    art: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, 
    color: PropTypes.string, 
    count: PropTypes.number,
    isFavorite: PropTypes.bool
}

CartItem.defaultProps = {
    color: null,
    count: 0,
    isFavorite: false
}

export default CartItem;