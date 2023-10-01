import React from 'react';
import Container from '../../components/Container/Container';
import styles from "./MainPage.module.scss";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ContextContainerViewProvider from '../../contexts/ContainerView/ContainerViewProvider';


function MainPage ({sectionCardTitle}) {

    const dataCards = useSelector(store => store.dataCards.data); 

    return (
        <ContextContainerViewProvider>
            <div className={styles.mainPage}>
                <Container sectionCardTitle = {sectionCardTitle} dataCards = {dataCards}/>
            </div>
        </ContextContainerViewProvider>
    )
}

MainPage.propTypes = {
    sectionCardTitle: PropTypes.string
}

MainPage.defaultProps = {
    sectionCardTitle: ''
}

export default MainPage;