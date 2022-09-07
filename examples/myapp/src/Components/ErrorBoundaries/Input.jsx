import React from "react";
import { withErrorBoundary } from "react-error-boundary";

const Input = (props) => {
  const { type = "text", name = "", placeholder = "" } = props;
  return (
    <div>
      {props.name1.age}
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

function ErrorComponent() {
  return <div> Something went wrong with this component</div>;
}

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
