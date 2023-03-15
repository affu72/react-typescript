import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

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

  return (
    <div className="App">
      <Greet name={"Afzal"} messageCount={10} isLoggedIn={true} />
      <Person name={PersonName} />
      <PersonList nameList={nameList} />
    </div>
  );
}

export default App;
