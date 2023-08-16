import axios from "axios";

const getAllUserRequest = () => {
  return {
    type: "GET_ALL_DATA_USER_REQUEST",
  };
};

const getAllUserSuccess = (data) => {
  return {
    type: "GET_ALL_DATA_USER_SUCCESS",
    payload: data,
  };
};

const getAllUserFail = (err) => {
  return {
    type: "GET_ALL_DATA_USER_FAIL",
    payload: err,
  };
};

export const getAllUser = () => {
  return async (dispatch) => {
    dispatch(getAllUserRequest());
    try {
      const res = await axios
        .get(`https://fazz.adaptable.app/api/v1/user`);
      dispatch(getAllUserSuccess(res.data.data));
    } catch (err) {
      dispatch(getAllUserFail(err.response.data));
    }
  };
};
