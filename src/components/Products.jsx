import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("https://ty-shop.herokuapp.com/api/products");
    console.log(res);
    setProduct(res.data.products);
  };

  return (
    <div>
      {product.map((value) => {
        return <p>{value.productName}</p>;
      })}
    </div>
  );
}

export default Products;
