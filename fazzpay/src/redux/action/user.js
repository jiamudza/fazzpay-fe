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
  return (dispatch) => {
    dispatch(getAllUserRequest());
    return axios
      .get(`https://fazz.adaptable.app/api/v1/user`)
      .then((res) => {
        dispatch(getAllUserSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getAllUserFail(err.response.data));
      });
  };
};

//Get By Id

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
  return (dispatch) => {
    dispatch(getUserByIdRequest(id));
    return axios
      .get(`https://fazz.adaptable.app/api/v1/auth/user/${id}`)
      .then((res) => {
        dispatch(getUserByIdSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getUserByIdFail(err.response.data));
      });
  };
};
