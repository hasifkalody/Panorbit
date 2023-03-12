import {configureStore} from '@reduxjs/toolkit'
import states from './user'

export const store=configureStore({
    reducer:{
        user:states
    }
})