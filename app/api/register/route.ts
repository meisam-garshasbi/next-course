//8-11-Registering Users

import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

//1-In this route file, we export a function for "handling post requests".

import { z } from "zod";
import bcrypt from "bcrypt";

//3-Next we create a schema by calling z.object.
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  //4-Now here we can add more rules like "at least one uppercase", "at
  //least one number", "a special character" and so on.
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  //2-Now that we have "the body", we have to make sure that in the body
  //we have "a valid email and password".And for that we're going to use
  //"zod".

  //We get a "validation object".
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  //5-We have to make sure that we don't have a user with this email in
  //our database, and for that we have to use our "prisma client",

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (user)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });

  //6-Otherwise,we should create this user.Now to do that, first we have 
  //to hash(turns your password [or any other piece of data] into a short
  //string of letters and/or numbers using an encryption algorithm) their
  //password.So we have to import "bcrypt" from bcrypt.

  //7-Hash method gets two arguments.For the first argument it gets the 
  //data which you want to encrypt here we pass the "user password" and 
  //the second argument, we can pass a "salt", or "the number of rounds".
  //The higher the number, the slower the encryption,but the more secure.
  const hashedPassword = await bcrypt.hash(body.password, 10);

  const newUser = await prisma.user.create({
    data: {
      //8-In a real application, we can have other fields on our register
      //form like name, age, and so on.
      email: body.email,
      hashedPassword,
    },
  });
  //And finally we return a "basic response to the client".

  return NextResponse.json({ email: newUser.email });

  //9-so let's test this API in postman.Then the final step Let's log
  //in with a valid email and password in our sign in page in our app.
  //We successfully log in but we get this error because we are trying to
  //access a page that doesn't exist.

  //10-Now to solve that we also have to build a registration form, but
  //that is just basic react,
}
