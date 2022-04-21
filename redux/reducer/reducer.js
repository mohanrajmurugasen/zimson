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

const dataState = {
  data: {
    user: "",
    location: "",
    name: "",
    phone: "",
    email: "",
    gender: "",
    age: "",
    birthday: "",
    anniversary: "",
    about: "",
    brandPur: "",
    starPur: "",
    reasonPur: "",
    familyPur: "",
    ratePur: "",
    family2Pur: "",
    priceNon: "",
    brandNon: "",
    reasonNon: "",
    starNon: "",
    receiptServ: "",
    familyServ: "",
    qualityServ: "",
    deliveryServ: "",
    jobServ: "",
  },
};

export const dataReducer = (state = dataState, { type, payload }) => {
  switch (type) {
    case ActionType.DATA:
      return {
        ...state,
        data: {
          ...state.data,
          [payload.type]: payload.val,
        },
      };
    default:
      return state;
  }
};
