// 3-5- DaisyUI

//Here we move our button to the client-side.
"use client";
import React from "react";

const AddtoCart = () => {
  return (
    <div>
      <button className="btn btn-primary"
        onClick={() => console.log("click")}>Add to Cart</button>
    </div>
  );
};

export default AddtoCart;
