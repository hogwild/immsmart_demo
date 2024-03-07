import React from "react"

import Link from "next/link"

// import blog from "../../data/blog.json"
import postDummyData from "../../data/post.json"

import { Container, Row, Col, Button, Collapse, Form, Fade } from "react-bootstrap"
import Image from "../../components/CustomImage"
import Avatar from "../../components/Avatar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReply } from "@fortawesome/free-solid-svg-icons"
import { faClock, faComment } from "@fortawesome/free-regular-svg-icons"
import axios from "axios"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import Index2 from ".."

export function getAllPostIds(posts) {
  return posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }))
}

export function getPostData(posts, slug) {

  for (var i = 0; i < posts.length; i++) {
    if (posts[i].slug == slug) {
      return posts[i]
    }
  }
}

export async function getStaticPaths() {
  const response = await axios({
    url:`https://www.immsmart.com/api/blog/all/`,
    method: "get",
    headers:'application/json'
  })
  const posts = response.data
  return {
    paths: getAllPostIds(posts.results), //because of the pagination, the blogs are in the .results
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const response = await axios({
    url:`https://www.immsmart.com/api/blog/all/`,
    method: "get",
    headers:'application/json'
  })
  const posts = response.data
  
  const postData = getPostData(posts.results, params.slug)
  const authorInfo = await axios({
    url:`https://www.immsmart.com/api/user/profile/${postData.author}`,
    method:"get",
    headers:'application/json'
  })

  const comments = await axios({
    url:`https://www.immsmart.com/api/blog/comment/all/${postData.id}`,
    method:"get",
    headers:'application/json'
  })

  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: postData.title,
      author: authorInfo.data,
      postData,
      comments: comments.data,
    },
  }
}
const Product = ({ postData, author, comments }) => {
  const [formCollapse, setFormCollapse] = React.useState(false)
  const [selectReplyCollapse, setSelectReplyCollapse] = React.useState(null)
  const {data:session, status} = useSession()
  const router = useRouter()
  // const [existingComments, setExistingComments] = React.useState(comments.results)
  const [newInput, setNewInput] = React.useState(null)
  // const [newReply, setNewReply] = React.useState(null)
  // console.log(status)
  // React.useEffect(()=>{
  //   if(newInput){
  //     data = {
  //       "user":session.user.pk,
  //       "blog_post":postData.id,
  //       "comment":newInput,
  //     }
  //   comments.results.unshift(data)
  // }
  // // setExistingComments(comments)
    
  // }, [existingComments])
  // console.log(postData.created_at.slice(0, postData.created_at.indexOf("T")))
  const date = new Date(postData.created_at)
  // console.log(date.toDateString())
  // comments.results.forEach(c => c.avator?"http://127.0.0.1:8000"+c.avator:"null")
  // console.log(postData)
  // console.log()
  comments.results.forEach(c => {
    c.date = c.created_at.split('T')[0]
  })
  // console.log(postData)
  // console.log(comments.results)

  

  //set the cover if no cover provided
  postData.cover = postData.cover?postData.cover:"/content/img/photo/photo-1449034446853-66c86144b0ad.jpg"

  const add_reply = async(e, comment_id) => {
      e.preventDefault()
      console.log("submit reply")
      try{
        if(newInput){
          const response = await axios({
            url: `https://www.immsmart.com/api/blog/comment/reply/add/${comment_id}/`, 
            method: "post",
            headers: {
                  "Authorization": 'Bearer '+ session.access_token
              },
            data: {
              "user":session.user.pk,
              "blog_post":postData.id,
              "comment":comment_id,
              "reply":newInput
            }
          })
          e.target.reset()
          // console.log(response.data)
          return response.data
      }
      // return response.data
      }catch(error){
        console.log(error)
      }
    
    
  }

  const add_comment = async(e) => {
      // console.log(e)
      e.preventDefault()
      console.log("submit comment")

      try{
        if(newInput){
          const response = await axios({
            url: `https://www.immsmart.com/api/blog/comment/add/${postData.id}/`, 
            method: "post",
            headers: {
                  "Authorization": 'Bearer '+ session.access_token
              },
            data: {
              "user":session.user.pk,
              "blog_post":postData.id,
              "comment":newInput,
            }
          })
          // console.log(response.data)
          e.target.reset() //set the textarea to empty
          return response.data
      }
      // return response.data
      }catch(error){
        console.log(error)
      }
    
  }

  // console.log(author)

  return (
    <React.Fragment>
      <section className="hero-home dark-overlay mb-5">
        {postData.cover && (
          <Image
            src={postData.cover}//{`/content/${postData.img}`}
            alt={postData.title}
            className="bg-image"
            loading="eager"
            layout="fill"
            priority={true}
          />
        )}
        <Container className="py-7">
          <div className="overlay-content text-center text-white">
            <h1 className="display-3 text-serif fw-bold text-shadow mb-0">
              {postData.title && postData.title}
            </h1>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="10" xl="8" className="mx-auto">
              <div className="py-3 mb-5 text-muted text-center fw-light d-flex align-items-center justify-content-center flex-wrap">
                {postDummyData.authorLink && (
                  (<Link href={"/consultant/[consultantID]"} as={`/consultant/${(author.first_name+"-"+author.last_name+"-"+author.user).toLowerCase()}`}>

                    <Avatar
                      image={author.avatar?author.avatar:"/content/img/avatar/avatar-5.jpg"}
                      alt=""
                      className="me-2"
                      border
                    />

                  </Link>)
                )}
                Written by&nbsp;
                {postDummyData.authorLink && (
                  <Link href={"/consultant/[consultantID]"} as={`/consultant/${(author.first_name+"-"+author.last_name+"-"+author.user).toLowerCase()}`} className="fw-bold">
                    {author.first_name+" "+author.last_name}
                  </Link>
                )}
                <span className="mx-1">|</span>{" "}
                {postData.created_at && date.toDateString().slice(4)} in&nbsp;
                {postDummyData.categoryLink && (
                  <Link href={postDummyData.categoryLink} className="fw-bold">
                    {postData.category}
                  </Link>
                )}
                <span className="mx-1">|</span>
                <a href="#" className="text-muted">
                  {comments.results && comments.results.length}{" "}
                  comments{" "}
                </a>
              </div>
              <p
                className="lead mb-5"
                dangerouslySetInnerHTML={{ __html: postData.excerpt }}
              />
            </Col>
          </Row>
          <Row>
            <Col xl="8" lg="10" className="mx-auto">
              <div className="text-content">
                <div
                  dangerouslySetInnerHTML={{ __html: postData.content }}
                />
                <hr />
              </div>
              {comments.results && (
                <div className="mt-5">
                  <h6 className="text-uppercase text-muted mb-4">
                    {comments.results.length} comments
                  </h6>
                  {comments.results.map((comment, index) => (
                    <div key={index} className="d-flex mb-4">
                      <Avatar
                        image={comment.avator?"https://www.immsmart.com"+comment.avator:'/content/img/avatar/avatar-9.jpg'}
                        alt={comment.email}
                        size="lg"
                        className="me-4 flex-shrink-0"
                        border
                      />
                        {/* flex-grow-1 will extend the div to the largest width available*/}
                      <div className="flex-grow-1"> 
                        <h5>{comment.first_name?comment.first_name +" "+comment.last_name:comment.email}</h5>
                        <p className="text-uppercase text-sm text-muted">
                          <FontAwesomeIcon icon={faClock} /> {comment.date}
                        </p>
                        <p className="text-muted">{comment.comment}</p>
                        {comment.replies.length>0 && comment.replies.map((reply, index) => (
                          <div key={"reply"+index} className="d-flex mb-4">
                            <Avatar
                              image={reply.avator?"https://www.immsmart.com"+reply.avator:'/content/img/avatar/avatar-9.jpg'}
                              alt={reply.email}
                              size="lg"
                              className="me-4 flex-shrink-0"
                              border
                            />
                            <div className="flex-grow-1"> 
                              <h5>{reply.first_name?reply.first_name +" "+reply.last_name:reply.email}</h5>
                              <p className="text-uppercase text-sm text-muted">
                                <FontAwesomeIcon icon={faClock} /> {reply.created_at.split('T')[0]}
                              </p>
                              <p className="text-muted">{reply.reply}</p>
                            </div>
                          </div>

                        ))}
                      
                        <div>
                          <Button
                            type="button"
                            aria-expanded={selectReplyCollapse==index}
                            aria-controls="leaveReply"
                            variant="link"
                            className="text-primary"
                            onClick={() => status==="authenticated"?setSelectReplyCollapse(selectReplyCollapse===index?null:index):router.push("/login/")}
                          >
                            <FontAwesomeIcon icon={faReply} /> Reply
                          </Button>
                       
                          <Collapse id="leaveReply" in={selectReplyCollapse==index} className="mt-4">
                            <div>
                              <Form method="post" onSubmit={(e) => add_reply(e, comment.id).then(res=> {
                                  // console.log(res)
                                  if(res){
                                    setNewInput(null)
                                    setSelectReplyCollapse(null)
                                    router.replace(router.asPath)  
                                  }
                                })}>
                                <div className="mb-4">
                                  <Form.Label htmlFor="reply">
                                    Reply <span className="required">*</span>
                                  </Form.Label>
                                  
                                  <Form.Control
                                    id="reply"
                                    as="textarea"
                                    className="form-control"
                                    rows="4"
                                    onChange={(e)=>setNewInput(e.target.value)}
                                  />
                                
                                </div>
                                <Button type="submit" variant="primary" disabled={!newInput}>
                                  <FontAwesomeIcon icon={faComment} /> Send
                                </Button>
                              </Form>
                            </div>
                          </Collapse>
                        </div> 
                      </div>
                      
                    </div>
                  ))}
                </div>
              )}
              <div className="mb-5">
                <Button
                  type="button"
                  aria-expanded={formCollapse}
                  aria-controls="leaveComment"
                  variant="outline-primary"
                  onClick={() => status==="authenticated"?setFormCollapse(!formCollapse):router.push("/login/")}
                >
                  Leave a comment
                </Button>
                <Collapse id="leaveComment" in={formCollapse} className="mt-4">
                  <div>
                    <h5 className="mb-4">Leave a comment</h5>
                    <Form method="post" onSubmit={(e) => add_comment(e).then(res=> {
                      // console.log(res)
                      if(res){
                        setNewInput(null)
                        setFormCollapse(false)
                        router.replace(router.asPath) // reload the current page 
                      }
                    })}>
                      <div className="mb-4">
                        <Form.Label htmlFor="comment">
                          Comment <span className="required">*</span>
                        </Form.Label>
                        <Form.Control
                          id="comment"
                          as="textarea"
                          className="form-control"
                          rows="4"
                          onChange={(e)=>setNewInput(e.target.value)}
                        />
                      </div>
                      <Button type="submit" variant="primary" disabled={!newInput}>
                        <FontAwesomeIcon icon={faComment} /> Comment
                      </Button>
                    </Form>
                  </div>
                </Collapse>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Product
