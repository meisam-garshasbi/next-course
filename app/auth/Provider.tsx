//8-5-Accessing Sessions on the Client

//When we go back in the browser we get this error saying "react 
//context" is unavailable in "server components" You might think We can 
//go back and make this component a client component But this is not 
//possible because we get a different error saying you're attempting 
//to export "Metadata" from a component marked with "use client".

//To solve this issue, we have to wrap that "session provider" inside a
//separate client component.

"use client";

import React, { ReactNode } from "react";

import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
