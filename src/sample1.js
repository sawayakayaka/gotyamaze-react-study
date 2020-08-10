import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class JankenGamePage extends React.Component {
  constructor(props) {
    super();
    this.state = { human: null, computer: null };
  }

  pon(human_hand) {
    const computer_hand = Math.floor(Math.random() * 3);
    this.setState({ human: human_hand, computer: computer_hand });
  }

  judge() {
    if (this.state.human == null) {
      return null;
    } else {
      return (this.state.computer - this.state.human + 3) % 3;
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>じゃんけんぽん</h1>
        <JankenBox actionPon={(te) => this.pon(te)} />
        <ScoreBox
          human={this.state.human}
          computer={this.state.computer}
          judgement={this.judge()}
        />
      </React.Fragment>
    );
  }
}

const JankenBox = (props) => {
  return (
    <React.Fragment>
      <button onClick={() => props.actionPon(0)}>グー</button>
      <button onClick={() => props.actionPon(1)}>パー</button>
      <button onClick={() => props.actionPon(2)}>チョキ</button>
    </React.Fragment>
  );
};

JankenBox.PropTypes = {
  actionPon: PropTypes.func
};

const ScoreBox = (props) => {
  const teString = ["グー", "チョキ", "パー"];
  const judgementString = ["引き分け", "勝ち", "負け"];
  return (
    <table>
      <tbody>
        <tr>
          <th>あなた</th>
          <td>{teString[props.human]}</td>
        </tr>
        <tr>
          <th>コンピュータ</th>
          <td>{teString[props.computer]}</td>
        </tr>
        <tr>
          <th>勝敗</th>
          <td>{judgementString[props.judgement]}</td>
        </tr>
      </tbody>
    </table>
  );
};

ScoreBox.PropTypes = {
  human: PropTypes.number,
  computer: PropTypes.number,
  judgement: PropTypes.number
};

ReactDOM.render(<JankenGamePage />, document.getElementById("root"));
