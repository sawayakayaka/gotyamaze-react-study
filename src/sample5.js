import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    });
  }

  tick() {
    this.setState({ now: new Date() });
  }

  render() {
    var now = this.state.now;
    var now_date = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join(
      "-"
    );
    var now_time = [now.getHours(), now.getMinutes(), now.getSeconds()].join(
      ":"
    );
    return (
      <h1>
        {now_date} {now_time}
      </h1>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));

