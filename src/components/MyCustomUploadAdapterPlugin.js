import axios from "axios";
// import { useSession } from "next-auth/react";



export default function MyUploadAdapterPlugin(editor) {
    
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = (loader) => {
      return new MyUploadAdapter(loader)
    }
    
  }
  
class MyUploadAdapter {
    constructor(props) {
        // CKEditor 5's FileLoader instance.
    this.loader = props;
    // this.token = props.token;
    // URL where to send files.
    this.url = "http://localhost:8000/api/blog/saved_images/";
    }
    
    // Starts the upload process.
    upload() {

        const savingImage = this.savingImage = async(img) => {
            // console.log("it is the image:", img)
            let formData = new FormData()
           
            formData.append("image", img)
            formData.append("title", "my blog image")
             
        
            try {
                const response = await axios({
                url: this.url, 
                method: "post",
                headers:{
                    // "Content-Type": "application/json",
                    "Authorization": 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA1NTg1NjY2LCJpYXQiOjE3MDU1ODIwNjYsImp0aSI6IjFiZGNiMDhlODQ1ZjQ4OGU4YmEyZmRkZjVhYzY5NDNhIiwidXNlcl9pZCI6MTJ9.6JH8fvAxCP3ZITvAP9Ty1VAgKiVkyrI0mdAiUva1agb_YIuMFxoGlZqYT0IvePAaj90Htin_J-lRiM-qlMbBeg'
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