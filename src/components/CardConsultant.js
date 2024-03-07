import React from "react"
import Link from "next/link"

import { Card, Badge } from "react-bootstrap"

import Stars from "../components/Stars"
import Image from "./CustomImage"
import Icon from "./Icon"

const CardConsultant = (props) => {
  const data = props.data
  // console.log(data)
  return (
    <Card className="h-100 border-0 shadow">
      <div
        style={{
          minHeight: "200px",
        }}
        className="card-img-top overflow-hidden dark-overlay"
      >
        <Image
          src={data.avatar?data.avatar:`/content/img/photo/avatar-4.jpg`}
          layout="fill"
          className="bg-image"
          alt={data.first_name}
          sizes={
            props.sizes
              ? props.sizes
              : "(max-width:576px) 100vw, (max-width:991px) 50vw, 280px"
          }
        />
        {/* <Link href={data.link?data.link:""} className="tile-link">

        </Link> */}
        <Link href={'/consultant/[consultantID]'} as={`/consultant/${(data.first_name+'-'+data.last_name+'-'+data.user).toLowerCase()}`} className="tile-link">

        </Link>
        <div className="card-img-overlay-bottom z-index-20">
          <h4 className="text-white text-shadow">{data.first_name+' '+data.last_name}</h4>
          <p className="mb-2 text-xs">
            <Stars stars={data.stars?data.stars:5} />
          </p>
        </div>
        <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
          <Badge pill bg="transparent" className="px-3 py-2">
            {data.rcic?"RCIC #: "+data.rcic:"RCIC #:"}
          </Badge>
          <a href="#" className="card-fav-icon position-relative z-index-40">
            <Icon icon="heart-1" className="text-white" />
          </a>
        </div>
      </div>
      <Card.Body>
        <p className="text-sm text-muted mb-3">
          {data.about?data.about.substring(0, 115) + "...":"The consultant hasn't completed his/her bio yet."}
        </p>
        <p className="text-sm text-muted mb-0">
          Location:{" "+data.country}
        </p>
        <p className="text-sm text-muted mb-0">
          Speciality:{" "+data.service}
        </p>
        <p className="text-sm text-muted mb-0">
          Languages:{" "+data.language}
        </p>
        <p className="text-sm mb-0">
          {data.tags?data.tags.map((tag, index) => (
            <a key={index} className="me-1" href="#">
              {tag}
              {index < data.tags.length - 1 && ","}
            </a>
          )):""}
        </p>
      </Card.Body>
    </Card>
  );
}

export default CardConsultant
