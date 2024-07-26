import React from 'react'
import Header from '../Components/Header'
import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Courses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/courses')
    .then((course)=> setCourses(course.data))
    .catch((err)=>console.log(err))
  });
  function handleSubmit(e,path,name,sub){
    e.preventDefault();
    axios.post('http://localhost:5000/courses',{name,sub})
    .then((res) => {
      toast.success(`${sub} course enrolled`)
      navigate(`/courses/${path}`);
    })
    .catch((err) => toast.error("Course Not Enrolled"));
  }
  return (
    <>
  <Header/>
  <section className="courses">
  <h1 className="heading">our courses</h1>
  <div className="box-container">
    {
      courses.map((course)=>{
        return <div className="box">
                  <div className="tutor">
                    <img src={course.image} alt="" />
                    <div className="info">
                      <h3>{course.name}</h3>
                    </div>
                  </div>
                  <div className="thumb">
                    <img src={course.img} alt="" />
                    <span>{course.videos} videos</span>
                  </div>
                  <h3 className="title">complete {course.subject} tutorial</h3>
                  <button className="inline-btn" onClick={(e)=>{
                    let sub=course.subject
                    let name='swathi'
                    console.log(sub+" "+name)
                    handleSubmit(e,course.path,name,sub)
                  }}>Enroll now</button>
                </div>
      })
    }
  </div>
</section>
    </>
  )
}

export default Courses