import React from "react"
// import Link from "next/link"

import { Container, Row, Col, Card, Badge, Dropdown, DropdownButton } from "react-bootstrap"

import axios from "axios"
import data from "../../data/user-profile.json"
// import geoJSON from "../../data/restaurants-geojson.json"

// import CardRoom from "../../components/CardRoom"
// import Reviews from "../../components/Reviews"
// import ReviewForm from "../../components/ReviewForm"
import Icon from "../../components/Icon"
import BlogListing from "../../components/BlogListing"
import Image from "../../components/CustomImage"

export function getAllConsultantIds(consultants) {
    return consultants.map((consultant) => {
      let consultantID = ""
      consultantID = (consultant.first_name+"-"+consultant.last_name+"-"+consultant.user).toLowerCase()

      return ({
      params: {
        consultantID: consultantID,
      },
    })
  })
}

export function getConsultantData(consultants, consultantID) {

  for (var i = 0; i < consultants.length; i++) {
    consultantID
    if (consultants[i].user == consultantID.split("-").slice(-1)) {
      return consultants[i]
    }
  }
}


export async function getStaticPaths() {
  const response = await axios({
    url:`https://www.immsmart.com/api/user/consultant-list/null/null/null/null/`,
    method: "get",
    headers:'application/json'
  })
  const consultants = response.data
  return {
    paths: getAllConsultantIds(consultants.results), //because of the pagination, the blogs are in the .results
    fallback: false,
  }
}


export async function getStaticProps({params}) {
  const response = await axios({
    url:`https://www.immsmart.com/api/user/consultant-list/null/null/null/null/`,
    method: "get",
    headers:'application/json'
  })
  const consultants = response.data
  
  const consultant = getConsultantData(consultants.results, params.consultantID)

  const user = await axios({
    url:`https://www.immsmart.com/api/user/${consultant.user}/`,
    method: "get",
    headers: "application/json"
  })
  const email = user.data.email

  const allBlogs = await axios({
    url:`https://www.immsmart.com/api/blog/user/${consultant.user}/nodraft/`,
    method: "get",
    headers: "application/json"
  })
  const blogs = allBlogs.data.results

  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      // loggedUser: true,
      title: "User Profile",
      consultant:{...consultant, email, blogs}
    },
  }
}

const ConsultantProfile = ({ consultant }) => {
  console.log(consultant)

  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg="3" className="me-lg-auto">
            <Card className="border-0 shadow mb-6 mb-lg-0">
              <Card.Header className="bg-gray-100 py-4 border-0 text-center">
                <a href="#" className="d-inline-block">
                  <div className="avatar avatar-xxl p-2 mb-2">
                    <div className="position-relative h-100 overflow-hidden rounded-circle">
                      <Image
                        // src={`/content/img/avatar/${data.avatar}`}
                        src = {consultant.avatar?consultant.avatar:'/content/img/avatar/avatar-9/jpg'}
                        alt=""
                        width={144}
                        height={144}
                        layout="fixed"
                      />
                    </div>
                  </div>
                </a>
                <h5>
                  {consultant.first_name} {consultant.last_name}
                </h5>
                <p className="text-muted text-sm mb-0">{consultant.city?consultant.city+",":""} {consultant.country}</p>
              </Card.Header>
              <Card.Body className="p-4">
                {/* <div className="d-flex align-items-center mb-3">
                  <div className="icon-rounded icon-rounded-sm bg-primary-light me-2">
                    <Icon
                      icon="diploma-1"
                      className="text-primary svg-icon-md "
                    />
                  </div>
                  <div>
                    <p className="mb-0">{data.reviewsnumber} reviews</p>
                  </div>
                </div> */}
                {/* <div className="d-flex align-items-center mb-3">
                  <div
                    className={`icon-rounded icon-rounded-sm ${
                      data.verified ? "bg-primary-light" : "bg-gray-200"
                    } me-2`}
                  >
                    <Icon
                      icon={data.verified ? "checkmark-1" : "close-1"}
                      className={`${
                        data.verified ? "text-primary" : "text-muted"
                      } svg-icon-md`}
                    />
                  </div>
                  <div>
                    <p className="mb-0">
                      {data.verified ? "Verified" : "Unverified"}
                    </p>
                  </div>
                </div> */}
                {/* <hr /> */}
                {/* <h6>{consultant.first_name} provided</h6> */}
                {/* <h6>Office</h6> */}
                <p><strong>RCICC #:</strong> {consultant.rcic}</p>
                <p><strong>Office:</strong> {consultant.address} {consultant.city} {consultant.country}</p>
                <p><strong>Phone:</strong> {consultant.phone}</p>
                <p><strong>Email:</strong> {consultant.email}</p>
                <h6>Languange Spoken:</h6>
                <p>{consultant.language}</p>

                  {/* <Card.Text className="text-muted" as="ul">
                   
                    <li>Phone: {consultant.phone}</li>
                    <li>Email: {consultant.email}</li>
                    <li>Lauguage: {consultant.language}</li>

                  </Card.Text> */}
                <hr />
                <div className="text-center">
                  <DropdownButton id="dropdown-basic-button" title={`Contact ${consultant.first_name}`} drop="down" size={"sm"}>
                    <Dropdown.Item href="/user-messages-detail">Send a message</Dropdown.Item>
                    <Dropdown.Item href="/user-booking-1">Book a meeting</Dropdown.Item>
                    <Dropdown.Item href="/user-signing">Sign a contract</Dropdown.Item>
                  </DropdownButton>
                </div>
                
              </Card.Body>
            </Card>
          </Col>
          <Col lg="9" className="ps-lg-5">
            <h1 className="hero-heading mb-0">Hello, I&apos;m {consultant.first_name}!</h1>
            <div className="text-block">
              <p>
                <Badge bg="secondary-light" text="secondary">
                  Joined in {data.date}
                </Badge>
              </p>
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
            <div className="text-block">
              <h4 className="mb-5">{consultant.first_name}&apos;s 咨询服务</h4>
              <Row>
                
              </Row>
            </div>
            <div className="text-block">
              {/* <h4 className="mb-5">{consultant.first_name}&apos;s 文章</h4>
              {consultant.blogs.map((blog) => {
                return <h6>{blog.title}</h6>

              })} */}
               
              <BlogListing data={consultant} />
              {/* <ReviewForm /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ConsultantProfile
