//4-10- Handling Not Found Errors

import { notFound } from "next/navigation";
import React from "react";

interface PropsType {
  params: { id: number }; 
}

const UserDetailPage = ({ params: { id } }: PropsType) => {

  //1-Here we want to show a different page where we say the given user 
  //does not exist.
  //so let's make up a rule and say if the id is greater than 10, the 
  //user doesn't exist.
  if(id>10) notFound()
  //2-so here we check, if id is greater than 10, here we call the 
  //notFound() function that is defined in next/navigation.But we get 
  //redirected to our general purpose not found page.
  //To create custom not-found page we go the "id folder", and add a new 
  //file called not-found.tsx.===>Go to [id]/not-found.tsx


  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
