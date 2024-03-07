import React from "react"
import Link from "next/link"

import Stars from "./Stars"
import Avatar from "./Avatar"

const CardReview = (props) => {
  const data = props.data
  // console.log(data.starts)
  return (
    <div className="d-flex d-block d-sm-flex review">
      <div className="text-md-center me-4 me-xl-5">
        <Avatar size="xl" image={data.avatar?data.avatar:"/content/img/avatar/avatar-9.jpg"} border />
        <p className="text-uppercase text-muted text-sm">{data.date}</p>
      </div>
      <div>
        <Link href={'/blog/[slug]'} as={`/blog/${data.slug}`}>
          <h6 className="mt-2 mb-1">{data.title}</h6>
        </Link>
        <div className="mb-2">
          <Stars size="xs" color="text-primary" stars={data.stars} />
        </div>
        <p className="text-muted text-sm">{data.content}</p>
      </div>
    </div>
  )
}

export default CardReview
