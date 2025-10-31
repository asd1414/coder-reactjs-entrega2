import React from "react";

const itemList = ({product}) => {
  return (
    <div> 
      {
        products.map( (product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>Precio: {product.precio}</p>
            </div>
        ))
      }</div>
  )
}


export default itemList