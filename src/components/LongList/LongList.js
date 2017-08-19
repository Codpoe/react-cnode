import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import HomeItem from '../HomeItem.js';
import './long-list.css';

@inject('model') @observer
class LongList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 0
        };
        this.lastScrollTop = 0;
        this.itemHeight = 120;
        this.visibleCount = 0;
        this.renderCount = 0;
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.props.model.switchTab(this.props.match.params.tab || 'all');
        this.props.model.changeScrollTop(0);
        this.visibleCount = Math.ceil(this.list.clientHeight / this.itemHeight);
        this.renderCount = this.visibleCount + 20;
    }

    componentWillReceiveProps(nextProps) {
        nextProps.model.switchTab(nextProps.match.params.tab || 'all');
        this.list.scrollTop = nextProps.model.currentScrollTop;
    }

    handleScroll(ev) {
        this.lastScrollTop = 0;
        if (Math.abs(this.list.scrollTop - this.lastScrollTop) > this.itemHeight * 10) {
            this.lastScrollTop = this.list.scrollTop;
            let start = Math.floor(this.list.scrollTop / this.itemHeight) - 10;
            if (start < 0) {
                start = 0;
            }
            this.setState({
                start
            });
        }
        this.props.model.changeScrollTop(this.list.scrollTop);
    }

    render() {
        const data = this.props.model.topics[this.props.model.currentTab || 'all'].list;
        let end = this.state.start + this.renderCount;
        if (end > data.length) {
            end = data.length;
        }
        const visibleData = data.slice(this.state.start, end);
        const fixedScrollTop = this.state.start * this.itemHeight;
        return (
            <div className="long-list" ref={el => this.list = el} onScroll={this.handleScroll}>
                <div className="list-holder" style={{height: `${data.length * this.itemHeight}px`}}></div>
                <ul className="list-content" style={{transform: `translateY(${this.state.fixedScrollTop}px)`}}>
                    {visibleData.map((item) => (
                        <HomeItem item={item} key={item.id}></HomeItem>
                    ))}
                </ul>
            </div>
        )
    }
}

export default LongList;

