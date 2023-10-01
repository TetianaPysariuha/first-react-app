import { useState } from 'react';
import ContextContainerView from './ContainerView.js';

const ContextContainerViewProvider = (props) => {

    const { children } = props;
    const [containerView, setContainerView] = useState('cards');

    return (
        <ContextContainerView.Provider value={{containerView, setContainerView}}>
            {children}
        </ContextContainerView.Provider>
    )
};

export default ContextContainerViewProvider;