import Dropdown from "./Dropdown";
import Input from "./Input";
import React, { useState } from "react";

// const [search, setsearch] = useState("left");

function Main() {
  return (
    <div className="bg-slate-900 text-white h-screen">
      <div className="container mx-auto flex justify-center w-3/5">
        <div className="flex-1 p-4">
          <div className="flex flex-col items-center">
            <Input side="left" />
            <Dropdown side="left" />
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="flex flex-col items-center">
            <Input side="right" />
            <Dropdown side="right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
