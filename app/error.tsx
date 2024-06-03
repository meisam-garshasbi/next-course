"use client";
//4-11-Handling Unexpected Errors

//1-in this file, we should create and export a react component that will
//be rendered if any of our pages encounters an unexpected error.

//2-So currently we have an error file in the app folder, and this can
//catch any error in any pages in our application.But we can also create
//custom error pages for specific parts of our application.

import React from "react";

//3-now in this component,we should be able to access the error that
//was occurred.To do that, first, we define the props for this component
//, we give it a property called "error" of type "Error".Next js will
//automatically pass the error object to this component.

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}
//5-Now, sometimes "our errors" are "temporary", so in "certain parts" of
//our application, we may want to give the user "the chance to retry".
//To do that, here in the "ErrorPageProps" interface, we add a second
//property called "reset", which has to be a function, that returns void.
//Next .js will automatically pass the "reset function" to our component.
//So we can use it in a button to give the user "the chance to retry".

//6-We should only use this technique in "certain parts" of our 
//application because otherwise users can keep retrying and you'll end up
//with numerous repetitive errors in your "error log".

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  //4-now in a real application, we should log this error using a login
  //service.we should log it somewhere permanent so we can go and identify
  //the issues in our application.
  //There are many different login services out there.but the one that I
  //personally have used and like is "Sentry"
  console.log("Error", error);

  return (
    <>
      <div>An unexpected error has occurred.</div>
      {/* 7-So this event is the reason why we had to make this component
       a client component. */}
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
