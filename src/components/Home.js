import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomeHeader from './HomeHeader.js';
import HomeList from './HomeList.js';
import LongList from './LongList/LongList.js';

@inject('model') @observer
class Home extends Component {
    render() {
        return (
            <div>
                <HomeHeader tabs={['all', 'share', 'ask', 'job']} />
                <Switch>
                    <Route exact path={`${this.props.match.path}home/:tab`} component={HomeList} />
                    <Route path="/home" component={HomeList}></Route>
                    <Redirect to="/home"/>
                </Switch>
            </div>
        );
    }
}

export default Home;