import { RECEIVE_LOGIN } from "../contstants/constants";

import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const initialState = {
    userData: [],
    
};

const userDataReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case RECEIVE_LOGIN:
            return {
                ...state,
                userData: action.userData
            };

        default:
            return state;
    }
};
const persistConfig = {
    keyPrefix: "molla-",
    key: "userData",
    storage
}

export default persistReducer( persistConfig, userDataReducer);