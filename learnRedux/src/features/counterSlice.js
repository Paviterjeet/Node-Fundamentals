import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name : 'Counter',
    initialState : {countValue : 0},
    reducers : {
        increment : (state)=>{state.countValue += 1},
        decrement : (state)=>{state.countValue -= 1}
    }
})

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;