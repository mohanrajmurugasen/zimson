import { ActionType } from "../type/type";

export const treatmentProduct = (treatment) => {
  return {
    type: ActionType.TREATMENT,
    payload: treatment,
  };
};

export const dataProduct = (data) => {
  return {
    type: ActionType.DATA,
    payload: data,
  };
};
