import React, { useState, useEffect } from "react"
import Link from "next/link"

import { Container, Row, Col, Button, Form } from "react-bootstrap"
import Image from "../components/CustomImage"
import Icon from "../components/Icon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons"
import axios from "axios"
import { signIn } from "next-auth/react"

export async function getStaticProps() {
  return {
    props: {
      title: "Sign up",
      hideHeader: true,
      hideFooter: true,
      noPaddingTop: true,
    },
  }
}



const Signup = () => {
  const [userType, setUserType] = useState(null)
  const [email, setEmail] = useState(null)
  const [password1, setPassword1] = useState(null)
  const [password2, setPassword2] = useState(null)
  const [error, setError] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    // console.log("sign up")
    console.log(email, password1, password2)
      try {
      const response = await axios({
          // url: `https://www.immsmart.com/api/user/register/`, // For backend ver2, it is url: `http://127.0.0.1:8000/api/users/register/`,
          url: `https://www.immsmart.net/api/user/register/`, 
          method: "post",
          data: {
                user_type: userType,
                email: email,
                password1: password1,
                password2: password2
              },
          })
      
        // setResponse(response)
        return response
        }catch(error){
        console.log('Error in signning up:', error)
        setError(error)
      } 
      // if(response.status===201){
      //   signIn("credentials", { email:email, password:password, callbackUrl:"/user-account" })
      // }
      // return error
  }

  return (
    <Container fluid className="px-3">
      <Row className="min-vh-100">
        <Col md="8" lg="6" xl="5" className="d-flex align-items-center">
          <div className="w-100 py-5 px-md-5 px-xxl-6 position-relative">
            <div className="mb-4">
              <img
                src="/content/svg/logo-square.svg"
                alt="..."
                style={{ maxWidth: "4rem" }}
                className="img-fluid mb-3"
              />
              <h2>Sign up</h2>
              <p className="text-muted">
                {error ? "Something wrong with your registration; please check your email and password.":"You can sign up with your email or your social accounts."}
              </p>
            </div>
            <Form className="form-validate" onSubmit={(e) => {onSubmit(e).then(
              (res)=>{
                try {
                  if(res.status==201){
                  signIn("credentials", { email:email, password:password1, callbackUrl:"/user-account" })
                }}catch(error){
                  console.log(error)
                }
              })
              }}>
              <div className="mb-4">
                {/* <Form.Label htmlFor="loginUsername"></Form.Label> */}
                <Form.Check
                  inline
                  label="我想找顾问"//"I'm looking for a RCIC"
                  value={"client"}
                  name="group1"
                  type={"radio"}
                  id={`inline-radio-1`}
                  required
                 
                  onChange={(e) => setUserType(e.target.value)}
                />
                <Form.Check
                  inline
                  label="我是持牌顾问"//"I'm a RCIC"
                  value={"consultant"}
                  name="group1"
                  type={"radio"}
                  id={`inline-radio-2`}
                  required
                  onChange={(e) => setUserType(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <Form.Label htmlFor="loginUsername">Email Address</Form.Label>
                <Form.Control
                  name="loginUsername"
                  id="loginUsername"
                  type="email"
                  placeholder="name@address.com"
                  autoComplete="off"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <Form.Label htmlFor="loginPassword">Password</Form.Label>
                <Form.Control
                  name="loginPassword"
                  id="loginPassword"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword1(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <Form.Label htmlFor="loginPassword2">
                  Confirm your password
                </Form.Label>
                <Form.Control
                  name="loginPassword2"
                  id="loginPassword2"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </div>
              <div className="d-grid">
                {/* <Link href={"/user-account"} passHref legacyBehavior> */}
                  <Button size="lg" type={"submit"}>Sign up</Button>
                {/* </Link> */}
              </div>
            </Form>
            <hr data-content="OR" className="my-3 hr-text letter-spacing-2" />
            <div className="d-grid gap-2">
              <Button variant="outline-primary" className="btn-social">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size="2x"
                  className="btn-social-icon"
                />
                Connect{" "}
                <span className="d-none d-sm-inline">with Facebook</span>
              </Button>
              <Button variant="outline-muted" className="btn-social">
                <FontAwesomeIcon
                  icon={faGoogle}
                  size="2x"
                  className="btn-social-icon"
                />
                Connect <span className="d-none d-sm-inline">with Google</span>
              </Button>
            </div>
            <hr className="my-4" />
            <p className="text-sm text-muted">
              By signing up you agree to Directory&apos;s{" "}
              <a href="#">Terms and Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </p>

            <Link href="/" className="close-absolute me-md-5 me-xl-6 pt-5">

              <Icon icon="close-1" className="w-3rem h-3rem" />

            </Link>
          </div>
        </Col>
        <Col md="4" lg="6" xl="7" className="d-none d-md-block">
          <div className="bg-cover h-100 me-n3 position-relative">
            <Image
              src={`/content/img/photo/photo-1497436072909-60f360e1d4b1.jpg`}
              alt=""
              className="bg-image"
              loading="eager"
              layout="fill"
              priority={true}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup
