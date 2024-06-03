//jwt is short for "JSON web token".
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


export async function GET (request:NextRequest){
    const token = await getToken({req:request});
    return NextResponse.json(token)
}
//Now back to the browser, let's go to api/auth/token.There is our 
//'JSON web token'.
//In this JSON object we have a few properties.these are all the pieces 
//of information we receive from Google.
//For example "exp property" that is the expiration of token, by default 
//our tokens are valid for 30 days.
//So this "JSON object" is called a "JSON web token" and it's like an 
//identification card that the client sends to the server with each 
//request.

//So to recap, when the user "logs in", NextAuth creates an "authentication 
//session" for "that user".By default, it represents that session using a 
//"JSON web token".