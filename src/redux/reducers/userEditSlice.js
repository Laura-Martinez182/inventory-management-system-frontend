import { createSlice } from "@reduxjs/toolkit";

const UserEditSlice = createSlice({
    name:'user',
    initialState:{userEdit:undefined},

    reducers:{
        setUserEdit(state,action){
            state.userEdit = {...action.payload}
        },
        clearUserEdit(state){
            state.userEdit = undefined
        },
    }
})

export const {setUserEdit, clearUserEdit} = UserEditSlice.actions
export default UserEditSlice.reducer