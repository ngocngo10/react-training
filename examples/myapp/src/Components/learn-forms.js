import React from "react";
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted:" + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          ></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

class EmployeeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.onCreateEmployee = this.onCreateEmployee.bind(this);
  }

  changeHandler(event) {
    this.setState({ Id: event.target.value });
  }

  onCreateEmployee() {
    alert(this.state.Id);
  }

  render() {
    return (
      <form>
        <label>
          Employee ID:{" "}
          <input
            type="text"
            name="Id"
            value={this.state.Id}
            onChange={this.changeHandler}
          ></input>
        </label>
        <button onClick={this.onCreateEmployee}>Create</button>
      </form>
    );
  }
}

function Test() {
  return (
    <>
      <NameForm></NameForm>
      <EmployeeComponent></EmployeeComponent>
    </>
  );
}

export default Test;
