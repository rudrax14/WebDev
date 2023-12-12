import React, { useState, useContext } from "react";
import MovieContext from "./context/MovieContext";

// function Input({ side }) {
//   const [name, setName] = useState("");
//   const { setTitle, setLeftTitle, setRightTitle, setDir } =
//     useContext(MovieContext);

//   // const handleInputChange = (e) => {
//   //   const inputValue = e.target.value;
//   //   setName(inputValue);
//   //   setTitle(inputValue);
//   // };

//   const handleInputChange = (e) => {
//     const inputValue = e.target.value;
//     setName(inputValue);
//     setTitle(inputValue); // for title
//     // console.log("side", side);
//     if (side === "left") {
//       console.log("left title");
//       setDir(side);
//       setLeftTitle(inputValue);
//     } else if (side === "right") {
//       console.log("right title");
//       setDir(side);
//       setRightTitle(inputValue);
//     }
//   };

//   return (
//     <div className="w-[100%]">
//       <h1 className="text-2xl">Search {side}</h1>
//       <input
//         type="text"
//         className="border-slate-50 border-solid rounded-md border-2 w-[100%] bg-slate-500 h-8 p-2"
//         value={name}
//         onChange={handleInputChange}
//       />
//     </div>
//   );
// }

function Input({ side }) {
  const [name, setName] = useState("");
  const { setTitle, setDir } = useContext(MovieContext);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
    setTitle(inputValue);
    setDir(side);
  };

  return (
    <div className="w-[100%]">
      <h1 className="text-2xl">Search {side}</h1>
      <input
        type="text"
        className="border-slate-50 border-solid rounded-md border-2 w-[100%] bg-slate-500 h-8 p-2"
        value={name}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Input;
