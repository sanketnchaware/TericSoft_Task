import {
  FILTER_BMX,
  FILTER_ROAD,
  FILTER_TRACK,
  FILTER_MOUNTAINS,
} from "./cycleTypes";

export const filter_BMX = () => {
  return {
    type: FILTER_BMX,
  };
};
export const filter_Mountains = () => {
  return {
    type: FILTER_MOUNTAINS,
  };
};
export const filter_Road = () => {
  return {
    type: FILTER_ROAD,
  };
};
export const filter_Track = () => {
  return {
    type: FILTER_TRACK,
  };
};
