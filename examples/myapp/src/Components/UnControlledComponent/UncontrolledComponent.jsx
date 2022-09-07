import React, { Component } from "react";

class UncontrolledComponent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Input value - ", this.inputRef.current.value);
        }}
      >
        <div>
          <label>Uncontrolled input </label>
          <input type="date" name="data" id="date-input" ref={this.inputRef} />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default UncontrolledComponent;
