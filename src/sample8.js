import React from "react";
import ReactDOM from "react-dom";

class ChangeColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 0,
      color2: 1
    };
  }

  change = () => {
    this.setState({ color: this.state.color + 1 });
    console.log(this.state.color);
  };

  over = () => {
    this.setState({ color2: this.setState.color2 + 1 });
    console.log(this.state.color2);
  };

  render() {
    var colors = ["red", "blue", "black", "green"];
    var color = this.state.color % colors.length;
    var color2 = this.state.color2 % colors.length;
    var col = { color: colors[color] };
    var col2 = { color: colors[color2] };
    return (
      <React.Fragment>
        <h1 style={col}>chenge color this place</h1>
        <button onClick={this.change}>chenge color</button>
        <h2 style={col2} onMouseOver={this.over}>
          ここもオンマウスで色が変わるよ
        </h2>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<ChangeColor />, document.getElementById("root"));

