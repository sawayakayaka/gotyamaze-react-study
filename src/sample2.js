import React from "react";
import "./styles.css";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>click below button</h1>
        <Desp />
      </React.Fragment>
    );
  }
}

class Desp extends React.Component {
  constructor(props) {
    super();
    this.state = {
      num: 0
    };
    this.count = this.count.bind(this);
    this.reset = this.reset.bind(this);
  }

  count() {
    this.setState((state) => {
      return { num: state.num + 1 };
    });
  }

  reset() {
    this.setState(() => {
      return { num: 0 };
    });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.count}>click me!</button>
        <button onClick={this.reset}>reset!</button>
        <p>now {this.state.num} times clicked.</p>
      </React.Fragment>
    );
  }
}

