export const addCurrentReservation = ({ payload }) => {
    return {
        type: 'ADD_CURRENT_RESERVATION',
        payload: payload
    };
};