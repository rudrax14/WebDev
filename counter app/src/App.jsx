import "./App.css";
import { useState } from "react";
function App() {

  const [increment, setIncrement] = useState(0)

  const decrementHandler = () => {
    setIncrement(increment - 1)
  }

  return (
    <div className=" flex justify-center flex-col gap-10 items-center h-screen w-screen bg-slate-800 text-white ">
      <div>
        <h2 className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</h2>
      </div>
      <div className="flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decrementHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">-</button>
        <div className="font-bold gap-12 text-5xl">{increment}</div>
        <button className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl" onClick={() => setIncrement(increment + 1)}>+</button>
      </div>
      <button className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg capitalize" onClick={() => setIncrement(0)}>Reset</button>
    </div >
  );
}

export default App;
