import React, {useState, useEffect} from "react"

import Link from "next/link"

import {
  Container,
  Button,
  ListGroup,
  Row,
  Col,
  Badge,
  Breadcrumb,
} from "react-bootstrap"
import Select from "react-select"

import data from "../data/user-blog-list.json"

import Pagination from "../components/Pagination"
import Avatar from "../components/Avatar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTimes, faDownload } from "@fortawesome/free-solid-svg-icons"
import { useSession } from "next-auth/react"
import axios from "axios"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      loggedUser: true,
      title: "Blog - list view",
    },
  }
}

const UserBlogList = () => {
  const {data:session, status} = useSession()
  const [accountInfo, setAccountInfo] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(status==="loading"){
          return "Loading or unauthenticated..."
        }
        const pk = session.user.pk
        const token = session.access_token
        const response = await axios({
          // url: `https://www.immsmart.com/api/user/profile/${pk}/`,
          url: `https://www.immsmart.net/api/user/profile/${pk}/`, 
          method: "get",
          headers: {
                "Authorization": 'Bearer '+ token
            },
        })

        const info = { ...session.user, ...response.data, token:session.access_token }
        setAccountInfo(info)
      }catch(error){
        console.log('Error fetching data:', error)
      }  
    }
    fetchData()
  }, [status])

  if (status==="unauthenticated"){
    // router.push('/')
    return "Unauthenticated..." //This statement is needed because router.push('/') is a callback, will run after the other function is called.
  }

  console.log(accountInfo)
  if(!accountInfo){
    return <>Loading</>
  }
  const add_post = async () => {
    try {
      const response = await axios({
        // url: `https://www.immsmart.com/api/blog/add/`, 
        url: `https://www.immsmart.net/api/blog/add/`, 
        method: "get",
        headers: {
              "Authorization": 'Bearer '+ accountInfo.token
          },
        // data: {
        //   "author":accountInfo.pk,
        //   "title":"Draft",
        //   "slug":`new-draft-user-${accountInfo.pk}`,
        //   "category":"draft"
        // }
      })
    }catch(error) {
      console.log(error)
    }
  }



  return (
    <section className="py-5">
      <Container>
        <Breadcrumb listProps={{ className: "ps-0 justify-content-center" }}>
          <Link href="/" passHref legacyBehavior>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Link>
          <Breadcrumb.Item active>Host view</Breadcrumb.Item>
        </Breadcrumb>

        <div className="d-flex justify-content-between align-items-end mb-5">
          <h1 className="hero-heading mb-0">{data.title}</h1>
          {/* <Button href={data.button.link} variant="link" className="text-muted">
            {data.button.title}
          </Button> */}
          <Button href={data.button.link} variant="link" className="text-muted" onClick={add_post}>
            {data.button.title}
          </Button>
        </div>
        <div className="d-flex justify-content-between align-items-center flex-column flex-lg-row mb-5">
          <div className="me-3">
            <p className="mb-3 mb-lg-0">
              You have <strong>12 posts</strong> 
            </p>
          </div>
          <div className="text-center">
            <label className="form-label me-2">Sort by</label>
            <Select
              id="reactselect"
              instanceId="reactselect"
              options={data.sortby}
              defaultValue={data.sortby[0]}
              className="dropdown bootstrap-select me-3 mb-3 mb-lg-0"
              classNamePrefix="selectpicker"
            />
            <Button href={data.download.link} variant="outline-secondary">
              <FontAwesomeIcon icon={faDownload} className="me-2" />
              {data.download.title}
            </Button>
          </div>
        </div>
        <ListGroup className="shadow mb-5">
          {data.bookings.map((booking, index) => (
            <Link href={booking.link} passHref key={index} legacyBehavior>
              <ListGroup.Item action className="p4" as="a">
                <Row>
                  <Col lg="4" className="align-self-center mb-4 mb-lg-0">
                    <div className="d-flex align-items-center mb-3">
                      <h2 className="h5 mb-0">{booking.title}</h2>
                      <Avatar
                        image={`/content/img/avatar/${booking.avatar}`}
                        size="sm"
                        className="ms-3  avatar-border-white"
                        cover
                        alt=""
                      />
                    </div>
                    <p className="text-sm text-muted">{booking.type}</p>
                    <Badge
                      bg={
                        booking.badgecolor
                          ? booking.badgecolor + "-light"
                          : "secondary-light"
                      }
                      text={
                        booking.badgecolor ? booking.badgecolor : "secondary"
                      }
                      className="p-2"
                      pill
                    >
                      {booking.date}
                    </Badge>
                  </Col>
                  <Col lg="8">
                    <Row>
                      <Col xs="6" md="4" lg="3" className="py-3 mb-3 mb-lg-0">
                        <h6 className="label-heading">Rate type</h6>
                        <p className="text-sm fw-bold">{booking.rate}</p>
                        <h6 className="label-heading">Nights</h6>
                        <p className="text-sm fw-bold mb-0">{booking.nights}</p>
                      </Col>
                      <Col xs="6" md="4" lg="3" className="py-3 mb-3 mb-lg-0">
                        <h6 className="label-heading">Occupancy</h6>
                        <p className="text-sm fw-bold">{booking.occupancy}</p>
                        <h6 className="label-heading">Charge</h6>
                        <p className="text-sm fw-bold mb-0">{booking.charge}</p>
                      </Col>
                      <Col xs="6" md="4" lg="3" className="py-3 mb-3 mb-lg-0">
                        <h6 className="label-heading">Booked Date</h6>
                        <p className="text-sm fw-bold">{booking.booked}</p>
                        <h6 className="label-heading">Arrival Time</h6>
                        <p className="text-sm fw-bold mb-0">
                          {booking.arrival}
                        </p>
                      </Col>
                      <Col xs="12" lg="3" className="align-self-center">
                        <span
                          className={`${
                            booking.paid ? "text-primary" : "text-muted"
                          } text-sm text-uppercase me-4 me-lg-0`}
                        >
                          <FontAwesomeIcon
                            icon={booking.paid ? faCheck : faTimes}
                            className="me-2"
                          />
                          Booking paid
                        </span>
                        <br className="d-none d-lg-block" />
                        <span
                          className={`${
                            booking.confirmed ? "text-primary" : "text-muted"
                          } text-sm text-uppercase`}
                        >
                          <FontAwesomeIcon
                            icon={booking.confirmed ? faCheck : faTimes}
                            className="me-2"
                          />
                          Confirmed
                        </span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </ListGroup.Item>
            </Link>
          ))}
        </ListGroup>
        <Pagination />
      </Container>
    </section>
  );
}

export default UserBlogList
