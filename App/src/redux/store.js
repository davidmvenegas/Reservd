import { createStore, combineReducers } from 'redux';
import UserReducer from './reducers/userReducer';
import CountReducer from './reducers/countReducer';
import NavigationReducer from './reducers/navigationReducer';

const rootReducer = combineReducers({
    user: UserReducer,
    navigation: NavigationReducer,
    count: CountReducer
});

export const store = createStore(rootReducer);