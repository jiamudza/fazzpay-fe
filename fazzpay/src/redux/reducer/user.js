const initialState = { loading: false, data: [], error: [] };

 const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_ALL_DATA_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ALL_DATA_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "GET_ALL_DATA_USER_FAIL":
      return {
        ...state,
        loading: true,
        data: [],
        error: action.payload
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer