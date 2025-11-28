import { createSlice } from "@reduxjs/toolkit";


const initialState: boolean = false

const SidebarReducer = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleSidebar: (state) => (
            state = !state
        )
    }
})

export const { toggleSidebar } = SidebarReducer.actions

export default SidebarReducer.reducer;