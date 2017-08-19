import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import HomeItem from './HomeItem.js';

import '../css/home-list.css';

@inject('model') @observer
class HomeList extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.setVisibilitySensor = this.setVisibilitySensor.bind(this);
    }

    componentDidMount() {
        this.props.model.switchTab()
    }
    
    handleScroll(ev) {
        if (!this.visibilitySensor) {
            return;
        }
        if (this.props.model.fetchState !== 'pending'
            && window.innerHeight - this.visibilitySensor.getBoundingClientRect().bottom > 56) {
            this.props.model.fetchTopics();
        }
    }

    setVisibilitySensor(el) {
        this.visibilitySensor = el;
    }

    render() {
        const topics = this.props.model.topics[this.props.model.currentTab || 'all'].list;
        return (
            <ul className="home-list" onScroll={this.handleScroll}>
                {topics.map((topic, index) => {
                    if (topics.length - index === 3) {
                        return (
                            <HomeItem
                                topic={topic}
                                setVisibilitySensor={this.setVisibilitySensor}
                                key={topic.id}>
                            </HomeItem>
                        )
                    } else {
                        return (
                            <HomeItem
                                topic={topic}
                                key={topic.id}>
                            </HomeItem>
                        )
                    }
                })}
            </ul>
        )    
    }
}

export default HomeList;

