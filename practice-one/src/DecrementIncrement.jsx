import React from "react";
import "./DecrementIncrement.css"

class DecrementIncrement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="container">
        <h1>Counter App</h1>
        <p className="count-number">{this.state.count}</p>
        <div className="btn-group">
          <button type="button" className="btn btn--incr" onClick={this.handleIncrement}>Increment</button>
          <button type="button" className="btn btn--decr" onClick={this.handleDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default DecrementIncrement;
