import { useState } from "react";
export const Counter = () => {
  const [counter, setCounter] = useState(0);

  function Increment() {
    setCounter((preNumber) => preNumber + 1);
  }
  function Decrement() {
    setCounter((preNumber) => preNumber - 1);
  }
  function Restart() {
    setCounter((preNumber) => (preNumber = 0));
  }
  function Switch() {
    setCounter((preNumber) => preNumber * -1);
  }
  return (
    <div className="App App-header">
      <header>{counter}</header>
      <section>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Restart}>Restart</button>
        <button onClick={Switch}>Switch Sign</button>
      </section>
    </div>
  );
};
