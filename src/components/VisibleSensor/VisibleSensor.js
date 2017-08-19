import React, { Component } from 'react';

class VisibleSensor extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(ev) {
        console.log(ev);
    }

    render() {
        return (
            <div className="visible-sensor" onScroll={this.handleScroll}>
                {this.props.children}
            </div>
        )
    }
}

export default VisibleSensor;

