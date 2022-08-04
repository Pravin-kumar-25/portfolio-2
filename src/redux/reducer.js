import { createSlice } from "@reduxjs/toolkit";

const activeSideToggle = createSlice({
    name: "activeSideToggle",
    initialState: {
        value: "Backend"
    },
    reducers: {
        changeToggle: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changeToggle } = activeSideToggle.actions
export default activeSideToggle.reducer