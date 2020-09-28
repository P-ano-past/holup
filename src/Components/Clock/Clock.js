import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  render() {
    return (
        <p className="clock">{this.state.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
    );
  }
}

// need to configure dynamic set interval
// need to configure date and time seperately. 
// 