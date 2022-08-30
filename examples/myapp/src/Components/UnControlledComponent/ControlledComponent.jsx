import React, { Component } from "react";

class ControlledComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Controlled Input </label>
            <input
              type="number"
              name="sentence"
              onChange={(event) => {
                this.setState({
                  text: event.target.value,
                });
              }}
              value={this.state.text}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default ControlledComponent;
