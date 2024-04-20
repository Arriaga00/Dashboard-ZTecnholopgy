import { useState , useEffect} from "react"
import CardProduct from "../components/cardPrpduct/CardProduct"



const Products = () => {
  const [infoCard , setInfoCard] = useState([])

  const getData = () => {
    let data = fetch('http://localhost:5000/api/product/consultar-productos')
    data.then(res => res.json())
    .then(res => {
      console.log(res);
      setInfoCard(res);
    })
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
    <section className="container-cards">
    <CardProduct infoCard={infoCard}/>
    </section>
    </>
  )
}

export default Products