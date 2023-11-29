import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../reducers/productEditSlice'
import movementReducer from '../reducers/movementEditSlice'

export default configureStore({
  reducer: {
    product: productReducer,
    movement: movementReducer,
  },
})