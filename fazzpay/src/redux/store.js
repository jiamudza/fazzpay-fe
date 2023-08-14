import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { userReducer } from "./reducer/user";

const reducers = combineReducers({
    userData: userReducer
})

const configureStore = () => {
    const store = createStore(reducers,
        applyMiddleware(thunk));
        return{store}
}

export default configureStore