import React from "react"
import Link from "next/link"
import * as Scroll from "react-scroll"

import { Container, Row, Col, Breadcrumb, Nav } from "react-bootstrap"

import DocsNav from "../../components/Docs/DocsNav"

import Alerts from "../../components/Docs/Bootstrap/Alerts"
import Badges from "../../components/Docs/Bootstrap/Badges"
import Breadcrumbs from "../../components/Docs/Bootstrap/Breadcrumbs"
import Buttons from "../../components/Docs/Bootstrap/Buttons"
import Card from "../../components/Docs/Bootstrap/Card"
import Dropdowns from "../../components/Docs/Bootstrap/Dropdowns"
import Forms from "../../components/Docs/Bootstrap/Forms"
import ListGroup from "../../components/Docs/Bootstrap/ListGroup"
import Modal from "../../components/Docs/Bootstrap/Modal"
import Navbar from "../../components/Docs/Bootstrap/Navbar"
import Navs from "../../components/Docs/Bootstrap/Navs"
import Pagination from "../../components/Docs/Bootstrap/Pagination"
import Progress from "../../components/Docs/Bootstrap/Progress"
import Tooltips from "../../components/Docs/Bootstrap/Tooltips"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Bootstrap Components",
    },
  }
}

const ComponentsBootstrap = () => {
  const ScrollLink = Scroll.Link

  const scrollLinkProps = {
    offset: -100,
    spy: true,
    smooth: true,
    activeClass: "active",
    className: "nav-link",
    href: "#",
  }
  return (
    <React.Fragment>
      <section className="hero py-5 py-lg-7">
        <Container className="position-relative">
          <Breadcrumb listProps={{ className: "ps-0 justify-content-center" }}>
            <Link href="/" passHref legacyBehavior>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Link>
            <Link href="/docs/docs-introduction" passHref legacyBehavior>
              <Breadcrumb.Item>Documentation</Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item active>Bootstrap Components</Breadcrumb.Item>
          </Breadcrumb>

          <h1 className="hero-heading">Bootstrap Components</h1>
          <Row>
            <Col xl="8" className="col-xl-8 mx-auto">
              <p className="lead text-muted">
                The theme uses React Bootstrap plugin which extends the
                Bootstrap framework and makes using Bootstrap in React easy.
                Check out docs lower on the page or visit plugin documentation{" "}
                <a href="https://react-bootstrap.github.io/">here</a>.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-6">
        <Container fluid>
          <Row className="px-xl-5">
            <Col lg="2">
              <DocsNav />
            </Col>
            <Col lg="10" xl="8" className="docs-content position-relative">
              <Alerts />
              <Badges />
              <Breadcrumbs />
              <Buttons />
              <Card />
              <Dropdowns />
              <Forms />
              <ListGroup />
              <Modal />
              <Navbar />
              <Navs />
              <Pagination />
              <Progress />
              <Tooltips />
            </Col>
            <Col lg="2">
              <Nav
                variant="pills"
                style={{ top: "120px" }}
                className="flex-column sticky-top ms-1 p-3 mb-5 border-start"
              >
                <h6 className="sidebar-heading ms-3">Main components</h6>
                {sidebarMenu.map((item) => (
                  <ScrollLink
                    key={item.label}
                    to={item.to}
                    {...scrollLinkProps}
                  >
                    {item.label}
                  </ScrollLink>
                ))}
              </Nav>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default ComponentsBootstrap

const sidebarMenu = [
  {
    label: "Alert",
    to: "alerts",
  },
  {
    label: "Badges",
    to: "badges",
  },
  {
    label: "Breadcrumb",
    to: "breadcrumb",
  },
  {
    label: "Buttons",
    to: "buttons",
  },
  {
    label: "card",
    to: "card",
  },
  {
    label: "Dropdowns",
    to: "dropdowns",
  },
  {
    label: "Forms",
    to: "forms",
  },
  {
    label: "Listgroup",
    to: "listgroup",
  },
  {
    label: "Modal",
    to: "modal",
  },
  {
    label: "Navbar",
    to: "navbar",
  },
  {
    label: "Navs",
    to: "navs",
  },
  {
    label: "Pagination",
    to: "pagination",
  },
  {
    label: "Progress",
    to: "progress",
  },
  {
    label: "Tooltips",
    to: "tooltips",
  },
]
