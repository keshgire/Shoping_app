import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {remove} from '../store/CartSlice'

function Cart() {
  const dispatch=useDispatch();
  const select=useSelector((state)=>state.CartSlice.cart)
  return (
    <div>{
      select.map((item,index)=>{
        return(
          <div className='card-container' key={index}>
            <h4><img src={item.images} /></h4>
            <h3>{item.title}</h3>
            <h3>{item.price}</h3>
            <button onClick={()=>dispatch(remove({
              id:item.id
            }))}>Remove from cart</button>
          </div>
        )
      })
    }
    </div>
  )
}

export default Cart