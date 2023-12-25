import React from "react"
import Link from "next/link"
import { Media, Card, Button } from "react-bootstrap"

import Stars from "../components/Stars"
import Icon from "./Icon"
import Image from "../components/CustomImage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faUsers, faFile } from "@fortawesome/free-solid-svg-icons"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"

const BookingColumn = (props) => {
  const from = props.from
  const to = props.to
  return (
    <Card className="border-0 shadow">
      <Card.Body className="p-4">
        <div className="text-block pb-3">
          <div className="d-flex align-items-center">
            <div>
              <h6>
                <Link href="/user-profile" className="text-reset">
                  
                    Jack London
                  
                </Link>
              </h6>
              <p className="text-muted text-sm mb-0">
                RCIC: 12345678
                <span className="mt-n1 d-block">
                  <Stars stars={4} size="sm" color="text-primary" />
                </span>
              </p>
            </div>
            <Link href="/detail-rooms" className="ms-3">

              <Image
                src="/content/img/photo/avatar-4.jpg"
                width={100}
                height={67}
                layout="fixed"
                alt=""
                className="rounded"
              />

            </Link>
          </div>
        </div>
        <div className="text-block py-3">
          <ul className="list-unstyled mb-0">
            <li className="mb-3">
              <FontAwesomeIcon
                icon={faUsers}
                className="fa-fw text-muted me-2"
              />
              加拿大旅转学服务合同
            </li>
            <li className="mb-3">
              <FontAwesomeIcon
                icon={faCalendar}
                className="fa-fw text-muted me-2"
              />
              合同金额: CAD$5,000；完成平台服务费支付后可享 immsmart 会员折扣 15%
            </li>
            {/* <li className="mb-3">
            <FontAwesomeIcon
                icon={faArrowRight}
                className="fa-fw text-muted me-2"
              />
              完成平台服务费支付后可享 immsmart 会员折扣 15%
            </li> */}
          </ul>
        </div>
        <div className="text-block pt-3 pb-0">
          <table className="w-100">
            <tbody>
              {/* <tr>
                <th className="fw-normal py-2">合同金额</th>
                <td className="text-end py-2">$5000</td>
              </tr> */}
              {/* <tr>
                <th className="fw-normal py-2">会员折扣</th>
                <td className="text-end py-2">15%</td>
              </tr> */}
              <tr>
                <th className="fw-bold py-2">请支付</th>
              </tr>
              <tr>
                <th className="fw-normal pt-2 pb-3">平台服务费</th>
                <td className="text-end pt-2 pb-3">$500</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-top">
                <th className="pt-3">Total</th>
                <td className="fw-bold text-end pt-3">$500</td>
              </tr>
              <tr className="border-top">
                <td className="fw-normal text-end">
                    <Button variant="link" href="/user-invoice" className="text-muted">
                        <FontAwesomeIcon icon={faFile} className="me-2" />
                          获取发票
                    </Button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </Card.Body>
      <Card.Footer className="bg-primary-light py-4 border-0">
        <div className="d-flex align-items-center">
          <div>
            <h6 className="text-primary">Flexible – free cancellation</h6>
            <p className="text-sm text-primary opacity-8 mb-0">
              Cancel within 48 hours of booking to get a full refund.{" "}
              <a href="#" className="text-reset ms-3">
                More details
              </a>
            </p>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default BookingColumn
