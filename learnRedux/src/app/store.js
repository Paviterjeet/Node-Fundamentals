import counterReducer from '../features/counterSlice.js'
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
    reducer : {
        counter : counterReducer
    }
})


