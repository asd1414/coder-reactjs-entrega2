import Item from "../Item/Item"

const itemList = ({ product }) => {
  return (
    <div>
      {
        products.map((product) => (
          <Item product={product} key={product.id} />
        ))
      }
    </div>
  )
}


export default itemList