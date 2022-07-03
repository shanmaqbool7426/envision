import { RECEIVE_ARTICLS } from "../contstants/constants";

import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const initialState = {
    articles: [],
    articleDetail: [],
    
};

const articleReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case RECEIVE_ARTICLS:
            return {
                ...state,
                articles: action.articles
            };

        default:
            return state;
    }
};
const persistConfig = {
    keyPrefix: "molla-",
    key: "articls",
    storage
}

export default persistReducer( persistConfig, articleReducer );