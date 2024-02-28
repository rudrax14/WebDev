import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../redux/slices/CounterSlice'

function Buttons() {
    const dispatch = useDispatch();
    console.log("Buttons-render");
    return (
        <>
            <div className="card flex">
                <button onClick={() => {
                    dispatch(increment());
                }}>+</button>
                <button onClick={() => {
                    dispatch(decrement());
                }}>-</button>
            </div>
            <button onClick={() => {
                dispatch(reset())
            }}>Reset</button>
        </>
    )
}

export default Buttons