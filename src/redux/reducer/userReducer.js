import {
  GET_ALL_LESSONS,
  SET_USER_ERROR,
  SET_USER_LOADING,
  GET_ALL_USERS,
} from "../constants";

export const userReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET_USER_LOADING:
      return { ...state, loading: true };

    case GET_ALL_USERS:
      return {
        ...state,
        UserList: payload,
        loading: false,
      };

    case GET_ALL_LESSONS:
      return {
        ...state,
        LessonsList: payload,
        loading: false,
      };

    case SET_USER_ERROR:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};
const initialState = {
  loading: true,
  UserList: [
    {
      FirstName: "",
      Id: 1,
      LastName: "",
      SecondName: "",
    },
  ],

  LessonsList: [{}],
};
