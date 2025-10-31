import products from "./products.json"

const getProducts = () => {
  return new promise ( (resolve) => {

    setTimeout(()=> {
      resolve(products)
    }, 3000)
   

  })
}

export default getProducts;