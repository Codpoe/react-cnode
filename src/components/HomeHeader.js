import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { NavLink } from 'react-router-dom';

import '../css/home-header.css';

@inject('model') @observer
class HomeHeader extends Component {
    
    getCurrentTabCN(tab) {
        switch (tab) {
            case 'all':
                return '最新';
            case 'share':
                return '分享';
            case 'ask':
                return '问答';
            case 'job':
                return '招聘';
        }
    }

    render() {
        const { tabs, match } = this.props;
        return (
            <header className="home-header">
                {tabs.map((tab, index) => (
                    <NavLink exact to={`/home/${tab === 'all' ? '' : tab}`} key={index} className="title" activeClassName="title--active">
                        <h1>{this.getCurrentTabCN(tab)}</h1>
                    </NavLink>
                ))}
            </header>
        )
    }
}

export default HomeHeader;

