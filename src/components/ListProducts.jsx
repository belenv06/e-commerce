import React from 'react'
import Product from './Product'

const ListProducts = ({productos}) => {
  return (
    <div className='m-5'>

      <div className='d-flex justify-content-between'>{productos.map((producto) => <Product producto={producto}/> )} </div>
    </div>
  )
}

export default ListProducts