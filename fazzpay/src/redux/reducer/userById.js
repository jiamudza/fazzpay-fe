const initialState = { loading: false, data: {}, error: [] };

const userIdReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_DATA_USER_BY_ID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_DATA_USER_BY_ID_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "GET_DATA_USER_BY_ID_FAIL":
      return {
        ...state,
        loading: true,
        data: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userIdReducer
