import { createSlice } from "@reduxjs/toolkit";
import items from "../../items";

const cartSlice = createSlice({
    name : "cart",
    initialState : {items : []},
    reducers : {
        addItem : (state , action)=>{ state.items.push(action.payload); },
        removeItem : (state , action)=>{
            state.items = state.items.filter(item=> item.itemId!==action.payload);
        },
    }
})

export const {addItem,removeItem}=cartSlice.actions;
export default cartSlice.reducer;