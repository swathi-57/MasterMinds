import { useEffect, useState } from "react"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import image from './image/sir2.webp'
import axios from "axios"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

function TeacherProfile() {
  const location = useLocation();
  const { state } = location;
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/teachers')
    .then((teacher)=> setTeachers(teacher.data))
    .catch((err)=>console.log(err))
    });
  return (
    <>
  <Header/>
  <section className="teacher-profile">
    <h1 className="heading">profile details</h1>
    <div className="details">
      {
        teachers.map((teacher)=>{
          if(teacher.name===state.name){
            return <>
              <div className="tutor">
                <img src={image} alt="" />
                <h3>{teacher.name}</h3>
                <span>{teacher.proff}</span>
              </div>
              <div className="flex">
                <p>
                total videos : <span>{teacher.videos}</span>
                </p>
              </div>
              </>
          }
        })
      }
    </div>
  </section>
  <section className="courses">
    <h1 className="heading">our courses</h1>
    <div className="box-container">
      <div className="box">
        <div className="thumb">
          <img src="assets/images/thumb-1.png" alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete HTML tutorial</h3>
        <Link to="/playlist" className="inline-btn">
        Enroll now
      </Link>
      </div>
      <div className="box">
        <div className="thumb">
          <img src="assets/images/thumb-2.png" alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete CSS tutorial</h3>
        <Link to="/playlist" className="inline-btn">
        Enroll now
      </Link>
      </div>
      <div className="box">
        <div className="thumb">
          <img src="assets/images/thumb-3.png" alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete javascript tutorial</h3>
        <Link to="/playlist" className="inline-btn">
        Enroll now
      </Link>
      </div>
      <div className="box">
        <div className="thumb">
          <img src="assets/images/thumb-4.png" alt="" />
          <span>10 videos</span>
        </div>
        <h3 className="title">complete Boostrap tutorial</h3>
        <Link to="/playlist" className="inline-btn">
        Enroll now
      </Link>
      </div>
    </div>
  </section>
  <Footer/>
    </>
  )
}

export default TeacherProfile
