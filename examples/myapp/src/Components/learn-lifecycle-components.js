import React from "react";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps");
  //   return { favoriteColor: "s" };
  // }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState({ favoriteColor: "blue" });
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    document.getElementById("my-div").innerHTML =
      "The updated favorite is " + this.state.favoriteColor;
  }

  changeColor = () => {
    this.setState({ favoriteColor: "black" });
  };

  render() {
    console.log("render");
    console.log(this.state.favoriteColor);
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
        <div id="my-div"></div>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  delHeader = () => {
    this.setState({ show: false });
  };

  render() {
    let myHeader;
    if (this.state.show) {
      myHeader = <Child></Child>;
    }
    return (
      <div>
        {myHeader}
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
      </div>
    );
  }
}

export { Header, Container };
