import React from 'react';
import styles from "./CartPage.module.scss" ;
import CartContainer from '../../components/CartContainer/CartContainer';
import { useSelector } from 'react-redux';
import CartForm from '../../components/CartForm/CartForm';

function CartPage () {

    
    const cartData = useSelector(store => store.cartData.cartData); 

    return (
    <div className={styles.cartPage}>
        <h1>Кошик</h1>
        <div className={styles.container}>
            { 
                cartData.length === 0 ? 
                <p className={styles.noItemsText}>Ви ще не вибрали жодного товару</p> : 
                <>
                    <CartContainer cartData={cartData}/> 
                    <CartForm/>
                </>
            }
        </div>
    </div>
    )
}

export default CartPage;