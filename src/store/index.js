import { configureStore } from "@reduxjs/toolkit";
import counterRedecer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterRedecer, auth: authReducer },
});

export default store;
