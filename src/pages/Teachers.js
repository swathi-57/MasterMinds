import { useEffect, useState } from "react"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import axios from "axios"
import Teacherslist from "./Teacherslist"
import { Link } from "react-router-dom"

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/teachers')
    .then((teacher)=> setTeachers(teacher.data))
    .catch((err)=>console.log(err))
    });
  return (
   <>
   <Header/>
   <section className="teachers">
  <h1 className="heading">expert teachers</h1>
  <div className="box-container">
  <div className="box offer">
      <h3>become a tutor</h3>
      <p>
      Becoming a tutor on our online learning platform opens the door to a rewarding and impactful experience.
      </p>
      <Link to="/register"className="inline-btn"> get started</Link>
    </div>
  </div>
  <div className="box-container">
      {
        teachers.map((ele)=>{
          return <Teacherslist details={ele}/>
        })
      }
  </div>
</section>
   </>
  )
}
















































export default Teachers
