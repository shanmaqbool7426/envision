import {RECEIVE_CATEGORIES } from "../contstants/constants";

import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const initialState = {
   categories: [],
  
    
};

const categoryReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            };

        default:
            return state;
    }
};
const persistConfig = {
    keyPrefix: "molla-",
    key: "category",
    storage
}

export default persistReducer( persistConfig, categoryReducer );