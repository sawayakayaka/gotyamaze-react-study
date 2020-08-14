import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date(),
      target: new Date(props.date).getTime()
    };
  }

  render() {
    var remain = Math.floor(
      (this.state.target - this.state.now) / (1000 * 60 * 60 * 24)
    );
    return (
      <p>
        {this.props.message}残り{remain}日
      </p>
    );
  }
}

CountDown.propTypes = {
  date: PropTypes.string,
  message: PropTypes.string
};

CountDown.defaultProps = {
  message: "Xデーまで"
};

ReactDOM.render(
  <CountDown date={"2112-09-03 00:00:00"} message={"ドラえもん誕生まで"} />,
  document.getElementById("root")
);

