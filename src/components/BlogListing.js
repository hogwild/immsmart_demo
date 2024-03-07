import React from "react"
// import Link from "next/link"

import CardReview from "./CardReview"

const Reviews = (props) => {
    // console.log(props)
    const {avatar, blogs, first_name}=props.data
    // console.log(avatar, blogs)
    const blogData = blogs.map(blog =>{
        return {
            "content":blog.excerpt,
            "avatar":avatar,
            "starts":blog.likes.length,
            "date":blog.created_at.split("T")[0],
            "title":blog.title,
            "slug":blog.slug
        }
    })
    // console.log(blogData)
  return (
    <div className="text-block">
      <p className="subtitle text-sm text-primary">{first_name}&apos;s Blog</p>
      <h5 className="mb-4">Listing Posts</h5>
      {blogData.map((blog, idx) => {return (
        <>
            <CardReview key={idx} data={blog} />
            {/* <Link key={blog.slug} href={`/blog/${blog.slug}`} className="tile-link">
            </Link> */}
        </>
      )})}
    </div>
  )
}

export default Reviews
