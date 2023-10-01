import React from "react";
import PropTypes from 'prop-types'

function Img (props) {
    const {url, alt, title, onClickHadle} = props;
    return <img onClick = {onClickHadle} src={url} alt = {alt} title = {title}/>
}

Img.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string,
    onClickHadle: PropTypes.func
}

Img.defaultProps = {
    alt: "An Image",
    title: '',
    onClickHadle: () => {}
}

export default Img;