import React, { useState, useRef } from "react";
import "./ImageUplodePage.css";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });

            console.log(file);
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };



  const handleUploadButtonClick = (file) => {
    var myHeaders = new Headers();
  
    var formdata = new FormData();
    formdata.append("file", file);
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
  
    fetch("", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        const profileurl = JSON.parse(result);
        setImage(profileurl.img_url);
      })
      .catch((error) => console.log("error", error));
  };
  
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  

  return (
    <div className="image-upload-container">
      <div className="box-decoration">
        <label htmlFor="image-upload-input" className="image-upload-label">
          {image ? image.name : "Choose an image"}
        </label>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="upload image" className="img-display-after" />
          ) : (
            <img src="./photo.png" alt="upload image" className="img-display-before" />
          )}

          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>

        <button
          className="image-upload-button"
          onClick={handleUploadButtonClick}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default ImageUpload;


// //


// import React, { useState } from 'react';
// const ImageUpload = () => {
//   const [file, setFile] = useState(null);
 
  

//   const handleFileChange = (event) => {
//     console.log(event.target.files[0]);
    
//     setFile(event.target.files[0]);
//   };

  

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('image', file);
//     try {
//       const response = await fetch('url', {
//         method: 'POST',
//         body: formData,
//       });
//       if (response.ok) {
//         console.log('Image uploaded successfully');
//       } else {
//         console.error('Image upload failed');
//       }
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Upload Image</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="file" accept="image/*" onChange={handleFileChange} />
//         <button type="submit"  >Upload</button>
//       </form>
//     </div>
//   );
// };

// export default ImageUpload;