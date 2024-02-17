import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    // reducers: {
    //     addToCart: (state, action) => {
    //         state.cart = [...state.cart, action.payload];
    //     },
    //     removeFromCart: (state, action) => {
    //         state.cart = state.cart.filter(item => item.id !== action.payload.id);
    //     }
    // }
    reducers: {
        add: () => { },
        remove: () => { }
    }
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;