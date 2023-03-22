import {
  ADD_RATE_USER,
  DELETE_RATE_USER,
  GET_RATE_USERS,
  SET_RATE_ERROR,
  SET_RATE_LOADING,
} from "../constants";
import nextId from "react-id-generator";
export const rateReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET_RATE_LOADING:
      return { ...state, loading: true };

    case GET_RATE_USERS:
      return {
        ...state,
        rate: payload,
        loading: false,
      };

    case ADD_RATE_USER:
      const newRateList = JSON.parse(JSON.stringify(state.rate));
      const newItem = {
        Id: nextId(),
        Title: "H",
        SchoolboyId: payload.SchoolboyId,
        ColumnId: payload.ColumnId,
      };
      newRateList.Items.push(newItem);
      return { ...state, rate: newRateList };

    case DELETE_RATE_USER:
      const newDeleteRateList = JSON.parse(JSON.stringify(state.rate.Items));
      const res = newDeleteRateList.findIndex(
        (item) =>
          item.SchoolboyId === payload.SchoolboyId &&
          item.ColumnId === payload.ColumnId
      );

      newDeleteRateList.splice(res, 1);

      return { ...state, rate: { Items: newDeleteRateList } };

    case SET_RATE_ERROR:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};
const initialState = {
  loading: true,
  rate: { Items: [{}] },
};
