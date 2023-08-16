import axios from "axios";

const getUserByIdRequest = (id) => {
  return {
    type: "GET_DATA_USER_BY_ID_REQUEST",
    payload: id,
  };
};

const getUserByIdSuccess = (data) => {
  return {
    type: "GET_DATA_USER_BY_ID_SUCCESS",
    payload: data,
  };
};

const getUserByIdFail = (err) => {
  return {
    type: "GET_DATA_USER_BY_ID_FAIL",
    payload: err,
  };
};

export const getUserById = (id) => {
  return async (dispatch) => {
    dispatch(getUserByIdRequest(id));
    try {
      const res = await axios.get(
        `https://fazz.adaptable.app/api/v1/user/${id}`
      );
      dispatch(getUserByIdSuccess(res.data.data));
    } catch (err) {
      dispatch(getUserByIdFail(err.response.data));
    }
  };
};
