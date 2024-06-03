//9-5-Styling Emails
import React from 'react'

//1-we can also use tailwind.First we have to import tailwind from 
//"@react-email/components"
import { Html, Body, Container, Text, Link, Preview, Tailwind } from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {

  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      {/*2-Next, we should wrap this Body component with tailwind.
  */}
      <Tailwind >
        <Body className='bg-gray-300'>
          <Container>
            <Text className='text-3xl font-bold' >
              Hello {name}
            </Text>
            <Link href='https://codewithmosh.com'>www.codewithmeis.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate;

