import { createSlice } from "@reduxjs/toolkit";

const ProductEditSlice = createSlice({
    name:'product',
    initialState:{productEdit:undefined},

    reducers:{
        setProductEdit(state,action){
            state.productEdit = {...action.payload}
        },
        clearProductEdit(state){
            state.productEdit = undefined
        },
    }
})

export const {setProductEdit, clearProductEdit} = ProductEditSlice.actions
export default ProductEditSlice.reducer