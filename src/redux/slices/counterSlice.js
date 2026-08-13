import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",

    initialState: {
        counter: 0
    },

    reducers: {
        incrementCounter: (state) => {
            state.counter += 1;
        },

        decrementCounter: (state) => {
            state.counter -= 1;
        },

        resetCounter: (state) => {
            state.counter = 0;
        },

        incrementByValue: (state, action) => {
            console.log(action);
            state.counter += action.payload;
        }
    }
});

export default counterSlice.reducer;

export const {
    incrementCounter,
    resetCounter,
    decrementCounter,
    incrementByValue
} = counterSlice.actions;