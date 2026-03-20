import {configureStore} from '@reduxjs/toolkit'
import shoppingSliceReducer from '../features/shoppingSlice/index'

export const store = configureStore({
    reducer:{
     shopping:shoppingSliceReducer
    }
})