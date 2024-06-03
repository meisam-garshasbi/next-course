//4-9-Showing Loading UIs
import React from "react";

//3-or The second way to showing loading file is that in Next.js, we have 
//another special file that we can put in our "app folder", that is a 
//"loading file".So "right next" to our "root layout" I'm going to add a 
//"loading file" that is going to be inside the "app folder".
const Loading = () => {
  return <div className="loading loading-spinner loading-md">Loading...</div>;
};

export default Loading;
