import { useState } from "react";

const Car = () => {
  // const [brand, setBrand] = useState("Ford");
  // const [model, setModel] = useState("Mustang");
  // const [year, setYear] = useState("1964");
  // const [color, setColor] = useState("red");

  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={updateColor}>
        Blue
      </button>
    </>
  );
};

export default Car;
