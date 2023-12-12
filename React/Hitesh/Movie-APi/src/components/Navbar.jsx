import React from "react";
import { GiBoxingGlove } from "react-icons/gi";
function Navbar() {
  return (
    <div className=" bg-slate-700 text-white h-32 justify-center flex items-center text-4xl">
      <div>Movie Fight</div>
      <div className=" ml-4">
        <GiBoxingGlove />
      </div>
    </div>
  );
}

export default Navbar;
