//10-6- Lazy Loading
import React from 'react'


//1-Let's imagine this is a "heavy component" "with a lot of markup, 
//with a lot of styles and javascript code".
const HeavyComponent = () => {
  return (
    <div>My Heavy Component</div>
  )
}

export default HeavyComponent

//2-Then we're going to add this to our home page.Go to "page.tsx"