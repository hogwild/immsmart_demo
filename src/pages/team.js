import React from "react"

import Link from "next/link"

import { Container, Row, Col, Breadcrumb } from "react-bootstrap"

import data from "../data/team.json"

import CardTeam from "../components/CardTeam"
import Image from "../components/CustomImage"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Team",
    },
  }
}

const Team = () => {
  const Team = (data) => {
    return (
      <Row>
        {data.map((item) => (
          <Col key={item.title} sm={12 / data.length} className="mb-3 mb-lg-0">
            <CardTeam data={item} />
          </Col>
        ))}
      </Row>
    )
  }
  return (
    <React.Fragment>
      <section className="hero py-5 py-lg-7">
        <Container className="position-relative">
          <Breadcrumb listProps={{ className: "ps-0 justify-content-center" }}>
            <Link href="/" passHref legacyBehavior>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item active>{data.subtitle}</Breadcrumb.Item>
          </Breadcrumb>

          <h1 className="hero-heading">{data.title && data.title}</h1>
          {data.content && (
            <Row>
              <Col xl="8" className="mx-auto">
                <p className="text-muted">{data.content}</p>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      {data.founders && (
        <section className="pt-6 pb-4">
          <Container>
            <h6 className="subtitle text-center text-primary mb-5">
              {data.founders.title}
            </h6>
            {Team(data.founders.items)}
          </Container>
        </section>
      )}
      {data.quote && (
        <section className="py-5">
          <Container className="bg-gray-100 py-5 px-3 px-lg-5 rounded-3 shadow-sm">
            <Row>
              <Col lg="5">
                <div className="p-5">
                  <Image
                    src={`/content/img/avatar/${data.quote.avatar}`}
                    alt={data.quote.author}
                    width={600}
                    height={600}
                    layout="responsive"
                    className="img-fluid rounded-circle shadow-sm"
                    sizes="(max-width: 576px) 100vw, 530px"
                  />
                </div>
              </Col>
              <Col lg="6" className="d-flex align-items-center">
                <div>
                  <blockquote className="blockquote-icon">
                    <p className="text-lg text-gray-700 mb-4">
                      Samsa was a travelling salesman - and above it there hung
                      a picture that he had recently cut out of an illustrated
                      magazine and housed in a nice, gilded frame.{" "}
                    </p>
                    <h6 className="text-lg text-uppercase text-primary">
                      — {data.quote.author}
                    </h6>
                  </blockquote>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
      {data.sales && (
        <section className="py-6">
          <Container>
            <h6 className="subtitle text-center mb-4">{data.sales.title}</h6>
            {Team(data.sales.items)}
          </Container>
        </section>
      )}
      {data.marketing && (
        <section className="py-6">
          <Container>
            <h6 className="subtitle text-center mb-4">
              {data.marketing.title}
            </h6>
            {Team(data.marketing.items)}
          </Container>
        </section>
      )}
    </React.Fragment>
  );
}

export default Team
