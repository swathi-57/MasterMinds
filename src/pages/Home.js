import {Link} from "react-router-dom"
import Header from "../Components/Header"
import axios from "axios"
import { useEffect, useState } from "react"


function Home() {

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/courses')
    .then((course)=> setCourses(course.data))
    .catch((err)=>console.log(err))
  });
  return (
  <>
  <Header/>
  <section className="home-grid">
    <h1 className="heading">quick options</h1>
    <div className="box-container">
      <div className="box">
        <h3 className="title">Features</h3>
        <div className="flex">
        <Link to="/home"><i className="fa-solid fa-chart-simple" />
            <span>Performance</span></Link>
          <Link to="/home"><i className="fa-solid fa-phone" />
            <span>Tech Support</span></Link>
          <Link to="/home" > <i className="fa-solid fa-calendar-days"/>
            <span>Events</span></Link>
          <Link to="/home" > <i className="fa-solid fa-desktop"/>
            <span>Courses</span></Link>
          <Link to="/home" ><i className="fa-solid fa-database"/>
            <span>Database</span></Link>
          <Link to="/home"><i className="fa-solid fa-lock"/>
            <span>Security</span></Link>
          <Link to="/home"><i className="fas fa-cog" />
            <span>Tools</span></Link>
        </div>
      </div>
      <div className="box">
        <h3 className="title">popular topics</h3>
        <div className="flex">
        <Link to="/home"> <i className="fab fa-html5" />
            <span>HTML</span></Link>
          <Link to="/home"><i className="fab fa-css3" />
            <span>CSS</span></Link>
          <Link to="/home"> <i className="fab fa-js" />
            <span>javascript</span></Link>
          <Link to="/home"><i className="fab fa-react" />
            <span>react</span></Link>
          <Link to="/home"><i className="fab fa-php" />
            <span>PHP</span></Link>
            <Link to="/home"><i className="fa-brands fa-node"/>
            <span>Node js</span></Link>
          
          <Link to="/home"><i className="fab fa-bootstrap" />
            <span>bootstrap</span></Link>
            <Link to="/home"><i className="fa-solid fa-code"/>
            <span>Datastructures(DSA)</span></Link>
        </div>
      </div>
      <div className="box">
        <h3 className="title">become a tutor</h3>
        <p className="tutor">
        Becoming a tutor on our online learning platform opens the door to a rewarding and impactful experience. 
        </p>
        <Link to="/register" className="inline-btn">get started</Link>
      </div>
    </div>
  </section>
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
                  <Link  to={course.path} className="inline-btn">
                    Enroll now
                  </Link>
                </div>
      })
    }
  </div>
    <div className="more-btn">
    <Link to="/courses" className="inline-btn">view all courses</Link>
    </div>
  </section>
</>

  )
}

export default Home
