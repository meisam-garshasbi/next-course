// 3-5- DaisyUI

import React from "react";
import AddtoCart from "./AddtoCart";

//So when building our application,next JS uses post CSS to transform our
//class names and generate unique class names that don't clash.
const ProductCard = () => {
  return (
    <div>
      <AddtoCart />
    </div>
  );
};

export default ProductCard;
