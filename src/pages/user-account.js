import React, { useState, useEffect} from "react"
import Link from "next/link"
// import axios from "axios";

import { Container, Row, Col, Card, Breadcrumb } from "react-bootstrap"

import data from "../data/user-account.json"
import Icon from "../components/Icon"
import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
import { useRouter } from "next/router";
// import { authOptions } from "./api/auth/[...nextauth]";
// import { getServerSession } from "next-auth";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "User Account",
    },
  }
}


const UserAccount = () => {
  const {data:session, status} = useSession()
  // const [profile, setProfile] = useState(null)
  const router = useRouter()
  if (status==="unauthenticated"){
    router.push('/')
    return "Unauthenticated..." //This statement is needed because router.push('/') is a callback, will run after the other function is called.
  }
  if(status==="loading"){
    return "Loading or unauthenticated..."
  }
  
  const user_basic_info = { ...session.user, ...session.profile }
  
  console.log(user_basic_info)
    return (
      <section className="py-5">
        <Container>
          <Breadcrumb listProps={{ className: "ps-0 justify-content-start" }}>
            <Link href="/" passHref legacyBehavior>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item active>Your account</Breadcrumb.Item>
          </Breadcrumb>

          {/* <h1 className="hero-heading mb-0">{data.title}</h1> */}
          <h1 className="hero-heading mb-0">{user_basic_info.email}</h1>
          <p className="text-muted mb-5">{data.subtitle}</p>
          <Row>
            {data.cards.map((card) => (
              <Col xs="6" md="4" className="mb-30px" key={card.title}>
                <Card className="h-100 border-0 shadow hover-animate">
                  <Card.Body>
                    <div className="icon-rounded bg-secondary-light mb-3">
                      <Icon
                        icon={card.icon}
                        className="text-secondary w-2rem h-2rem"
                      />
                    </div>
                    <Card.Title className="mb-3" as="h5">
                      <Link
                        href={card.link}
                        className="text-decoration-none text-dark stretched-link">

                        {card.title}

                      </Link>
                    </Card.Title>
                    <Card.Text className="text-muted text-sm">
                      {card.content}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    );
}

export default UserAccount



  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if(status==="loading"){
  //         return "Loading or unauthenticated..."
  //       }
  //       const pk = session.user.pk
  //       const token = session.access_token
  //       const response = await axios({
  //         url: `http://127.0.0.1:8000/api/user/${pk}/`, //it was `http://127.0.0.1:8000/api/users/${pk}/` in backend_ver2
  //         method: "get",
  //         headers: {
  //               "Authorization": 'Bearer '+ token
  //           },
  //       })
  //       setProfile(response.data)
  //     }catch(error){
  //       console.log('Error fetching data:', error)
  //     }  
  //   }
  //   fetchData()
  // }, [status])
  

  // export async function getServerSideProps(context) {
//   const session = await getServerSession(context.req, context.res, authOptions);
//   // console.log("session", session);
//   if (!session) {
//     return {
//       redirect: {
//         destination:'/',
//         permanent: false,
//       }
//     //   props: {
//     //     nav: {
//     //       light: true,
//     //       classes: "shadow",
//     //       color: "white",
//     //     },
//     //   title: "User Account",
//     // },
//     }
//   }
//   const pk = session.user.pk
//   const token = session.access_token
//   const response = await axios({
//     url: `http://127.0.0.1:8000/api/users/${pk}/`,
//     method: "get",
//     headers: {
//           "Authorization": 'Bearer '+ token
//       },
//   });

//   const profile = response.data
   
  // let loggedUser = {
  //   profile: response.data,
  //   access_token: token,
  // }
  
//   return {
//     props: {
//       nav: {
//         light: true,
//         classes: "shadow",
//         color: "white",
//       },
//       title: "User Account",
//       // loggedUser: profile,
//     }
//   }
// }