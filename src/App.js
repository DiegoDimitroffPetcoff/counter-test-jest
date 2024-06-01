import logo from "./logo.svg";
import "./App.css";

import { Counter } from "./components/Counter";

function App() {
  return (
    <>
      <h1>Counter</h1>
      <Counter testinitialCount={0} />
    </>
  );
}

export default App;
