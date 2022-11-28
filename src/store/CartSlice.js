import { createSlice } from "@reduxjs/toolkit";

const CartSlice= createSlice({
    name: "CartSlice",
    initialState:{
        cart:[],
        
    },
    reducers:{
        add:(state,action)=>{
            state.cart.push(action.payload);
          

        },

        remove:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id!==action.payload.id);
          
        }
    }
})

export default CartSlice.reducer;
export const{add,remove}=CartSlice.actions;