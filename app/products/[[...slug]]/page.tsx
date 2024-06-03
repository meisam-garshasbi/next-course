//4-5 Accessing Query String Parameters
import React from "react";


//to access "query string parameters" We use a different property called 
//"searchParams" We set this to an object.In this object we can have one 
//or more properties. Currently we have a single query string parameter.

interface ProductPagePropsType {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductPage = ({ params: { slug },searchParams:{sortOrder} }: ProductPagePropsType) => {
  return <div>ProductPage {slug} {sortOrder}</div>;
};

export default ProductPage;
