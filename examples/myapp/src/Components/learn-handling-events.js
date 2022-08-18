import React from "react";

function Football() {
  const shoot = () => {
    alert("Great Shot!");
  };

  const sum = (a, b) => {
    alert(`SUM = ${a + b}`);
  };

  return (
    <>
      <button onClick={shoot}>Take the shot!</button>
      <button onClick={() => sum(7, 5)}>Sum</button>
    </>
  );
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("You clicked submit");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick1 = this.handleClick;
  }

  handleClick() {
    console.log("handleClick", this);
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    console.log("render", this);
    return (
      <button onClick={this.handleClick1}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

class LoggingButton extends React.Component {
  //   handleClick = () => {
  //     console.log("this is", this);
  //   };

  handleClick() {
    console.log("this is", this);
  }

  // This syntax ensures `this` is bound within handleClick
  render() {
    return <button onClick={() => this.handleClick()}>Click me</button>;
  }
}

export { Football, Form, Toggle, LoggingButton };
