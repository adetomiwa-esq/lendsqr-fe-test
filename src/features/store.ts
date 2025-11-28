import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./SidebarSlice"

 const store = configureStore({
    reducer: {
        asideSlice: sidebarReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;