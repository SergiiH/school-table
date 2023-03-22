import {
  SET_USER_LOADING,
  GET_ALL_USERS,
  SET_USER_ERROR,
  GET_ALL_LESSONS,
  GET_RATE_USERS,
  SET_RATE_LOADING,
  SET_RATE_ERROR,
  ADD_RATE_USER,
  DELETE_RATE_USER,
} from "../constants";
import {
  addRateApi,
  getAllLessonsApi,
  getAllUserApi,
  getRateApi,
  removeRateApi,
} from "../api/api";

// User Action
export const getAllUserAction = () => async (dispatch) => {
  dispatch({ type: SET_USER_LOADING });
  try {
    const { data } = await getAllUserApi();
    dispatch({ type: GET_ALL_USERS, payload: data });
  } catch (err) {
    dispatch({ type: SET_USER_ERROR, payload: err });
  }
};

export const getAllLessonsAction = () => async (dispatch) => {
  dispatch({ type: SET_USER_LOADING });
  try {
    const { data } = await getAllLessonsApi();
    dispatch({ type: GET_ALL_LESSONS, payload: data });
  } catch (err) {
    dispatch({ type: SET_USER_ERROR, payload: err });
  }
};

export const getRateAction = () => async (dispatch) => {
  dispatch({ type: SET_RATE_LOADING });
  try {
    const { data } = await getRateApi();
    dispatch({ type: GET_RATE_USERS, payload: data });
  } catch (err) {
    dispatch({ type: SET_RATE_ERROR, payload: err });
  }
};

export const addRateAction = (body) => async (dispatch) => {
  // dispatch({ type: SET_RATE_LOADING });
  try {
    await addRateApi(body);
    dispatch({ type: ADD_RATE_USER, payload: body });
  } catch (err) {
    dispatch({ type: SET_RATE_ERROR, payload: err });
  }
};

export const removeRateAction = (body) => async (dispatch) => {
  // dispatch({ type: SET_RATE_LOADING });
  try {
    await removeRateApi(body);
    dispatch({ type: DELETE_RATE_USER, payload: body });
  } catch (err) {
    dispatch({ type: SET_RATE_ERROR, payload: err });
  }
};
