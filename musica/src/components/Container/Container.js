import React, { useContext } from "react";
import styles from './Container.module.scss';
import Card from "../Card/Card";
import PropTypes from 'prop-types';
import Img from '../Img/Img';
import ContextContainerView from '../../contexts/ContainerView/ContainerView';


function Container (props) {
    
    const {sectionCardTitle, dataCards, noElementText} = props;
    const {containerView, setContainerView} = useContext(ContextContainerView);
    let imgView;

    if(containerView==='cards'){
        imgView = <Img onClickHadle = {() => setContainerView('list')} url = "./img/list.svg" alt = "List" title = 'В форматі списка'/>;
    }
    else {
        imgView = <Img onClickHadle = {() => setContainerView('cards')} url = "./img/cards.svg" alt = "Cards" title = 'В форматі карток'/>;
    }

    return(
            <div  className={styles.container}>
                <h1>{sectionCardTitle}</h1>
                <div className={styles.listView}>
                    {imgView}
                </div>
                {dataCards.length === 0 && <p className={styles.noItemsText}>{noElementText}</p>}
                {dataCards.map(({name, price, imgSrc, art, color, isFavorite}) => 
                    <Card key = {art} title= {name} price={price} url={imgSrc} art={art} color={color} isFavorite={isFavorite}/>)}
            </div>
    )
}

Container.propTypes = {
    sectionCardTitle: PropTypes.string,
    noElementText: PropTypes.string,
    dataCards: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        imgSrc: PropTypes.string.isRequired, 
        art: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, 
        color: PropTypes.string, 
        isFavorite: PropTypes.bool,
    })).isRequired,
}

Container.defaultProps = {
    sectionCardTitle: '',
    noElementText: ','
}

export default Container;