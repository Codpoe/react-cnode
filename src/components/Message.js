import React from 'react';
import Header from '../components/Header.js';

const component = (props) => {
    return (
        <div>
            <Header title="消息" canBack={false} />
        </div>
    )
};

export default component;