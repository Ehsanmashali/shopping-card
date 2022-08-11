import React from "react";

// Helper Function

import { shorten } from "../helper/fuctions";

const Product = ({ productData }) => {
  return (
    <div>
      <img src={productData.image} alt="product" style={{ width: "200px" }} />
      <h3>{shorten(productData.title)}</h3>
      <div>
        <a href="/#">Details</a>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;

