//11-2-Preparing for Production


import Script from 'next/script'
import React from 'react'


const GoogleAnalyticsScript = () => {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-E720JHXSJ2" />


            <Script id="google-analytics">
                {/* 1-When we use "inline script", we have to give this 
                component a unique ID.*/}
                {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-E720JHXSJ1');`}
            </Script>

        </>
    )
}

export default GoogleAnalyticsScript;