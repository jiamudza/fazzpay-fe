const initialState = { loading: false, history: {}, error: {} };

const historyReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_HISTORY_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_HISTORY_SUCCESS":
      console.log(action.payload)
      return {
        ...state,
        loading: false,
        history: action.payload,
      };
    case "GET_HISTORY_FAIL":
      console.log(action.payload)
      return {
        ...state,
        loading: true,
        history: {},
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }

};

export default historyReducer