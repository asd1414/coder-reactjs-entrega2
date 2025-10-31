import getProducts from "../../data/products.js"
import {useState, useEffect} from "react"
import itemList from "../itemsList/itemList"

const ItemListContainer = ({greetings}) => {
  const [products, setProducts] = useState([])

  useEffect (()=>{
    getProducts()
      .then((data)=>{
        setProducts(data)
      })

  },[])

  

  return (
    <div>
      <h2>{greetings}</h2>
      <itemList products={products} />
    </div>
  )
}

export default ItemListContainer
