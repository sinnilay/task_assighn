import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  isloggedIn:false
}

const authSlice = createSlice({
  name: 'auth', // is slice ka naam
  initialState,    // is slice ka initial state
  reducers: {      // reducers: actions ko handle karne wale functions
    login:(state)=>{
      state.isloggedIn=true
    },
    logout:(state)=>{
      state.isloggedIn=false
    }
  }
})

// Export actions to use in components
export const { login, logout } = authSlice.actions

// Export reducer to connect it to store
export default authSlice.reducer