const initialState = {
    userId: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                userId: action.payload,
            };
        case 'USER_LOGOUT':
            return {
                ...state,
                userId: null,
            };
        default:
            return state;
    }
};