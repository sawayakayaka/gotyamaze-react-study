import React from "react";
import ReactDOM from "react-dom";

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogedIn: false
    };
    this.logedIn = this.logedIn.bind(this);
    this.logedOut = this.logedOut.bind(this);
  }

  logedIn = () => {
    this.setState({ isLogedIn: true });
  };

  logedOut = () => {
    this.setState({ isLogedIn: false });
  };

  render() {
    const isLogedIn = this.state.isLogedIn;
    let message;
    let button;

    if (isLogedIn) {
      message = "ログインしています";
      button = <LogoutButton onClick={this.logedOut} />;
    } else {
      message = "ログインしてください";
      button = <LoginButton onClick={this.logedIn} />;
    }

    return (
      <React.Fragment>
        <h1>{message}</h1>
        {button}
      </React.Fragment>
    );
  }
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>ログアウト</button>;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>ログイン</button>;
}

ReactDOM.render(<LoginControl />, document.getElementById("root"));

