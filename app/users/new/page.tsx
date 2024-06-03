//4-8- Programmatic Navigation

//1-Now, if this is part of a form, here we need to handle the click
//event of the button or the submit event of a form.And to do that, we
//have to convert this to a client component.
"use client";

//4-when importing this hook, make sure to import it from 
//"next/navigation".
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  //3-and to do that we're going to use "the router object".So we have a
  //hook for getting access to our router, that is "useRouter()".
  const router = useRouter();

  return (
    <button
      className="btn btn-primary"
      onClick={
        () => router.push("/users")
        //2-This is where we need programmatic navigation.
      }
    >
      Create
    </button>
  );
};

export default NewUserPage;
