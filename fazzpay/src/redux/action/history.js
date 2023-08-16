import axios from "axios";

const getHistoryByIdRequest = (id) => {
  return {
    type: "GET_HISTORY_REQUEST",
    payload: id,
  };
};
const getHistoryByIdSuccess = (data) => {
  return {
    type: "GET_HISTORY_SUCCESS",
    payload: data,
  };
};
const getHistoryByIdFail = (err) => {
  return {
    type: "GET_HISTORY_FAIL",
    payload: err,
  };
};

export const getHistoryById = (id) => {
  return async (dispatch) => {
    dispatch(getHistoryByIdRequest(id));
    try {
      const res = await axios.get(
        `https://fazz.adaptable.app/api/v1/transaction/${id}`
      );
      dispatch(getHistoryByIdSuccess(res.data.data));
    } catch (error) {
      dispatch(getHistoryByIdFail(error.response));
    }
  };
};
