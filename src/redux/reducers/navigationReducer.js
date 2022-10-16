const initialState = {
    location: 'HOME_SCREEN',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'HOME_SCREEN':
            return {
                ...state,
                location: 'HOME_SCREEN',
            };
        case 'WALLET_SCREEN':
            return {
                ...state,
                location: 'WALLET_SCREEN',
            };
        case 'SCAN_SCREEN':
            return {
                ...state,
                location: 'SCAN_SCREEN',
            };
        case 'FIND_SCREEN':
            return {
                ...state,
                location: 'FIND_SCREEN',
            };
        case 'SETTINGS_SCREEN':
            return {
                ...state,
                location: 'SETTINGS_SCREEN',
            };
        default:
            return state;
    }
};