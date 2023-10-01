import React, { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRoutes from './AppRoutes';
import Modal from "./components/Modal/Modal";
import { loadDataAC, refreshCounterFavoriteAC, saveDataAC } from './store/cardData/actionCreators';
import { loadCartDataAC, refreshCounterCartAC, countTotalAmountAC, saveCartDataAC } from './store/cartData/actionCreators';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dataCards = useSelector(store => store.dataCards.data);
  const cartData = useSelector(store => store.cartData.cartData);
  const isOpenModal = useSelector(store => store.modal.isOpenModal);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadDataAC());
    dispatch(loadCartDataAC());
  }, [dispatch]);

  useEffect(() => {
    dispatch(saveDataAC(dataCards));
    dispatch(refreshCounterFavoriteAC());
  }, [dataCards, dispatch]);

  useEffect(() => {
    dispatch(saveCartDataAC(cartData));
    dispatch(refreshCounterCartAC());
    dispatch(countTotalAmountAC());
  }, [cartData, dispatch]);

  return (
    <div className="App">
      <AppRoutes/>
      {isOpenModal && <Modal/>}
      <Header />
      <Footer />
    </div>
  );
}

export default App;
