import {createSlice} from '@reduxjs/toolkit'

const initialState={
    user:{},
    loadedusers:[]
}
const selectedUser= createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state,data)=>{
            state.user=data.payload
        },
        setLoadedusers:(state,data)=>{
            state.loadedusers=data.payload
        }
    }
})


export const {addUser,setLoadedusers}=selectedUser.actions
export default selectedUser.reducer