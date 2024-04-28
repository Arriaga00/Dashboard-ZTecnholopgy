import { useState, useContext } from "react";
import CardProduct from "../components/cardPrpduct/CardProduct";
import Context from "../context/Context";

const Products = () => {
  const { infoCard } = useContext(Context);
  const [newProduct, steNewProduct] = useState({
    productName: "",
    description: "",
    price: "",
    image: "",
  });

  return (
    <>
      <section className="container-cards">
        <CardProduct
          infoCard={infoCard}
          steNewProduct={steNewProduct}
          newProduct={newProduct}
        />
      </section>
    </>
  );
};

export default Products;
