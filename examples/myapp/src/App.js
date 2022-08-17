import "./App.css";
import { Feature, List } from "./Components/learn-components-props";
import Car from "./Components/learn-class-components";
import MyCar from "./Components/learn-state";
import { Header, Container } from "./Components/learn-lifecycle-components";

function App() {
  return (
    <>
      <Feature></Feature>
      <Car></Car>
      <List></List>
      <MyCar></MyCar>
      <Header favcol="yellow"></Header>
      <Container></Container>
    </>
  );
}

export default App;
