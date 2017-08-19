import React from 'react'

import '../css/header.css';

const Header = (props) => {
    const { title, canBack } = props;
    return (
        <header className="header">
            {canBack && <i className="icon-back"></i>}
            <h1 className="title">{title}</h1>
        </header>
    )
};

export default Header;

