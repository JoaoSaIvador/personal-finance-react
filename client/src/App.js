import Graph from "./components/Graph";
import CreateTransaction from "./components/CreateTransaction";

function App() {
  return (
    <div className="App d-flex justify-content-center">
      <div className="main-div d-flex flex-row justify-content-around flex-wrap">
        <Graph />
        <CreateTransaction />
      </div>

    </div>
  );
}

export default App;
