import React from "react";
import { Link } from "react-router-dom";

// Helper Function
import { shorten } from "../../helper/fuctions";

const Product = ({ productData }) => {
  return (
    <div>
      <img src={productData.image} alt="product" style={{ width: "200px" }} />
      <h3>{shorten(productData.title)}</h3>
      <div>
        <Link to={`/product/${productData.id}`}>Details</Link>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
