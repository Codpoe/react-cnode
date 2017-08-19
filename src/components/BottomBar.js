import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { NavLink } from 'react-router-dom';

import '../css/bottom-bar.css';


const BottomTab = (props) => {
    const { img, text, url } = props;
    return (
        <NavLink to={url} className="bottom-tab" activeClassName="bottom-tab--active">
            <i className={`icon-${img}`}></i>
            <h1>{text}</h1>
        </NavLink>
    )
};

const BottomBar = (props) => {
    return (
        <ul className="bottom-bar">
            {props.tabs.map((tab, index) => (
                <li key={tab.url}>
                    <BottomTab
                        img={tab.img}
                        text={tab.text}
                        url={tab.url}
                    />
                </li>
            ))}
        </ul>
    )
};

export default BottomBar;

