export const login = ({payload}) => {
    return {
        type: 'USER_LOGIN',
        payload: payload
    };
};
export const logout = () => {
    return {
        type: 'USER_LOGOUT',
    };
}