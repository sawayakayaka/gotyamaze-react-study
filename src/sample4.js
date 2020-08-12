import React from "react";
import ReactDOM from "react-dom";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val1: "foo",
      val2: ["bar", "baz"]
    };
    this.hundleClick = this.hundleClick.bind(this);
  }

  hundleClick() {
    this.setState(() => {
      return { val1: "bar" };
    });
  }

  render() {
    return (
      <div>
        <Child data={this.state.val1} hundleClick={this.hundleClick} />
      </div>
    );
  }
}

const Child = (props) => (
  <div onClick={props.hundleClick}>{props.data}</div>
);

ReactDOM.render(<Parent />, document.getElementById("root"));

