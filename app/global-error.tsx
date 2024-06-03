//4-11-Handling Unexpected Errors

//2-The second thing you need to know about this "error file" is that in 
//this file or in this component, we cannot capture errors that happen 
//in our "route layout".Now currently our "route layout" is very simple, 
//we don't have anything here, just an "html body" and an "app bar", but in 
//more complex applications, if you have some logic here that could 
//potentially cause an error, you need to create a "separate error" file 
//for capturing errors in this layout.That error file is called 
//"global-error.tsx".