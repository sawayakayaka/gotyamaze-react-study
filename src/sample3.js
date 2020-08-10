import React from "react";
import ReactDOM from "react-dom";

class WaterDisp extends React.Component {
  constructor(props) {
    super();
    this.state = {
      temp: 20,
      conf: "過ごしやすいね"
    };
  }

  up = () => {
    this.setState({ temp: this.state.temp + 1 });
    this.comment(this.state.temp);
  };

  down = () => {
    this.setState({ temp: this.state.temp - 1 });
    this.comment(this.state.temp);
  };

  comment = (temp) => {
    if (temp <= 19) {
      this.setState(() => {
        return { conf: "肌寒いかもね" };
      });
    } else if (temp >= 20 && temp < 25) {
      this.setState(() => {
        return { conf: "いい感じ" };
      });
    } else if (temp >= 25) {
      this.setState(() => {
        return { conf: "あっついよね" };
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1>温度計</h1>
        <p>現在の温度:{this.state.temp}度</p>
        <p>
          うーん、{this.state.temp}度だと{this.state.conf}
        </p>
        <button onClick={this.up}>+</button>
        <button onClick={this.down}>-</button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<WaterDisp />, document.getElementById("root"));

