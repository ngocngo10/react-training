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
      employee: {
        Id: "",
        Name: "",
        Location: "",
        Salary: "",
      },
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.onCreateEmployee = this.onCreateEmployee.bind(this);
  }

  changeHandler(event) {
    console.log(event.target.name);
    this.setState({
      employee: {
        ...this.state.employee,
        [event.target.name]: event.target.value,
      },
    });
  }

  onCreateEmployee() {
    alert(this.state.Id);
  }

  render() {
    return (
      <form>
        <p>
          <label>
            Employee ID :{" "}
            <input
              type="text"
              name="Id"
              value={this.state.employee.Id}
              onChange={this.changeHandler}
            ></input>
          </label>
        </p>
        <p>
          <label>
            Employee Name :{" "}
            <input
              type="text"
              name="Name"
              value={this.state.employee.Name}
              onChange={this.changeHandler}
            ></input>
          </label>
        </p>
        <p>
          <label>
            Employee Location :{" "}
            <input
              type="text"
              name="Location"
              value={this.state.employee.Location}
              onChange={this.changeHandler}
            ></input>
          </label>
        </p>
        <p>
          <label>
            Employee Salary :{" "}
            <input
              type="text"
              name="Salary"
              value={this.state.employee.Salary}
              onChange={this.changeHandler}
            ></input>
          </label>
        </p>
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
