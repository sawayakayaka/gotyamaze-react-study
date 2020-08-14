import React from "react";
import ReactDOM from "react-dom";

class Omikuji extends React.Component {
  fortunes() {
    var fortunes = ["大吉", "中吉", "小吉", "凶"];
    var select = Math.ceil(Math.random() * 100) % fortunes.length;

    alert(`今日の運勢は${fortunes[select]}`);
  }

  mouseOver() {
    document.write("<p>hi</p>");
  }

  render() {
    return (
      <React.Fragment>
        <h1 onMouseOver={this.mouseOver}>mouse On!</h1>
        <button onClick={this.fortunes}>click!</button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Omikuji />, document.getElementById("root"));

