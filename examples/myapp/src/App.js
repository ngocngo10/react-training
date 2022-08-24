import "./App.css";
import { Feature, List } from "./Components/learn-components-props";
import Car from "./Components/learn-class-components";
import MyCar from "./Components/learn-state";
import { Header, Container } from "./Components/learn-lifecycle-components";
import {
  Football,
  Form,
  Toggle,
  LoggingButton,
} from "./Components/learn-handling-events";
import TestConditionalRending from "./Components/learn-conditional-rendering";
import TestList from "./Components/learn-list";
import TestForms from "./Components/learn-forms";
import Calculator  from "./Components/learn-lifting-state-up";
import SignUpDialog from "./Components/learn-composition-vs-inheritance";

function App() {
  return (
    <>
      <Feature></Feature>
      <Car></Car>
      <List></List>
      <MyCar></MyCar>
      <Header favcol="yellow"></Header>
      <Container></Container>
      <Football></Football>
      <Form></Form>
      <Toggle></Toggle>
      <LoggingButton></LoggingButton>
      <TestConditionalRending></TestConditionalRending>
      <TestList></TestList>
      <TestForms></TestForms>
      <Calculator></Calculator>
      <Si
    </>
  );
}

export default App;
