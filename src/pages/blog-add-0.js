// 'use client';

import React,  { useState, useEffect, useRef } from "react"

import { Container, Row, Col, Form, Button } from "react-bootstrap"
import Select from "react-select"
import ProgressBar from "../components/ProgressBar"
// import ListingForm from "../components/ListingForm"

// import Select from "react-select"
// import { useDropzone } from "react-dropzone"

import { FormContext } from "../components/FormContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

import { useSession } from "next-auth/react";
// import { useRouter } from "next/router"
import Editor from "../components/Editor";
import Link from "next/link"
import axios from "axios";
// import dynamic from 'next/dynamic';

// import { CKEditor } from "@ckeditor/ckeditor5-react"
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

// import data from "../data/user-add.json"
export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      loggedUser: true,
      title: "Add your post",
      listingForm: true,
    },
  }
}

const data_ = 
  {
  "title": "Your post", 
  "subtitle":"adding a new post",
  "formBlocks": [
    {
      "title": "Basic",
        // "content": "His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.",
        "inputs": [
          {
            "label": "Title of your post",
            "name": "form_name",
            "type": "text"
          },
          {
            "label": "Home type",
            "name": "type",
            "type": "select",
            "text": "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections",
            "options": [
              {
                "label": "Entire place",
                "value": "type_0"
              },
              {
                "label": "Private room",
                "value": "type_1"
              },
              {
                "label": "Shared room",
                "value": "type_2"
              }
            ]
          },
          {
            "label": "Cover Image",
            "name": "photo",
            "type": "text",
            "text": "adding a cover for your blog",
          },
          {
            "type": "checkboxes",
            "label": "Tags",
            "checkboxes": [
                {
                    "label": "Kitchen",
                    "id": "amenities_0",
                    "name": "amenities[]"
                },
                {
                    "label": "Shampoo",
                    "id": "amenities_1",
                    "name": "amenities[]"
                },
                {
                    "label": "Heating",
                    "id": "amenities_2",
                    "name": "amenities[]"
                },
                {
                    "label": "Air conditioning",
                    "id": "amenities_3",
                    "name": "amenities[]"
                },
                {
                    "label": "Washer",
                    "id": "amenities_4",
                    "name": "amenities[]"
                },
                {
                    "label": "Dryer",
                    "id": "amenities_5",
                    "name": "amenities[]"
                },
                {
                    "label": "Wifi",
                    "id": "amenities_6",
                    "name": "amenities[]"
                },
                {
                    "label": "Breakfast",
                    "id": "amenities_7",
                    "name": "amenities[]"
                },
                {
                    "label": "Indoor fireplace",
                    "id": "amenities_8",
                    "name": "amenities[]"
                },
                {
                    "label": "Buzzer/wireless intercom",
                    "id": "amenities_9",
                    "name": "amenities[]"
                },
                {
                    "label": "Doorman",
                    "id": "amenities_10",
                    "name": "amenities[]"
                },
                {
                    "label": "Hangers",
                    "id": "amenities_11",
                    "name": "amenities[]"
                },
                {
                    "label": "Iron",
                    "id": "amenities_12",
                    "name": "amenities[]"
                },
                {
                    "label": "Hot dryer",
                    "id": "amenities_13",
                    "name": "amenities[]"
                },{
                    "label": "Laptop friendly workspace",
                    "id": "amenities_14",
                    "name": "amenities[]"
                }
            ]
          }
        ]
    },
    {
      "title": "Amenities",
      "content": "His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.",
      "inputs": [
        {
          "label": "Title of your post",
          "name": "form_name",
          "type": "textarea"
        },
      ]
    }
  ]
}


const BlogAdd1 = (props) => {
  const [formInputs, setFormInputs] = React.useContext(FormContext)
  const { data:session, status } = useSession()
  const [ token, setToken ] = useState(null)
  const [blogId, setBlogId] = useState(null)
  const [ postInfo, setPostInfo ] = useState(null)

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [inputData, setInputData] = useState("");
  // const [excerpt, setExcerpt] = useState("");

  const [post, setPost] = useState({
    title:"",
    slug: "",
    category:"",
    cover:"",
    author:"",
    // content:"",
    // excerpt:"",
  })


  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  
  // useEffect(() => {
  //   editorRef.current = {
  //     CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
  //     ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),

  //   };
  // }, []);



  // const router = useRouter()
  useEffect(() => {
    if(status==="loading"){
      return () => <>Loading or unauthenticated...</>
    }
    if(status==="authenticated"){
      editorRef.current = {
        CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
        ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
      }
      setEditorLoaded(true)
      setToken(session.access_token)
      const getDraftBlog = async () => {
        try{
          const response = await axios({
            url: `https://www.immsmart.com/api/blog/user/${session.user.pk}/draft/`, 
            method: "get",
            headers: {
                  "Authorization": 'Bearer '+ session.access_token
              },
            // data: {
            //   "author":session.user.pk,
            //   "title":"Draft",
            // }
          })
          return response.data
        // return response.data
        }catch(error){
          console.log(error)
        }
      }
      getDraftBlog().then(userDraftBlogs => {
        if(userDraftBlogs.length>0){
          // let draftId = userDraftBlogs[0].id
          const info = { ...userDraftBlogs[0], email: session.user.email, token:session.access_token}
          setPostInfo(info)
          setBlogId(info.id)
        }else{
          const addDraftBlog = async () => {
            try{
              const response = await axios({
                url: `https://www.immsmart.com/api/blog/add/`, 
                method: "post",
                headers: {
                      "Authorization": 'Bearer '+ session.access_token
                  },
                data: {
                  "author":session.user.pk,
                  "category":"draft",
                  "title":"draft",
                }
              })
              // setBlogId(response.data)
              return response.data
            // return response.data
            }catch(error){
              console.log(error)
            }
          }
          addDraftBlog().then(newDraftBlog => {
            const info = { ...newDraftBlog, email: session.user.email, token:session.access_token}
            setPostInfo(info)
            setBlogId(info.id)
          })

        }
      })
    }
  }, [status]);

  
  
  console.log("post info:", postInfo)
  if(!postInfo){
    return () => <>Loading...</>
  }
  if (status==="unauthenticated"){
    // router.push('/')
    return "Unauthenticated. Please log in to continue..." 
  }

  

  const prevStep = false
  const nextStep = '/user-add-2'
  const categories = [{label:"Draft", value:"draft"},  {label:"News", value:"news"}, {label:"Column", value:"column"}, 
                      {label:"Policy", value:"policy"}, {label:"Interview", value:"interview"}]

  
  const getSlug = (title) =>{
    return title.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-').toLowerCase();
  }
  // console.log(getSlug("hello, world!"))

  const getExcerpt = (body) => {

    let first_p_tag = String(body).indexOf("<p>")+3
    let second_p_tag = String(body).slice(first_p_tag).indexOf("</p>")+3
    // console.log(body.slice(first_p_tag, second_p_tag))
    return String(body).slice(first_p_tag, second_p_tag)
  }

  const onChange = ({currentTarget: input}) => {
    let newData = { ...post}
    newData[input.name] = input.value
    newData['author'] = postInfo.author
    newData['slug'] = getSlug(input.value)
    setPost(newData)
    
  }
  const onImageChange = (e) => {
    let newData = { ...post }
    if(e.target.files[0]){
      newData["cover"] = e.target.files[0]
      setPost(newData)
    }
  }
  const onSelectChange = ({value}) => {
    let newData = { ...post}
    newData['category'] = value
    setPost(newData)
  }

  const onCheckboxChange = (e) => {
    const value = e.target.value
    let newData = { ...post}
    setPost(newData)
  }

  const onSubmitPost = async(e) => {
    
    // e.preventDefault()
    let newData = {...post}
    // newData['content'] = inputData
    // newData['slug'] = getSlug(newData["title"]) //.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-').toLowerCase();
    // newData['excerpt'] = getExcrept(inputData)
    // newData['author'] = postInfo.author
    setPost(newData)

    // console.log("the post:", post, postInfo)

    let formData = new FormData()
    for(const obj of Object.keys(post)){
      if (post[obj]){
        formData.append(obj, post[obj])
      }
    formData.append("content", inputData)
    formData.append("excerpt", getExcerpt(inputData))

    }
    const response = await axios({
        url: `https://www.immsmart.com/api/blog/add/${postInfo.id}/`, 
        method: "put",
        headers:{
              "Authorization": 'Bearer ' + postInfo.token,
          },
        data: formData,
      }
    ).then((response) => {
        console.log(response)
      })
  }
  
  return (
    <React.Fragment>
      <ProgressBar progress={20} />
      <section className="py-5">
        <Container>
          <p className="subtitle text-primary">{data_.subtitle}</p>
          <h1 className="h2 mb-5">
            {data_.title}
            <span className="text-muted float-end">Step 1</span>
          </h1>
          <Form>
          <Row className="form-block" key={data_.title}>
            <div className="mb-4">
                <Form.Label htmlFor="title">Title of Your Post</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    id="title"
                    defaultValue={postInfo?postInfo.title:""}
                    onChange={(e)=>{
                      onChange(e);
                    }}
                  />
            </div>
            <Col lg="6" className="ms-auto">
            <div className="mb-4">
                <Form.Label htmlFor="category">Category</Form.Label>
                  <Select
                    id="category"
                    instanceId="category"
                    name="category"
                    options={categories}
                    defaultValue={categories[0]}
                    className="selectpicker z-index-20"
                    classNamePrefix="selectpicker"
                    onChange={(e)=>{
                      onSelectChange(e)
                    }}
                  />
            </div>
            </Col>
            <Col lg="6" className="ms-auto">
            <div className="mb-4">
                <Form.Label htmlFor="cover"><h6>Cover Image</h6></Form.Label>
                <Form.Control
                  type="file"
                  name="cover"
                  id="cover"
                  accept="image/jpeg, image/png, image/gif, image/jpg"
                  onChange={(e)=>{
                    onImageChange(e);
                  }}
                />
            </div>
            </Col>
            <Col lg="12">
              {data_.formBlocks[0].inputs[3].type === "checkboxes" && (
                    <div className="mb-4">
                      <Form.Label>{data_.formBlocks[0].inputs[3].label}</Form.Label>
                      <ul className="list-inline mb-0">
                        {data_.formBlocks[0].inputs[3].checkboxes.map((checkbox) => (
                          <li key={checkbox.id} className="list-inline-item">
                            <Form.Check
                              type="checkbox"
                              id={checkbox.id}
                              name={checkbox.name}
                              value={formInputs[checkbox.id] || ""}
                              onChange={(e) => onCheckboxChange(e)}
                              label={checkbox.label}
                              className="text-muted"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
            </Col>
            <Col lg="12">
              <Form.Label><h6>Body</h6></Form.Label>
                 <Editor
                    name="description"
                    onChange={(inputData) => {
                      setInputData(inputData);
                      // setExcerpt(getExcerpt(inputData));
                    }}
                    editorLoaded={editorLoaded}
                    access_token={token}
                    blogId = {blogId}
                    CKEditor={CKEditor}
                    ClassicEditor={ClassicEditor}
                  />
                   {JSON.stringify(inputData)}
                   {/* {typeof(inputData)} */}
                    
            </Col>

          </Row>
     
            <Row className="form-block flex-column flex-sm-row">
              <Col className="text-center text-sm-start">
                {prevStep && (
                  <Link href={prevStep} passHref legacyBehavior>
                    <Button variant="link" className="text-muted">
                      <FontAwesomeIcon icon={faChevronLeft} className="me-2" />
                      Back
                    </Button>
                  </Link>
                  
                )}
              </Col>
              <Col className="text-center text-sm-end">
                {/* {nextStep && (
                  <Link href={nextStep} passHref legacyBehavior> 
                    <Button className="px-3" type="submit">
                      Save and Preview
                      <FontAwesomeIcon icon={faChevronRight} className="ms-2" />
                    </Button>
                  </Link>
                )} */}
                <Button className="px-3" href={nextStep} passHref legacyBehavior onClick={onSubmitPost}>
                      Save and Preview
                      <FontAwesomeIcon icon={faChevronRight} className="ms-2" />
                </Button>
                {props.finish && (
                  <Link href={props.finish} passHref legacyBehavior>
                    <Button className="px-3">
                      Finish
                      <FontAwesomeIcon icon={faChevronRight} className="ms-2" />
                    </Button>
                  </Link>
                )}
              </Col>
            </Row>
        </Form>

          
        </Container>
        
      </section>
    </React.Fragment>
  )
}

export default BlogAdd1
