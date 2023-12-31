import React from "react"
import Link from "next/link"

import { Container, Row, Col, Button, Form } from "react-bootstrap"
import Image from "../components/CustomImage"
import Icon from "../components/Icon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons"

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
                His room, a proper human room although a little too small, lay
                peacefully between its four familiar walls. A collection of
                textile samples lay spread out on the table.
              </p>
            </div>
            <Form className="form-validate">
              <div className="mb-4">
                <Form.Label htmlFor="loginUsername">Email Address</Form.Label>
                <Form.Control
                  name="loginUsername"
                  id="loginUsername"
                  type="email"
                  placeholder="name@address.com"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-4">
                <Form.Label htmlFor="loginPassword">Password</Form.Label>
                <Form.Control
                  name="loginPassword"
                  id="loginPassword"
                  type="email"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="mb-4">
                <Form.Label htmlFor="loginPassword2">
                  Confirm your password
                </Form.Label>
                <Form.Control
                  name="loginPassword2"
                  id="loginPassword2"
                  type="email"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="d-grid">
                <Link href={"/user-account"} passHref legacyBehavior>
                  <Button size="lg">Sign up</Button>
                </Link>
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
