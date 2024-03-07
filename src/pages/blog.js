import React, {useState, useEffect} from "react"

import Link from "next/link"

import { Container, Row, Col, Pagination, Button, Card } from "react-bootstrap"

import CardPost from "../components/CardPost"

import data from "../data/blog.json"
import Image from "../components/CustomImage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons"

// import { authOptions } from "./api/auth/[...nextauth]";
// import { getServerSession } from "next-auth"
import axios from "axios"


export async function getStaticProps() {
  // const { page } = context
  const blogs = await axios({
    url:`https://www.immsmart.com/api/blog/all/pagination/`,
    method: "get",
    headers:'application/json'
})
  const posts = blogs.data
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Blog",
      postData:posts
    },
  }
}

// export async function getServerSideProps(context) {
//   const session = await getServerSession(context.req, context.res, authOptions)
//   console.log("session", session)
//   console.log('context', context.resolvedUrl)
//   if (!session) {
//     return {
//       props: {
//         nav: {
//           light: true,
//           classes: "shadow",
//           color: "white",
//         },
//         title: "Blog",
//       },
//     }
//   }
//   const pk = session.user.pk
//   const token = session.access_token
//   const response = await axios({
//     url: `http://127.0.0.1:8000/api/users/${pk}/`,
//     method: "get",
//     headers: {
//           "Authorization": 'Bearer '+ token
//       },
//   });
//   const profile = response.data;
//   return {
//     props: {
//       nav: {
//         light: true,
//         classes: "shadow",
//         color: "white",
//       },
//       title: "immsmart",
//       loggedUser: profile,
//     }
//   }
// }

const Blog = ({ postData }) => {
  const [page, setPage] = useState(null)
  const [posts, setPosts] = useState(null)
  const loadData = () => {
    if(page) {
      axios.get(page).then((res) => {
        // console.log("new page", res.data)
        setPosts(res.data)
      })
    }else{
        setPosts(postData)
    }

  }
  useEffect(()=>{
    loadData()
  }, [page])

  const nextPageClick = () => {
    setPage(posts.next)
  }
  const previousPageClick = () => {
    setPage(posts.previous)
  }

  console.log(posts)
  // console.log("loading page", page)
  // const featuredPost = data.posts[0]
  if(!posts){
    return <></>
  }
  const featuredPost = posts.results[0]

  //set the cover if no cover provided
  featuredPost.cover = featuredPost.cover?featuredPost.cover:"/content/img/photo/photo-1449034446853-66c86144b0ad.jpg"

  return (
    <React.Fragment>
      {featuredPost && (
        <section className="position-relative py-6">
          {featuredPost.cover && (
            <Image
              src={featuredPost.cover}//{`/content/${featuredPost.img}`}
              alt={featuredPost.title}
              className="bg-image"
              loading="eager"
              layout="fill"
              priority={true}
            />
          )}
          <Container className="position-relative">
            <Row>
              <Col lg="6">
                <Card>
                  <Card.Body className="p-5">
                    <strong className="text-uppercase text-secondary d-inline-block mb-2 text-sm">
                      {featuredPost.category}
                    </strong>
                    <h2 className="mb-3">{featuredPost.title}</h2>
                    <p className="text-muted">{featuredPost.excerpt}</p>
                    <Link
                      href="/blog/[slug]"
                      as={`/blog/${featuredPost.slug}`}
                      passHref
                      legacyBehavior>
                      <Button variant="link" className="p-0">
                        Continue reading{" "}
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      )}
      <section className="py-6">
        <Container>
          <Pagination
              aria-label="Page navigation example"
              className="d-flex justify-content-between mb-5"
            >
              <Pagination.Item href="#" className={posts.previous?"text-sm":"disabled text-sm"} onClick={previousPageClick}>
                <FontAwesomeIcon icon={faChevronLeft} className="me-1" />
                Older posts
              </Pagination.Item>
              <Pagination.Item className={posts.next?"text-sm":"disabled text-sm"} onClick={nextPageClick}>
                Newer posts
                <FontAwesomeIcon icon={faChevronRight} className="ms-1" />
              </Pagination.Item>
          </Pagination>
          <Row className="mb-5">
            {posts.results &&
              posts.results.map((post, index) => {
                // the first post is featured
                if (index >= 0)
                  return (
                    <Col
                      key={index}
                      sm="6"
                      lg="4"
                      className="mb-4 hover-animate"
                    >
                      <CardPost data={post} index={index} />
                    </Col>
                  )
              })}
          </Row>
          
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Blog
