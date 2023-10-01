import React, {useContext} from "react";
import styles from './Card.module.scss';
import stylesList from './CardList.module.scss';
import Img from '../Img/Img';
import PropTypes from 'prop-types';
import Button from "../Button/Button";
import { useDispatch } from 'react-redux';
import { togleFavoriteAC } from '../../store/cardData/actionCreators';
import { openModalAC } from '../../store/modal/actionCreators';
import { addToCartAC } from '../../store/cartData/actionCreators';
import ContextContainerView from '../../contexts/ContainerView/ContainerView';


function Card (props) {
    
    const dispatch = useDispatch();
    const {title, price, url, art, color, isFavorite} = props;
    const {containerView} = useContext(ContextContainerView);
    const style = (containerView === 'cards' ? styles: stylesList);
    console.log(useContext(ContextContainerView))

    return (
        <div className={style.card}>
            <div className={style.imgMain}>
                <Img url = {url} alt = {title}/>
            </div>
            <div className={style.imgFavorite} onClick = {(event)=> {event.stopPropagation(); dispatch(togleFavoriteAC(art))}}>
                <Img url = {isFavorite ? "./img/star_remove.png" : "./img/star_add.png"} alt = {isFavorite ? "Remove from favorite" : "Add to favorite"} />
            </div>
            <h3>{title}</h3>
            <span>{color}</span>
            <span>Арт.: {art}</span>
            <p className={style.prise}>{price}</p>
            <Button btnText= "Додати до кошика" 
                    handleClick = {()=> {dispatch(openModalAC({modalProps: {header:"Додати до кошика?",
                                                                            text:"Товар: " + title + " (" + color +") " ,
                                                                            closeButton: true,
                                                                            closeModaleHandle: ()=>{},
                                                                            confirmModalHandle: addToCartAC},
                                                                card: {name: title,
                                                                        price: price,
                                                                        imgSrc: url,
                                                                        art: art,
                                                                        color: color,
                                                                        isFavorite: isFavorite}}))}} 
                    backgroundColor = "rgba(0, 128, 50, 0.8)" 
                    color = "white"/>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired, 
    url: PropTypes.string.isRequired, 
    art: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, 
    color: PropTypes.string, 
    isFavorite: PropTypes.bool,
}

Card.defaultProps = {
    color: null,
    isFavorite: false,
}

export default Card;