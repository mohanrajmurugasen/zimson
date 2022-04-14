import { ActionType } from "../type/type";

const treatmentState = {
  treatment: "",
};

export const treatmentReducer = (state = treatmentState, { type, payload }) => {
  switch (type) {
    case ActionType.TREATMENT:
      return {
        ...state,
        treatment: payload,
      };
    default:
      return state;
  }
};
