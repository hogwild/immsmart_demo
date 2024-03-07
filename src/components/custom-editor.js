// components/custom-editor.js

import React from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";
// import { SimpleUploadAdapter, Base64UploadAdapter } from "ckeditor5-custom-build";

const editorConfiguration = {
    toolbar: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo'
    ],
    
    // simpleUpload: {
    //     uploadUrl:"http://127.0.0.1:8000/api/blog/",
    //     withCredentials: true,
    //     headers: {
    //         'X-CSRF-TOKEN': 'CSRF-Token',
    //         'Authorization': 'Bearer <JSON Web Token>'
    //     }

    // }
};

function CustomEditor( props ) {
        return (
            <CKEditor
                editor={ Editor }
                config={ editorConfiguration }
                data={ props.initialData }
                onChange={ (event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                } }
            />
        )
}

export default CustomEditor;
