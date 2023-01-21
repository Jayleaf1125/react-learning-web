import { useState } from "react";
import Button from "../Global/Button";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function addToCounter(): void {
    setCounter(counter + 1);
  }

  function removeToCounter(): void {
    setCounter(counter - 1);
  }

  return (
    <div className="border-black border-2 text-center p-4">
      <h1 className="text-lg font-medium mb-4">Counter App</h1>
      <div className="flex">
        <Button clickListener={addToCounter} title="Add" />
        <p className="mr-2 ml-2">{counter}</p>
        <Button clickListener={removeToCounter} title="Remove" />
      </div>
    </div>
  );
}
