import Timer from "./components/Timer";
import Controls from "./components/Controls";

function App() {
  return (
    <div className="App">
      <h1>Pomo Timer</h1>
      <Timer timerStart={new Date()} timerDuration={1500} />
      <Controls />
    </div>
  );
}

export default App;
