import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// import MyUploadAdapterPlugin from "./MyCustomUploadAdapterPlugin";
// import { Image, ImageResizeEditing, ImageResizeHandles } from '@ckeditor/ckeditor5-image';

export default function Editor({ onChange, editorLoaded, name, value, access_token, blogId, CKEditor, ClassicEditor }) {
  // console.log("editor token:", access_token, "blog id:", blogId)  

  // const editorRef = useRef();
  // const { CKEditor, ClassicEditor } = editorRef.current || {};
  const replace_img_size = (data) => {
    const reg = /width="\d+" height="\d+"/g
    return data.replace(reg, 'width="100%" height="auto"')
  }

  const custom_config = {
    extraPlugins: [ WrappedMyUploadAdapterPlugin(access_token, blogId) ],
    // toolbar: {
    //   items: [
    //     'heading',
    //     '|',
    //     'bold',
    //     'italic',
    //     'link',
    //     'bulletedList',
    //     'numberedList',
    //     '|',
    //     'blockQuote',
    //     'insertTable',
    //     '|',
    //     'imageUpload',
    //     'undo',
    //     'redo'
    //   ]
    // },
  }
  // useEffect(() => {
  //   editorRef.current = {
  //     CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
  //     ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),

  //   };
  // }, []);
  

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          config={custom_config}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log(data)
            // onChange(data);
            let new_data = replace_img_size(data); //set image width=100%, so being responsive to mobile phone screens. 
            // console.log(new_data);
            onChange(new_data);
          }}
          
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
}

function WrappedMyUploadAdapterPlugin(token, blogId){

  return function MyUploadAdapterPlugin(editor) {
    // console.log(editor, token)
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = (loader) => {
      return new MyUploadAdapter({loader, token, blogId})
    } 
  }
}

class MyUploadAdapter {
  constructor({loader, token, blogId}) {
      // CKEditor 5's FileLoader instance.
  this.loader = loader;
  this.token = token;
  this.id = blogId;
  //console.log("in the adapter", this.token, props);
  // URL where to send files.
  // this.url = "https://www.immsmart.com/api/blog/saved_images/";
  this.url = "https://www.immsmart.net/api/blog/saved_images/";
  }
  
  // Starts the upload process.
  upload() {
      const savingImage = this.savingImage = async(img) => {
          // console.log("it is the image:", img)
          let formData = new FormData()
              formData.append("image", img)
              formData.append("blog_post", this.id)
          try {
              // console.log("token in adapter:", this.token, "id in adapter", this.id)
              
              const response = await axios({
              url: this.url, 
              method: "post",
              headers:{
                  // "Content-Type": "application/json",
                  "Authorization": 'Bearer '+ this.token
                },
              data: formData,
              })
              // console.log("insert image response:", response.data.image)

              return {default: response.data.image}
              } catch (error){
                      console.log('Error uploading image:', error)
                      return error
          }
      }
      return this.loader.file.then(file => savingImage(file))
  }

  // Aborts the upload process.
  abort() {
      const controller = new AbortController();
      axios.post(this.url, {
          signal: controller.signal
      }).then((response)=>{
          console.log("Image uploading canceled.")
      });
      controller.abort();
  }

}


// console.log("token in wrapper", token)
  // class MyUploadAdapter {
  //   constructor(props) {
  //       // CKEditor 5's FileLoader instance.
  //   this.loader = props;
  //   // this.token = token;
  //   //console.log("in the adapter", this.token, props);
  //   // URL where to send files.
  //   this.url = "http://localhost:8000/api/blog/saved_images/";
  //   }
    
  //   // Starts the upload process.
  //   upload() {
  
  //       const savingImage = this.savingImage = async(img) => {
  //           // console.log("it is the image:", img)
  //           let formData = new FormData()
           
  //           formData.append("image", img)
  //           formData.append("title", "my blog image")
             
        
  //           try {
  //               console.log("token in adapter:", token)
  //               const response = await axios({
  //               url: this.url, 
  //               method: "post",
  //               headers:{
  //                   // "Content-Type": "application/json",
  //                   "Authorization": 'Bearer '+ token
  //                 },
  //               data: formData,
  //               })
  //               // console.log("insert image response:", response.data.image)
  
  //               return {default: response.data.image}
  //               } catch (error){
  //                       console.log('Error uploading image:', error)
  //                       return error
                       
  //           }
  //       }
  //       return this.loader.file.then(file => savingImage(file))
  //   }
  
  //   // Aborts the upload process.
  //   abort() {
  //       const controller = new AbortController();
  //       axios.post(this.url, {
  //           signal: controller.signal
  //       }).then((response)=>{
  //           console.log("Image uploading canceled.")
  //       });
  //       controller.abort();
  //   }
  
  // }