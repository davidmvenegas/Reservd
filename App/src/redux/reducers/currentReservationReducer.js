const initialState = {
    currentReservation: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CURRENT_RESERVATION':
            return {
                ...state,
                currentReservation: action.payload,
            };
        default:
            return state;
    }
};