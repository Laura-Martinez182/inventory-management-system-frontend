import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../reducers/productEditSlice'


export default configureStore({
  reducer: {
    product: productReducer,
  },
})