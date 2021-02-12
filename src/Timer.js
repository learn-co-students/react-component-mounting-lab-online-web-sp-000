import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: 0,
    color: "#" + Math.floor(Math.random() * 16777215).toString(16)
  };

  // add your code here

  render() {
    const { time, color } = this.state;
    return (
      <section className="Timer" style={{ background: color }}>
        <h1>{time}</h1>
        <button onClick={this.stopClock}>Stop</button>
        <aside className="mountText">Mounted</aside>
        <small onClick={this.handleClose}>X</small>
      </section>
    );
  }

  //clock functions
  //this handles updating the state 
  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };

  //here we are setting an interval for clockTick every 1 second 
  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000);
  };

  stopClock = () => {
    clearInterval(this.interval);
  };

  // for the 'x' button,
  handleClose = () => {
    this.props.removeTimer(this.props.id);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  };
}

export default Timer;
