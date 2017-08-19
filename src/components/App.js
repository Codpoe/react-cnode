import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import BottomBar from '../components/BottomBar.js';
import Home from '../components/Home.js';
import Message from '../components/Message.js';

import '../css/app.css';
import '../css/iconfont.css';

const App = (props) => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/message" component={Message} />
                    <Route path="/me" render={() => (
                        <h1>我</h1>
                    )} />
                    <Route path="/" component={Home} />
                </Switch>
                <BottomBar
                    tabs={[
                        {
                            img: 'home',
                            text: '首页',
                            url: '/home'
                        },
                        {
                            img: 'message',
                            text: '消息',
                            url: '/message'
                        },
                        {
                            img: 'person',
                            text: '我',
                            url: '/me'
                        }
                    ]}
                />
            </div>
        </Router>
    )
}

export default App