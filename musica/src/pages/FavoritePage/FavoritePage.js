import React from 'react';
import styles from "./FavoritePage.module.scss";
import Container from '../../components/Container/Container';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ContextContainerViewProvider from '../../contexts/ContainerView/ContainerViewProvider';

function FavoritePage(props) {
    const { sectionCardTitle } = props;

    const dataCards = useSelector(store => store.dataCards.data);

    return (
        <ContextContainerViewProvider>
            <div className={styles.favoritePage}>
                <Container sectionCardTitle = {sectionCardTitle}
                            noElementText = {'У Вас жодного товару поміченого як улюблене'}
                            dataCards = {dataCards.filter((elem) => elem.isFavorite===true)}/>
            </div>
        </ContextContainerViewProvider>
    )
}

FavoritePage.propTypes = {
    sectionCardTitle: PropTypes.string
}

FavoritePage.defaultProps = {
    sectionCardTitle: "", 
}

export default FavoritePage;