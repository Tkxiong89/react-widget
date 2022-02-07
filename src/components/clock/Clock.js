import React, { Component } from 'react';
import './clock.css';
export default class Clock extends Component {

  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
  }

  }

  tick = () => {
      this.setState({ 
          date: new Date()
      });
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {

    let hours = this.state.date.getHours();
    let minutes = this.state.date.getMinutes();
    let seconds = this.state.date.getSeconds();

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    return  <div>
    <h1>Clock</h1>
    <div className='clock'>
      <p><span>
           Time:
         </span>
         <span>
           {hours}:{minutes}:{seconds} PDT
         </span>
      </p>
      <p>Date: 
        <span>{this.state.date.toDateString()}</span>
      </p>
    </div>
  </div>
  }
}
