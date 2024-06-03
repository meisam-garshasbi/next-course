//10-6- Lazy Loading

"use client"


import { Metadata } from "next";
import Image from "next/image";



//import _ from "lodash";//with this way of importing lodash, once again
//we are including this entire library in our page bundle, so the browser
//has to download it to render this page.If we don't need this library
//ahead of time, and our page is starting to get heavy, then we can 
//lazy load it.



export default function Home() {




  return (
    <main className="relative h-screen ">

      <h1>Hello world</h1>


      <button onClick={async() => {

        //1-now to lazy load lodash,we call "the import function" here,
        //so we're calling lodash in the click handler, this is where we
        //need this library .
        const _ = (await import("lodash")).default
        //2-The output is a promise that if we await it we get an 
        //"javascript module" and if we wrap this in parenthesis, we can 
        //access the properties of that module, and here we pick the 
        //"default property".So we're picking "the default object" that 
        //is exported from the "lodash module".

        //3-Then we store the result in a constant called "underscore".
        //With this implementation, lodash is not included in our page 
        //bundle ahead of time, it's loaded after we click the show button.


        const users = [
          { name: "c" },
          { name: "b" },
          { name: "a" }
        ]


        const sorted = _.orderBy(users, ["name"])
        console.log(sorted)

      }}>Show</button>






      {/* <Image
        src="https://bit.ly/react-cover"
        alt="Elisha"
        fill
        className="object-cover"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        quality={100}
        priority
      /> */}

    </main>
  )
}


// export async function generateMetadata(): Promise<Metadata> {

//   const product = await fetch("");
//   return {
//     title: "product.title",
//     description: "product.description"
//   }

// }






