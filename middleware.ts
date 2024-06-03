//8-8-Protecting Routes


//9-now there is a shorter way to write this code, instead of importing
//this middleware function and then exporting it.

// import middleware from "next-auth/middleware";
// export default middleware;

//10-we can export it in one go.
export { default } from "next-auth/middleware";
//With this syntax, we are exporting the "default object" that is
//imported from this module.

export const config = {
//11-   matcher: ["/users/:id*"],
//In a real application, we typically have a path like "dashboard", and 
//after that we can add zero or more parameters to secure all the routes
//that start with /dashboard

//Just remember that whatever you pass here should always start with
// a "/".

  matcher: ["/dashboard/:path*"],
};

//if you see an "internal server error" wrote in the page of your website
//, just restart your "web server" of "your web application".