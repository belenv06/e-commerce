import React from 'react'

const Product = ({producto}) => {
  return (
    <div className="card card-size">
      <div  className="p-3 card-details" key={producto.id}> 
        <h4> {producto.name} </h4>
        <p> {producto.description} </p>
        <p> S/. {producto.price} </p>
      </div>
      <img className='img-size' src={producto.photo} alt='foto'/>
    </div>
  )
}

export default Product