import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slices/CounterSlice'
export const store = configureStore({
    reducer: {
        // key: value pair only
        // multiple reducers/slices can be added here
        counter: CounterSlice,
    },
})