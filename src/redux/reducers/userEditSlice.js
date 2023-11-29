import { createSlice } from "@reduxjs/toolkit";

const UserEditSlice = createSlice({
    name:'user',
    initialState:{userEdit:undefined},

    reducers:{
        setProductEdit(state,action){
            state.productEdit = {...action.payload}
        },
        clearProductEdit(state){
            state.productEdit = undefined
        },
    }
})

export const {setUserEdit, clearUserEdit} = UserEditSlice.actions
export default UserEditSlice.reducer