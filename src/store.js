import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "../src/redux/reducers/index"

import { persistStore } from 'redux-persist';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( rootReducer,composeEnhancers(applyMiddleware(thunk)
    )
);

export const persistor = persistStore( store );

export default store;