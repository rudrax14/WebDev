import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        },
    },
})

export const { increment, decrement, reset } = CounterSlice.actions // retrive function from reducer to use in component
export default CounterSlice.reducer // exporting reducer to use in store