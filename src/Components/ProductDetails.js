import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const param = useParams();
  console.log(param);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
