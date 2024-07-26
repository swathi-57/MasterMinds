import React from 'react'
import image from './teacher.jpg'

function Teacherslist(props) {
    let {details}=props;
    let{name,proff,subject,videos,img}=details;
  return (
    <>
    <div className="box">
      <div className="tutor">
        <img src={img} alt={image}/>
        <div>
          <h3>{name}</h3>
          <p>Profession: {proff}</p>
          <p>Subject: {subject}</p>
          <p>Videos: {videos}</p>
        </div>
      </div>
      </div>
    </>

  )
}

export default Teacherslist
