import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieContext from "./MovieContext";

// export const movieApi = async ({
//   title,
//   setData,
//   setRightData,
//   setLeftData,
//   dir,
// }) => {
//   try {
//     const response = await axios.get(
//       `http://www.omdbapi.com/?s=${title}&apikey=a4405370`
//     );
//     // console.log(response.data.Search);
//     setData(response.data.Search);
//     console.log(dir);
//     setLeftData(response.data.Search);
//     setRightData(response.data.Search);
//     // if (dir == "left") {
//     //   setLeftData(response.data.Search);
//     // } else if (dir == "right") {
//     //   setRightData(response.data.Search);
//     // }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const movieApi = async ({
//   title,
//   setData,
//   setRightData,
//   setLeftData,
//   dir,
// }) => {
//   try {
//     const response = await axios.get(
//       `http://www.omdbapi.com/?s=${title}&apikey=a4405370`
//     );
//     setData(response.data.Search);
//     setLeftData(response.data.Search);
//     if (dir === "right") {
//       setRightData(response.data.Search);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// function MovieContextProvider({ children }) {
//   const [data, setData] = useState([]);
//   const [title, setTitle] = useState("");
//   // set direction
//   const [dir, setDir] = useState("");
//   // for data
//   const [leftData, setLeftData] = useState([]);
//   const [rightData, setRightData] = useState([]);
//   // for title
//   const [leftTitle, setLeftTitle] = useState("");
//   const [rightTitle, setRightTitle] = useState("");
//   useEffect(() => {
//     movieApi({ title, setData, setLeftData, setRightData, dir });
//   }, [title, dir]); // title kitne baar change hoga yea chalega re baaba

//   const value = {
//     data,
//     setData,
//     title,
//     setTitle,
//     leftData,
//     setLeftData,
//     rightData,
//     setRightData,
//     leftTitle,
//     setLeftTitle,
//     rightTitle,
//     setRightTitle,
//     setDir,
//     dir,
//   };

//   return (
//     <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
//   );
// }

// export default MovieContextProvider;

export const movieApi = async ({ title, setData }) => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${title}&apikey=a4405370`
    );
    setData(response.data.Search);
  } catch (error) {
    console.log(error);
  }
};

function MovieContextProvider({ children }) 
{
  // both came from dropdown menu
  const [leftData, setLeftData] = useState([]);
  const [rightData, setRightData] = useState([]);
  const [title, setTitle] = useState(""); // grab from input
  const [dir, setDir] = useState(""); // grap from main -> input

  useEffect(() => {
    if (dir === "left") {
      movieApi({ title, setData: setLeftData });
    } else if (dir === "right") {
      movieApi({ title, setData: setRightData });
    }
  }, [title, dir]);

  const value = {
    leftData,
    setLeftData,
    rightData,
    setRightData,
    title,
    setTitle,
    setDir,
    dir,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
      {/* //Main components mai dekho  */}
    </MovieContext.Provider>
  );
}

export default MovieContextProvider;
