const initialState = { loading: false, data: [], error: [] };

export const userReducer = (state = initialState, action = {}) => {
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
    case "GET_ALL_DATA_USER_BY_ID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ALL_DATA_USER_BY_ID_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "GET_ALL_DATA_USER__BY_ID_FAIL":
      return {
        ...state,
        loading: true,
        data: [],
        error: action.payload
      };
    default:
      return {
        state,
      };
  }
};
