//11-2-Preparing for Production

import NextAuth from "next-auth";
import { authOptions } from "../authOptions";



//1-In a route file We can only export functions like GET,POST PUT,and 
//so on.

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
