import React from 'react'
import { useSelector } from 'react-redux'

function CountRender() {
    const count = useSelector((state) => state.counter.value);
    console.log("CountRender-render");
    return (
        <p>{count}</p>
    )
}

export default CountRender