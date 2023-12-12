import React, { useContext } from "react";
import MovieContext from "./context/MovieContext";
import Body from "./Body";

function Dropdown({ side }) {
  const { leftData, rightData } = useContext(MovieContext);

  function renderDropDownItems() {
    const apiData = side === "left" ? leftData : rightData;
    if (apiData && apiData.length > 0) {
      return apiData.map((movie) => (
        <div
          className="hover:bg-slate-900 flex mt-2 items-center transition ease-in-out duration-700 transform hover:-translate-y-2"
          key={movie.imdbID}
        >
          <img className="object-scale-down w-12" src={movie.Poster} alt={movie.Title} />
          <span className="ml-2 text-lg">{movie.Title}</span>
        </div>
      ));
    } else {
      return <Body />;
    }
  }

  const containerClasses = `bg-gray-700 w-[100%] p-3 mt-2 text-2xl cursor-pointer ${(side === "left" && leftData && leftData.length > 0) ||
      (side === "right" && rightData && rightData.length > 0)
      ? ""
      : "invisible"
    }`;

  return <div className={containerClasses}>{renderDropDownItems()}</div>;
}

export default Dropdown;
