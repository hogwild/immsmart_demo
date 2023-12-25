import React from "react"

import Link from "next/link"

import { Container, Row, Col, Button, Alert } from "react-bootstrap"

import ProgressBar from "../components/ProgressBar"

import data from "../data/user-booking.json"

import BookingForm from "../components/BookingForm"
import BookingColumn from "../components/BookingColumn"
import Icon from "../components/Icon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      loggedUser: true,
      title: "User booking",
      bookingForm: true,
    },
  }
}

const UserBooking3 = () => {
  return (
    <React.Fragment>
      <ProgressBar progress={75} />
      <section className="py-5">
        <Container>
          <Row>
            <Col lg="7">
              <p className="subtitle text-primary">{data.steps[2].subtitle}</p>
              <h1 className="h2 mb-5">
                {data.steps[2].title}
                {/* <span className="text-muted float-end">Step 3</span> */}
              </h1>
              
              <BookingForm data={data.steps[2].formBlocks} />
              <Row className="form-block flex-column flex-sm-row">
                <Col className="text-center text-sm-start">
                  <Link href="/user-profile" passHref legacyBehavior>
                    <Button variant="link" className="text-muted">
                      <FontAwesomeIcon icon={faChevronLeft} className="me-2" />
                      Back
                    </Button>
                  </Link>
                </Col>
                <Col className="text-center text-sm-end">
                  <Link href="/404" passHref legacyBehavior>
                    <Button className="px-3">
                      完成付款并签约
                      <FontAwesomeIcon icon={faChevronRight} className="ms-2" />
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col lg="5" className="ps-xl-5">
              <BookingColumn from={data.from} to={data.to} />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default UserBooking3
