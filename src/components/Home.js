import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { add } from '../store/CartSlice'
import { useDispatch } from 'react-redux'

function Home() {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products').then((res) => {
      setProducts(res.data)
    })
  }, [])
  console.log(products)
  return (
    <div>
      {
        products.map((item, index) => {
          return (
            <div className='card-container' key={index}>
              <h4><img src={item.images[0]} /></h4>
              <h3>{item.title}</h3>
              <h4>${item.price}</h4>
              <button onClick={() => dispatch(add({
                id: item.id, images: item.images, title: item.title, price: item.price
              }))}>Add to cart</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home