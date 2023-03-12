import {createSlice} from '@reduxjs/toolkit'

const initialState={
    user:{}
}
const selectedUser= createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state,data)=>{
            state.user=data.payload
        }
    }
})

const {addUser}=selectedUser.actions
export {addUser}
export default selectedUser.reducer