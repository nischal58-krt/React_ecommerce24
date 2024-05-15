import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value:[]
    // value: ["one","two"]
    // value:[{
    //   _id:"3231",
    //   name:"watch",
    //   price:"$34",
    //   quantity:"3",
    // }]

  },
  reducers: {
    addItem:(state,action)=>{
      let product = action.payload;
      let {name,_id,price,image} = product;
        // state.value = ["one", "two", "three"]
        state.value.push({
          quantity: 1,
          name,
          _id,
          price,
          image,
        }
        )
        
    },
    resetCart:(state,action)=>{
        state.value = []
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItem,resetCart } = cartSlice.actions

export default cartSlice.reducer