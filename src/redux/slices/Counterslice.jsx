import { createSlice } from "@reduxjs/toolkit";

const counter=createSlice([
    name:"counter",
    initialState=[
        "counter"=0
    ],
    reducers[
        IncrementCounter:{state,payload()=>{
            return state counter+=1
        }}
        DecrementCouneter:{state,payload()=>{
            return state counter-=1
        }}
        resetCounter:{state,payload()=>{
            return state counter=0
        }}
        IncrementByvalue::{state,payload()=>{
            return state counter=0
        }}
    ]

])