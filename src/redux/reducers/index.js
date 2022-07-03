import { combineReducers } from "redux";
import articleReducer from "../reducers/articleReducer"
import categoryReducer from "./categoryReducer";
import authReducer from "./userData";

const rootReducer= combineReducers({
    articles:articleReducer,
    userData:authReducer,
    categories:categoryReducer
})
export default rootReducer