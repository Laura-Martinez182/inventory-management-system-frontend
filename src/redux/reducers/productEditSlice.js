import { createSlice } from "@reduxjs/toolkit";

const ProductEditSlice = createSlice({
    name:'product',
    initialState:{productEdit:null},

    reducers:{
        setProductEdit(state,action){
            state.productEdit = {...action.payload}
        },
    }
})

export const {setProductEdit} = ProductEditSlice.actions
export default ProductEditSlice.reducer