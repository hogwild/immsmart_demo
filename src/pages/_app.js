import React from "react"
import { SessionProvider } from "next-auth/react"
import Layout from "../components/Layout"
import "swiper/css/bundle"
// swiper core styles
import "swiper/css"

// modules styles
import "swiper/css/pagination"
import "swiper/css/navigation"

import "@fortawesome/fontawesome-svg-core/styles.css"
import "../scss/style.default.scss"


const App = ({ 
  Component, 
  pageProps: { session, ...pageProps }, 

}) => {
  return (
    <SessionProvider session={session} >
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

// This default export is required in a new `pages/_app.js` file.
export default App
