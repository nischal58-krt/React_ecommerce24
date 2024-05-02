import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: []
  },
  reducers: {
    addItem:(state,action)=>{
        state.value = ["one", "two", "three"]
        // state.value.push(action.payload)
    },
    resetCart:(state,action)=>{
        state.value = []
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItem,resetCart } = cartSlice.actions

export default cartSlice.reducer