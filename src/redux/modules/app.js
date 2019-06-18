const initialState = {
    error: null
}
export const types = {
    CLEAR_EPPOR: "APP/CLEAR_ERROR"
}
export const actions = {
    clearError: () => ({
        type: types.CLEAR_EPPOR
    })
}

const reducer = (state = initialState, action) => {
    const { type, error } = action;
    if (type === types.CLEAR_EPPOR) {
        return { ...state, error: null }
    } else if (error) {
        return { ...state, error }
    }
    return state;
}
export default reducer;




export const getError = (state) => state.app.error;