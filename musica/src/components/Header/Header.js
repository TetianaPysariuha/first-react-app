import React from "react";
import styles from "./Header.module.scss";
import Img from '../Img/Img';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header () {
       
        const counterFavorite = useSelector(store => store.dataCards.counterFavorite);
        const counterCart = useSelector(store => store.cartData.counterCart);
        
        return(
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Img url = "./img/Logo.svg" alt = "Logo"/>
                    <NavLink to="/">CHAIRS</NavLink>
                </div>
                <div className={styles.navigation}>
                    <div className={styles.catalog}>
                        <NavLink to="/">
                            <Img url = "./img/catalog.svg" alt = "Catalog" title = 'Перейти до каталогу'/>
                        </NavLink>
                    </div>
                    <div className={styles.cart}>
                        <NavLink to="/cart">
                            <Img url = "./img/cart-outline.svg" alt = "Cart" title = 'Перейти до кошика'/>
                        </NavLink>
                        <p>{counterCart}</p>
                    </div>
                    <div className={styles.favorite}>
                        <NavLink to="/favorite">
                            <Img url = "./img/star-header.svg" alt = "Favorite" title = 'Перейти до вибраних'/>
                        </NavLink>
                        <p>{counterFavorite}</p>
                    </div>
                </div>
            </header>
        )
    }

export default Header;