import { data } from "../../data";
import {
  FILTER_BMX,
  FILTER_ROAD,
  FILTER_TRACK,
  FILTER_MOUNTAINS,
} from "./cycleTypes";

const initialState = {
  totalCycle: [...data],
};

export const cycleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BMX:
      return {
        ...initialState,
        totalCycle: [...initialState.totalCycle].filter(
          (item) => item.type === "BMX"
        ),
      };

    case FILTER_ROAD:
      return {
        ...initialState,
        totalCycle: [...initialState.totalCycle].filter(
          (item) => item.type === "road"
        ),
      };

    case FILTER_MOUNTAINS:
      return {
        ...initialState,
        totalCycle:[...initialState.totalCycle].filter(
          (item) => item.type === "mountains"
        ),
      };

    case FILTER_TRACK:
      return {
        ...initialState,
        totalCycle:[...initialState.totalCycle].filter(
          (item) => item.type === "track"
        ),
      };
    default:
      return state;
  }
};
