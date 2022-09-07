import React from "react";

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(",")}</div>;
  }
}

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ["marklar"],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This section is bad style and causes a bug
    // const words = this.state.words;
    // console.log("words", words);
    // words.push("marklar");
    // this.setState({ words: words });
    this.setState((state) => ({
      words: [...state.words, "marklar"],
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add Word</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}

class TestPureComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "JMaster",
    };
  }

  handleClick = () => {
    this.setState({ name: "JMaster" });
  };

  render() {
    return (
      <>
        <User name={this.state.name} />
        <UserPure name={this.state.name} />
        <button onClick={this.handleClick}>Change Name</button>
      </>
    );
  }
}

class User extends React.Component {
  render() {
    console.log("Render Component");
    return <p>{this.props.name}</p>;
  }
}

class UserPure extends React.PureComponent {
  render() {
    console.log("Render Pure Component");
    return <p>{this.props.name}</p>;
  }
}

export { CounterButton, WordAdder, TestPureComponent };
