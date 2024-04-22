import { useState , useEffect} from "react"
import CardProduct from "../components/cardPrpduct/CardProduct"



const Products = () => {
  const [infoCard , setInfoCard] = useState([])
  const [newProduct,steNewProduct] = useState({
    productName : "",
    description : "",
    price : "",
    image : ""
  })

  const getData = () => {
    fetch('http://localhost:5000/api/product/consultar-productos')
    .then(res => res.json())
    .then(res => {
      setInfoCard(res);
    })
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
    <section className="container-cards">
    <CardProduct infoCard={infoCard} steNewProduct={steNewProduct} newProduct={newProduct}/>
    </section>
    </>
  )
}

export default Products