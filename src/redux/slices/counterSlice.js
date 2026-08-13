import { createSlice } from "@reduxjs/toolkit";


const counnterSlice=createSlice({
    name:'counter',
    initialState:{
        "counter":0
    },
    reducers:{
        incrementCounter:(state,payload)=>{
             state.counter+=1
        },
        decrementCounter:(state,payload)=>{
             state.counter-=1
        },
        resetCounter:(state,payload)=>{
             state.counter=0
        },
        incrementByValue:(state,payload)=>{
             state.counter+=payload.payload
        }
    }
})


export default counterSlice.reducer;
export const {incrementCounter,decrementCounter,resetCounter,incrementByValue} = counnterSlice.actions;