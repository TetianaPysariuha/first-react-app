import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage/CartPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import MainPage from './pages/MainPage/MainPage';


function AppRoutes () {
    
    return(
        <Routes>
            <Route path = "/" element = {<MainPage sectionCardTitle = 'Каталог меблів'/>}/>
            <Route path = "/cart" element = {<CartPage />}/>
            <Route path = "/favorite" element = {<FavoritePage sectionCardTitle = 'Улюблені'/>}/>
        </Routes>
    )
}

export default AppRoutes;