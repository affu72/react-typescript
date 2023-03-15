import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import ChildAsComponent from "./components/ChildAsComponent";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const PersonName = {
    firstName: "Afzal",
    lastName: "Nomani",
  };

  const nameList = [
    { first: "Afzal", last: "Nomani" },
    { first: "Karan", last: "Yadav" },
    { first: "Kajal", last: "Jha" },
  ];

  const clickHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    msg: string
  ) => {
    console.log("Clicked" + msg, event);
  };

  return (
    <div className="App">
      <Greet name={"Afzal"} isLoggedIn={true} />
      <Person name={PersonName} />
      <PersonList nameList={nameList} />
      <Status status="success" />
      <Heading>Hello this is heading passed as children</Heading>
      <ChildAsComponent>
        <Heading>This is a component as child of above </Heading>
      </ChildAsComponent>
      <Input
        value=""
        handleChange={(event) => console.log(event.target.value)}
      ></Input>
      <Button handleClick={clickHandler}></Button>
    </div>
  );
}

export default App;
