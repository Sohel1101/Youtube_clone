import { createSlice } from "@reduxjs/toolkit";

const appSlice =createSlice({
    name:'app',
    initialState:{
        isOpen:true,
        searchText:null,
    },
    reducers:{
        toggleSidebar: (state)=>
        {
            state.isOpen=!state.isOpen
        },
        closeSidebar :(state)=>
        {
            state.isOpen=false
        },
        setSearchText:(state,action)=>
        {
            state.searchText=action.payload
        }
    }
})

export const {toggleSidebar,closeSidebar,setSearchText} =appSlice.actions;
export default appSlice.reducer;