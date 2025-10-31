
const Item=({product}) => {
  return (
    <div>
      <p>{product.name}</p>
      <p>Precio: {product.precio}</p>
    </div>
  )
}

export default Item