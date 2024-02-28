import React from "react";
import CountRender from "./CountRender";
import Buttons from "./Buttons";
function Counter() {
    // retrive state from store
    // dispatch function to call action
    console.log("Counter-render");
    return (
        <>
            <CountRender />
            <Buttons />
        </>
    );
}

export default Counter;
