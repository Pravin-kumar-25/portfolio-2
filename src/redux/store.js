import { configureStore } from "@reduxjs/toolkit";
import activeToggleReducer from './reducer'

export default configureStore({
    reducer: {
        activeSideToggle: activeToggleReducer
    }
})