import React, { useState } from 'react'

const UploadImg = () => {
  const [images,seImages]= useState(url)
  const [saveImage, setSaveImage]= useState(null)

  function hendelUpload(e){
    console.log(e.target.file[0]);
    let uploaded = e.target.file[0];
    seImages(URL.createObjectURL(uploaded));
    setSaveImage(uploaded);
  }

  return (
    <div>UploadImg</div>
  )
}

export default UploadImg