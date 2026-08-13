import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/Counterslice";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

export default store;