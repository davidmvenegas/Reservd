import { createStore, combineReducers } from 'redux';
import UserReducer from './reducers/userReducer';
import CurrentReservation from './reducers/currentReservationReducer';
import NavigationReducer from './reducers/navigationReducer';

const rootReducer = combineReducers({
    user: UserReducer,
    navigation: NavigationReducer,
    currentReservation: CurrentReservation
});

export const store = createStore(rootReducer);