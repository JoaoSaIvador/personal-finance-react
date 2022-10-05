import Graph from "./components/Graph";
import CreateTransaction from "./components/CreateTransaction";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="d-flex justify-content-center">

        <div className="main-div d-flex flex-row justify-content-around flex-wrap">
          <Graph />
          <CreateTransaction />
        </div>

      </div>
    </div>
  );
}

export default App;
