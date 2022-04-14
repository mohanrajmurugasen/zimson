import { ActionType } from "../type/type";

export const treatmentProduct = (treatment) => {
  return {
    type: ActionType.TREATMENT,
    payload: treatment,
  };
};
