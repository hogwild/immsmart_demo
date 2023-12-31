import React from "react"
import Link from "next/link"

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Breadcrumb,
  Table,
} from "react-bootstrap"

import data from "../data/user-invoice.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf } from "@fortawesome/free-regular-svg-icons"
import { faPrint } from "@fortawesome/free-solid-svg-icons"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      loggedUser: true,
      title: "Personal info - User Invoice",
    },
  }
}

const UserInvoice = () => {
  // Subtotal price calculation
  const subTotal = data.items.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0
  )

  // Vat percentage
  const VAT = 21

  // Price total
  const total = subTotal * (1 + VAT / 100)

  // Vat part of total price
  const totalVAT = total - subTotal

  return (
    <section className="py-5 p-print-0">
      <Container>
        <Row className="mb-4 d-print-none">
          <Col lg="6">
            <Breadcrumb listProps={{ className: "ps-0 justify-content-start" }}>
              <Link href="/" passHref legacyBehavior>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </Link>
              <Link href="/user-account" passHref legacyBehavior>
                <Breadcrumb.Item>Account</Breadcrumb.Item>
              </Link>
              <Breadcrumb.Item active>Invoice {data.number}</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col lg="6" className="text-lg-end">
            <Button className="me-2">
              <FontAwesomeIcon icon={faFilePdf} className="me-2" /> Download PDF
            </Button>
            <Button variant="transparent" onClick={() => window.print()}>
              <FontAwesomeIcon icon={faPrint} className="me-2" /> Print
            </Button>
          </Col>
        </Row>
        <Card className="border-0 shadow shadow-print-0">
          <Card.Header className="bg-gray-100 p-5 border-0 px-print-0">
            <Row>
              <Col md="6" className="d-flex align-items-center mb-4 mb-md-0">
                <img src="/content/svg/logo.svg" alt="Directory" />
              </Col>
              <Col md="6" className="text-md-end">
                <h3 className="mb-0">Invoice {data.number}</h3>
                <p className="mb-0">Issued on {data.issued}</p>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body className="p-5 p-print-0">
            <Row className="mb-4">
              <Col sm="6" className="pe-lg-3">
                <h2 className="h6 text-uppercase mb-4">Supplier</h2>
                <h6 className="mb-1">Directory, Inc.</h6>
                <p className="text-muted">
                  13/25 New Avenue
                  <br />
                  New Heaven
                  <br />
                  45Y 73J
                  <br />
                  England
                  <br />
                  <strong>Great Britain</strong>
                </p>
              </Col>
              <Col sm="6" className="pe-lg-4">
                <h2 className="h6 text-uppercase mb-4">Customer</h2>
                <h6 className="mb-1">James Brown</h6>
                <p className="text-muted">
                  13/25 New Avenue
                  <br />
                  New Heaven
                  <br />
                  45Y 73J
                  <br />
                  England
                  <br />
                  <strong>Great Britain</strong>
                </p>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col md="6" className="pe-lg-3 text-sm">
                <Row className="mb-2 mb-sm-1">
                  <Col sm="6" className="text-uppercase text-muted">
                    Bank account
                  </Col>
                  <Col sm="6" className="text-sm-end">
                    hello@bootstrapious.com
                  </Col>
                </Row>
                <Row className="mb-2 mb-sm-1">
                  <Col sm="6" className="text-uppercase text-muted">
                    Reference
                  </Col>
                  <Col sm="6" className="text-sm-end">
                    {data.number}
                  </Col>
                </Row>
                <Row className="mb-2 mb-sm-1">
                  <Col sm="6" className="text-uppercase text-muted">
                    Payment method
                  </Col>
                  <Col sm="6" className="text-sm-end">
                    Bank transfer
                  </Col>
                </Row>
              </Col>
              <Col md="6" className="ps-lg-4 text-sm">
                <Row className="mb-2 mb-sm-1">
                  <Col sm="6" className="text-uppercase text-muted">
                    Issued on
                  </Col>
                  <Col sm="6" className="text-sm-end">
                    {data.issued}
                  </Col>
                </Row>
                <Row className="mb-2 mb-sm-1">
                  <Col sm="6" className="text-uppercase text-muted">
                    Due on
                  </Col>
                  <Col sm="6" className="text-sm-end">
                    {data.due}
                  </Col>
                </Row>
              </Col>
            </Row>
            <Table responsive className="text-sm mb-5" striped>
              <thead className="bg-gray-200">
                <tr className="border-0">
                  <th className="center">#</th>
                  <th>Item</th>
                  <th>Description</th>
                  <th className="text-end">Price</th>
                  <th className="center">Qty</th>
                  <th className="text-end">Total</th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((item, index) => (
                  // Map through invoice items
                  <tr key={index}>
                    <td className="text-center">{index + 1}</td>
                    <td className="fw-bold">{item.name}</td>
                    <td>{item.description}</td>
                    <td className="text-end">${item.price.toFixed(2)}</td>
                    <td className="text-center">{item.quantity}</td>
                    <td className="text-end">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Row>
              <Col sm="7" lg="5" xl="4" className="ms-auto">
                <Table>
                  <tbody>
                    <tr className="text-sm">
                      <td className="fw-bold">Subtotal</td>
                      <td className="text-end">
                        ${subTotal.toLocaleString("en-US")}
                      </td>
                    </tr>
                    <tr className="text-sm">
                      <td className="fw-bold">VAT ({VAT}%)</td>
                      <td className="text-end">${totalVAT.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="text-uppercase fw-bold">Total</td>
                      <td className="text-end fw-bold">
                        ${(+total.toFixed(2)).toLocaleString("en-US")}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="bg-gray-100 p-5 px-print-0 border-0 text-end text-sm">
            <p className="mb-0">Thank you for you business. Directory, Inc.</p>
          </Card.Footer>
        </Card>
      </Container>
    </section>
  );
}

export default UserInvoice
