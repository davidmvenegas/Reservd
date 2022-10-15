import { createStore, combineReducers } from 'redux';
import UserReducer from './reducers/userReducer';
import CountReducer from './reducers/countReducer';

const rootReducer = combineReducers({
    user: UserReducer,
    count: CountReducer
});

export const store = createStore(rootReducer);