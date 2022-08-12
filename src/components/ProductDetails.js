import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

// Context
import { ProductContext } from "../context/ProductContextProvider";

const ProductDetails = () => {

  const params = useParams();
  const id = params.id;
  const data = useContext(ProductContext);
  const product = data[id - 1];
  const { image, title, description, price, category } = product;

  return (
    <div>
      <img src={image} alt="product" style={{ width: "200px" }} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <span>category : </span> {category}
        </p>
        <div>
          <span>{price} $</span>
          <Link to="/product">Back to Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;