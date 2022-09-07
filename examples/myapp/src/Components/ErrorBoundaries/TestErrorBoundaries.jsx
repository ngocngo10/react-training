import React from "react";
import Input from "./Input";

//react-error-boundaries
const TestErrorBoundaries = () => {
  return (
    <div>
      <form>
        <Input name="name" placeholder="Enter your name"></Input>
        <Input type="email" name="email" placeholder="Enter your email address"/>
        <Input type="password" name="password" placeholder="Enter your password"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TestErrorBoundaries;
