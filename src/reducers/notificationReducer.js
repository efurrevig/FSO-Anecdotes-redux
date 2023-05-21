import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        changeNotification(state, action) {
            return action.payload
        }
    }
})

export const { changeNotification } = notificationSlice.actions

export const setNotification = (message, time) => {
    return dispatch => {
        dispatch(changeNotification(message))
        setTimeout(() => {
            dispatch(changeNotification(''))
        }, time*1000)
    }
}

export default notificationSlice.reducer