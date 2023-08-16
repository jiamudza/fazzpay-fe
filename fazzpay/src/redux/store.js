// import { configureStore } from "@reduxjs/toolkit";
import historyReducer from "./reducer/history";
import userReducer from "./reducer/user";
import userIdReducer from "./reducer/userById";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer : {
        userData: userReducer,
        userDataById: userIdReducer,
        historyById: historyReducer
    }
})
    
export default store
