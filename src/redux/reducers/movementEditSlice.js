import { createSlice } from "@reduxjs/toolkit";

const MovementEditSlice = createSlice({
    name:'movement',
    initialState:{movementEdit:undefined},

    reducers:{
        setMovementEdit(state,action){
            state.movementEdit = {...action.payload}
        },
        clearMovementEdit(state){
            state.movementEdit = undefined
        },
    }
})

export const {setMovementEdit, clearMovementEdit} = MovementEditSlice.actions
export default MovementEditSlice.reducer