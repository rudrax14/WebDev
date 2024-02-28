import { useContext, useMemo, useState } from "react"
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {

  console.log("app re-rendererd");
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot >
    </div>
  )
}


function Count() {
  console.log("countMain re-rendererd");
  return (
    <div>
      <CountRender />
      <Buttons />
    </div>
  )
}

function CountRender() {
  console.log("countRender re-rendererd");
  const count = useRecoilValue(countAtom)
  return (
    <div>
      <p>{count}</p>
      <EvenCountRenderer />
    </div>
  )
}
function EvenCountRenderer() {
  // const isEven = useRecoilValue(evenSelector);
  // console.log("evenCountRenderer re-rendererd");
  const count = useRecoilValue(countAtom)

  return <div>
    {(count % 2 === 0) ? "It is even" : null}
    {/* {!isEven ? "It is even" : null} */}
  </div>
}

function Buttons() {
  console.log("buttons re-rendererd");
  const setCount = useSetRecoilState(countAtom);
  // const [count, setCount] = useRecoilState(countAtom); // will render the component when the state changes
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
