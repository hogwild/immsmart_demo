import React, { useEffect, useState } from "react"

import { Container } from "react-bootstrap"

import ProgressBar from "../components/ProgressBar"

import data from "../data/user-add.json"
import ListingForm from "../components/ListingForm"
// import Editor from "../components/Editor";

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      loggedUser: true,
      title: "Add your listing",
      listingForm: true,
    },
  }
}

const UserAdd2 = () => {

  // const [editorLoaded, setEditorLoaded] = useState(false);
  // const [inputData, setInputData] = useState("");

  // useEffect(() => {
  //   setEditorLoaded(true);
  // }, []);


  return (
    <React.Fragment>
      <ProgressBar progress={40} />
      <section className="py-5">
        <Container>
          <p className="subtitle text-primary">{data[2].subtitle}</p>
          <h1 className="h2 mb-5">
            {data[2].title}
            <span className="text-muted float-end">Step 2</span>
          </h1>
          <ListingForm
            data={data[2]}
            prevStep="/user-add-1"
            nextStep="/user-add-3"
          />
         
          {/* <h1>{data[2].title}</h1> */}
{/*           
          <Editor
            name="description"
            onChange={(inputData) => {
              setInputData(inputData);
            }}
            editorLoaded={editorLoaded}
          />

          {JSON.stringify(inputData)} */}
      
        </Container>
      </section>
      
    </React.Fragment>
  )
}

export default UserAdd2
