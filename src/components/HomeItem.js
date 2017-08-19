import React, { Component } from 'react';
import moment from 'moment';

import '../css/home-item.css';

class HomeItem extends Component {
    render() {
        const {
            id,
            author_id,
            tab,
            content,
            title,
            last_reply_at,
            good,
            top,
            reply_count,
            visit_count,
            create_at,
            author
        } = this.props.topic;

        return (
            <div className="home-item" ref={this.props.setVisibilitySensor}>
                <div className="item-info">
                    <img src={author ? author.avatar_url : ''} alt="avatar" />
                    <h2 className="author-name">{author ? author.loginname : ''}</h2>
                    <span className="time">{moment(last_reply_at).locale('zh-cn').fromNow()}</span>
                </div>
                <h1 className="item-title">
                    {title}
                </h1>
                <div className="item-count">
                    {`${visit_count} 浏览 · ${reply_count} 评论`}
                </div>
            </div>
        )
    }
}

export default HomeItem;

