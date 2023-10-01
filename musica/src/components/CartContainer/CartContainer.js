import React from "react";
import styles from "./CartContainer.module.scss";
import CartItem from "../CartItem/CartItem"
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function CartContainer (props) {
    
    const {cartData } = props;
    const totalAmount = useSelector(store => store.cartData.totalAmount); 

    return(
        <div className={styles.cartContainer}>
            {cartData.map(({imgSrc, name, color, count, art, price}) => <CartItem  key = {art} 
                                                                                    url={imgSrc} 
                                                                                    title ={name} 
                                                                                    color ={color} 
                                                                                    count = {count} 
                                                                                    art= {art} 
                                                                                    price = {price}/>)}
            {cartData.length !== 0 && <p className={styles.totalAmount}>
                                            <span>Загальна вартість:</span> 
                                            <span>{totalAmount}</span>
                                        </p>}
        </div>
    )
}

CartContainer.propTypes = {
    cartData: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        imgSrc: PropTypes.string.isRequired, 
        art: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, 
        color: PropTypes.string, 
        isFavorite: PropTypes.bool,
        count: PropTypes.number
    })).isRequired,
}

CartContainer.defaultProps = {

}

export default CartContainer;