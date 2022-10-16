const initialState = {
    userId: null,
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                userId: action.payload.userId,
            };
        case 'USER_LOGOUT':
            return {
                ...state,
                userId: null,
            };
        case 'LOADING':
            return {
                ...state,
                loading: action.payload.loading,
            };
        default:
            return state;
    }
};