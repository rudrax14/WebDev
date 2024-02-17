import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/slices/CounterSlice";
function Counter() {
    const count = useSelector((state) => state.counter.value); // retrive state from store
    const dispatch = useDispatch(); // dispatch function to call action

    return (
        <>

            <div className="card flex">
                <button onClick={() => {
                    dispatch(increment());
                }}>+</button>
                <p>{count}</p>
                <button onClick={() => {
                    dispatch(decrement());
                }}>-</button>
            </div>
            <button onClick={() => {
                dispatch(reset())
            }}>Reset</button>
        </>
    );
}

export default Counter;
