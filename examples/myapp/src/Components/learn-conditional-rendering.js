function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGold() {
  return <h1>Gold!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGold></MadeGold>;
  }
  return <MissedGoal></MissedGoal>;
}

function Garage(props) {
  const cars = props.cars;
  //   If cars.length is equates to true, the expression after && will render.
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && <h2>Your have {cars.length} cars in your garage.</h2>}
    </>
  );
}

function Goal1(props) {
  const isGoal1 = props.isGoal1;
  return <>{isGoal1 ? <MadeGold></MadeGold> : <MissedGoal></MissedGoal>}</>;
}

const cars = ["Ford", "BMW", "Audi"];

function Test() {
  return (
    <>
      <Goal isGoal={false}></Goal>
      <Garage cars={cars}></Garage>
      <Goal1 isGoal1={false}></Goal1>
    </>
  );
}

export default Test;
