import React from 'react'
import Header from '../../Components/Header'
import { Link } from 'react-router-dom'
import sir from './sir2.webp'
import logo from './css.jpg'


function Html() {
  return (
    <>
  <Header/>
  <section className="playlist-details">
    <h1 className="heading">Course Details</h1>
    <div className="row">
      <div className="column">
        <div className="thumb">
          <img src={logo} alt="" />
          <span>09 videos</span>
        </div>
      </div>
      <div className="column">
        <div className="tutor">
          <img src={sir} alt="" />
          <div>
            <h3>Tarun Luthra</h3>
          </div>
        </div>
        <div className="details">
          <h3>complete Css tutorial</h3>
          <p>
          This is a beginner’s guide on starting with CSS (Cascading Style Sheets). You will be learning what CSS is, why is this important to you as a web developer, we will talk about the applications of CSS, and then you will get to know the career options as a CSS developer.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="playlist-videos">
    <h1 className="heading">Videos</h1>
    <div className="box-container">
      <Link className="box" to="/cssVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Introduction to CSS (part-01)</h3>
      </Link>
      <Link className="box" to="/cssVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>HTML Basics (part-02)</h3>
      </Link>
      <Link className="box" to="/cssVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Box Model in CSS (part-03)</h3>
      </Link>
      <Link className="box" to="/cssVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Inline and Block elements  (part 04)</h3>
      </Link>
      <Link className="box" to="/cssVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Intermediate in CSS (part 05)</h3>
      </Link>
      <Link className="box" to="/cssVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>SASS in CSS (part 06)</h3>
      </Link>
      <Link className="box" to="/cssVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Transitions and Animations in CSS (part 07)</h3>
      </Link>
      <Link className="box" to="/cssVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Bootstrap in CSS (part 08)</h3>
      </Link>
      <Link className="box" to="/cssVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Fun Section (Advanced) (part 09)</h3>
      </Link>
    </div>
  </section>
</>

  )
}

export default Html;