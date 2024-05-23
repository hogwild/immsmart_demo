import React, { useEffect } from "react"

import { Container, Row, Col, Form, Collapse, Button, Pagination } from "react-bootstrap"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

import Select from "react-select"
import Nouislider from "nouislider-react"

// import CardRestaurant from "../components/CardRestaurant"
// import CardConsultant from "../components/CardConsultant"
import ResultsTopBar from "../components/ResultsTopBar"
// import Pagination from "../components/Pagination"

import data from "../data/category3.json"
import geoJSON from "../data/restaurants-geojson.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import CardConsultant from "../components/CardConsultant"

export async function getStaticProps() {
    const response = await axios({
        // url:`https://www.immsmart.com/api/user/consultant-list/null/null/null/null/`,
        url:`https://www.immsmart.net/api/user/consultant-list/null/null/null/null/`,
        method: "get",
        headers:'application/json'
    })
    const consultants = response.data

  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Consultants",
      allConsultants: consultants
    },
  }
}

const ConsultantList = ({allConsultants}) => {
  const [name, setName] = React.useState(null)
  const [country, setCountry] = React.useState(null)
  const [language, setLanguage] = React.useState(null)
  const [service, setService] = React.useState(null)

  const [consultants, setConsultants] = React.useState(allConsultants)


  const get_name_rcic = (e) => {
    // console.log(e.target.value)
    setName(e.target.valule)
  }

  const get_country = (e) => {
    if(e){
        let countries = ""
        for(let item of e){
            // console.log(item)
            countries += (item.label+"-")
        }
        setCountry(countries.slice(0, -1))
        // console.log(languages.slice(0, -1))
    }
  }

  const get_language = (e) => {
    if(e){
        let languages = ""
        for(let item of e){
            // console.log(item)
            languages += (item.label+"-")
        }
        setLanguage(languages.slice(0, -1))
        // console.log(languages.slice(0, -1))
    }
  }

  const get_service = (e) => {
    if(e){
        let services = ""
        for(let item of e){
            // console.log(item)
            services += (item.label+"-")
        }
        setService(services.slice(0, -1))
        // console.log(languages.slice(0, -1))
    }
  }
  const find_consultant = () => {
    console.log("search!")
    const fetchData = async () => {
        try {
          const response = await axios({
            // url: `https://www.immsmart.com/api/user/consultant-list/${name}/${country}/${language}/${service}/`, 
            url: `https://www.immsmart.net/api/user/consultant-list/${name}/${country}/${language}/${service}/`, 
            method: "get",
            headers: {
                  "Content-Type": "application/json",
              },
          })
          return response.data
        }catch(error){
          console.log('Error fetching data:', error)
        }  
      }
    fetchData().then(data => setConsultants(data))
  }
  console.log("consultant list:", consultants)

  const nextPageClick = () => {
    setPage(consultants.next)
  }
  const previousPageClick = () => {
    setPage(consultants.previous)
  }


  return (
    <React.Fragment>
      <Container fluid className="py-5 px-lg-5">
        <Row className="border-bottom mb-4">
          <Col xs="12">
            <h1 className="display-4 fw-bold text-serif mb-4">{data.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col lg="3" className="pt-3">
            <Form className="pe-xl-3" >
              <div className="mb-4">
                <Form.Label htmlFor="form_name_ricc" className="form-label">
                  Part of name
                </Form.Label>
                <div className="input-label-absolute input-label-absolute-right">
                  {/* <div className="label-absolute">
                    <FontAwesomeIcon icon={faSearch} />
                  </div> */}
                  <Form.Control
                    type="search"
                    name="name_ricc"
                    placeholder="Name or RICC Number"
                    id="form_name_ricc"
                    className="pe-4"
                    onChange={(e)=>{get_name_rcic(e)}}
                  />
                </div>
              </div>
              <div className="mb-4">
                <Form.Label htmlFor="form_country" className="form-label">
                  Country
                </Form.Label>
                <Select
                  name="country"
                  inputId="form_country"
                  options={data.neighbourhood && data.neighbourhood}
                  isMulti
                  isSearchable
                  className="form-control dropdown bootstrap-select"
                  classNamePrefix="selectpicker"
                  onChange={(e)=>{get_country(e)}}
                />
              </div>
              <div className="mb-4">
                <Form.Label htmlFor="form_language" className="form-label">
                  Language Spoken
                </Form.Label>
                <Select
                  name="language"
                  inputId="form_language"
                  options={data.neighbourhood && data.neighbourhood}
                  isMulti
                  isSearchable
                  className="form-control dropdown bootstrap-select"
                  classNamePrefix="selectpicker"
                  onChange={(e)=>{get_language(e)}}
                  
                />
              </div>
              <div className="mb-4">
                <Form.Label htmlFor="form_service" className="form-label">
                  Service
                </Form.Label>
                <Select
                  name="service"
                  inputId="form_service"
                  options={data.categories && data.categories}
                  isMulti
                  className="form-control dropdown bootstrap-select"
                  classNamePrefix="selectpicker"
                  onChange={(e)=>{get_service(e)}}
                />
              </div>
              
              <div className="mb-4">
                <Button type="button" onClick={find_consultant}>
                  <FontAwesomeIcon icon={faSearch} className="me-1" />
                  Find Consultants
                </Button>
              </div>
            </Form>
          </Col>
          <Col lg="9">
            <ResultsTopBar nums={consultants.results.length} sortBy={data.sortby} />
            {console.log("consultant:", consultants)}
            {consultants && (
              <Row>
                {consultants.results.map((consultant, index) => (
                  <Col key={index} sm="6" lg="4" className="mb-5 hover-animate">
                    <CardConsultant
                      data={consultant}
                      sizes="(max-width:576px) 100vw, (max-width:991px) 50vw, calc(25vw - 60px)"
                    />
                  </Col>
                ))}
              </Row>
            )}
            {/* <Pagination /> */}
            <Pagination
              aria-label="Page navigation example"
              className="d-flex justify-content-between mb-5"
            >
              <Pagination.Item href="#" className={consultants.previous?"text-sm":"disabled text-sm"} onClick={previousPageClick}>
                <FontAwesomeIcon icon={faAngleLeft} className="me-1" />
                Previous Page
              </Pagination.Item>
              <Pagination.Item className={consultants.next?"text-sm":"disabled text-sm"} onClick={nextPageClick}>
                Next Page
                <FontAwesomeIcon icon={faAngleRight} className="ms-1" />
              </Pagination.Item>
          </Pagination>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default ConsultantList
