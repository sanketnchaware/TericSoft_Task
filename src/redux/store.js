import { createStore } from "redux";
import { cycleReducer } from "./cycle/cycleReducer";

export const store = createStore(cycleReducer);
