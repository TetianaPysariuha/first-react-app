import React from "react";
import styles from './Button.module.scss'
import PropTypes from 'prop-types'

function Button (props) {
  
        const { btnText, handleClick, backgroundColor, color, type='button' } = props;
        
        return <button 
                    type = {type} 
                    onClick = { handleClick } 
                    style = {{ backgroundColor: backgroundColor, color: color }} 
                    className = {styles.btn}>{ btnText }</button>
    };

Button.propTypes = {
    btnText: PropTypes.string, 
    handleClick: PropTypes.func.isRequired, 
    backgroundColor: PropTypes.string, 
    color: PropTypes.string
}

Button.defaultProps = {
    btnText: "", 
    backgroundColor: 'Gray', 
    color: "Black"
}


export default Button;