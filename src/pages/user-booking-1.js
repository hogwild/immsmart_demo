import React from "react"

import Link from "next/link"

import { Container, Row, Col, Button, Alert } from "react-bootstrap"

import ProgressBar from "../components/ProgressBar"

import data from "../data/user-booking.json"

import BookingForm from "../components/BookingForm"
import BookingColumn from "../components/BookingColumn"
import Icon from "../components/Icon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

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

const UserBooking1 = () => {
  return (
    <React.Fragment>
      <ProgressBar progress={25} />
      <section className="py-5">
        <Container>
          {/* <Row>
            <Col lg="12" className="text-center text-sm-start">
            <h1 className="h2 mb-5">
            您即将预约{data.consultant.name}
            </h1>
            </Col>
          </Row> */}
          <Row>
            <Col lg="12">
              <p className="subtitle text-primary">{data.consultant.name}</p>
              <h1 className="h2 mb-5">
                {data.title}
                {/* <span className="text-muted float-end">Step 1</span> */}
              </h1>
              {data.numberedBlocks && (
                    <Row>
                      {data.numberedBlocks.map((block, index) => (
                        <Col lg="4" key={index} className="position-relative px-5">
                          <p className="advantage-number">{index + 1}</p>
                          <div className="ps-lg-5">
                            <h6 className="text-uppercase">{block.title}</h6>
                            <p className="text-muted text-sm mb-5 mb-lg-0">
                              {block.content}
                            </p>
                          </div>
                        </Col>
                      ))}
                    </Row>
              )}
              <Row className="form-block flex-column flex-sm-row">
                {/* <Col lg="7" className="ps-xl-5">
                  <BookingColumn from={data.from} to={data.to} />
                </Col> */}
                
                <Col lg="12" className="text-end text-sm-top">
                  <Link href="https://calendly.com/guxianbinmail/30min" passHref legacyBehavior>
                    <Button className="px-3">
                      预约Jack咨询时间
                      <FontAwesomeIcon icon={faChevronRight} className="ms-2" />
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
            
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default UserBooking1
