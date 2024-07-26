import React from 'react'
import Header from '../../Components/Header'
import { Link } from 'react-router-dom'
import sir from './sir8.webp'
import logo from './java.jpg'
function Java() {
  return (
    <>
    <Header/>
  <section className="playlist-details">
    <h1 className="heading">Course Details</h1>
    <div className="row">
      <div className="column">
        <div className="thumb">
          <img src={logo} alt="" />
          <span>12 videos</span>
        </div>
      </div>
      <div className="column">
        <div className="tutor">
          <img src={sir} alt="" />
          <div>
            <h3>Anshuman Singh</h3>
          </div>
        </div>
        <div className="details">
          <h3>complete java tutorial</h3>
          <p>
          Java, as a programming language has been one of the most popular choices among programmers and developers for years. Owing to its versatility, compatibility, robustness, security, object orientedness, Java Programming is the backbone of millions of software applications currently. </p>
        </div>
      </div>
    </div>
  </section>
  <section className="playlist-videos">
    <h1 className="heading">Videos</h1>
    <div className="box-container">
      <Link className="box" to="/javaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Introduction (part-01)</h3>
      </Link>
      <Link className="box" to="/javaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Setup (part-02)</h3>
      </Link>
      <Link className="box" to="/javaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Getting Started (part-03)</h3>
      </Link>
      <Link className="box" to="/javaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Operators & Control Statements  (part 04)</h3>
      </Link>
      <Link className="box" to="/javaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Loops (part 05)</h3>
      </Link>
      <Link className="box" to="/javaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Arrays(part 06)</h3>
      </Link>
      <Link className="box" to="/javaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Strings (part 07)</h3>
      </Link>
      <Link className="box" to="/javaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Functions (part 08)</h3>
      </Link>
      <Link className="box" to="/javaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Multidimensional Arrays (part 09)</h3>
      </Link>
      <Link className="box" to="/javaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Autoboxing Unboxing (part 10)</h3>
      </Link>
      <Link className="box" to="/javaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Collections & Important Libraries (part 11)</h3>
      </Link>
      <Link className="box" to="/javaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Classes & Objects (part 12)</h3>
      </Link>
    </div>
  </section>
</>

  )
}

export default Java