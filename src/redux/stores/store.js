import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../reducers/productEditSlice'
import movementReducer from '../reducers/movementEditSlice'
import userReducer from '../reducers/userEditSlice'

export default configureStore({
  reducer: {
    product: productReducer,
    movement: movementReducer,
    user: userReducer,
  },
})