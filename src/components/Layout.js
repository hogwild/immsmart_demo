import React, {useState, useEffect} from "react"
import Head from "next/head"
import NextNProgress from "../components/NextNProgress"

import Header from "./Header"
import Footer from "./Footer"
import { FormProvider } from "../components/FormContext"
import { BookingProvider } from "../components/BookingContext"
import SvgIcons from "./SvgIcons"
// import SSRProvider from "react-bootstrap/SSRProvider"

import { useSession } from "next-auth/react"
import axios from "axios"
// import { signIn } from "next-auth/react"


const Layout = (pageProps) => {
  const {data:session, status} = useSession()
  const [accountInfo, setAccountInfo] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        if(status==="loading"){
          return "Loading or not authenticated..."
        }
        const pk = session.user.pk
        const token = session.access_token
        const response = await axios({
          url: `https://www.immsmart.com/api/user/profile/${pk}/`, //it was http://127.0.0.1:8000/api/users/${pk}/ in backend_ver2
          method: "get",
          headers: {
                "Authorization": 'Bearer '+ token
            },
        })
        const info = { email:session.user.email, avatar:response.data.avatar }
        setAccountInfo(info)
        // setAccountInfo(response.data)
      }catch(error){
        console.log('Error fetching data:', error)
      }  
    }
    fetchData()
  },[status])
  // if(!accountInfo){
  //   return <></>
  // } 
  // console.log("data all", accountInfo)
    console.log(status)
    const headerProps = {
      nav: {
        classes: pageProps.nav && pageProps.nav.classes,
        fixed: pageProps.nav && pageProps.nav.fixed,
        color: pageProps.nav && pageProps.nav.color,
        light: pageProps.nav && pageProps.nav.light,
        dark: pageProps.nav && pageProps.nav.dark,
      },
      loggedUser: status==="authenticated"?accountInfo:false,
      // resolvedUrl: pageProps.resolvedUrl,
      headerClasses: pageProps.headerClasses,
    }
    console.log(headerProps);
  return (
    // <SSRProvider>
      <div
        style={{ paddingTop: pageProps.noPaddingTop ? "0" : "72px" }}
        className={pageProps.className}
      >
        <Head>
          <title>{`${pageProps.title} - Directory React Theme`}</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <NextNProgress color="#4E66F8" options={{ showSpinner: false }} />
        {!pageProps.hideHeader && <Header {...headerProps} />}
        {pageProps.listingForm || pageProps.bookingForm ? (
          <React.Fragment>
            {pageProps.listingForm && (
              <FormProvider>
                <main>{pageProps.children}</main>
              </FormProvider>
            )}
            {pageProps.bookingForm && (
              <BookingProvider>
                <main>{pageProps.children}</main>
              </BookingProvider>
            )}
          </React.Fragment>
        ) : (
          <main>{pageProps.children}</main>
        )}

        {!pageProps.hideFooter && <Footer />}
        <SvgIcons />
      </div>
    // </SSRProvider>
  )
}

export default Layout
