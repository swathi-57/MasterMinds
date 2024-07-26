import React from 'react'
import Header from '../../Components/Header'
import { Link } from 'react-router-dom'
import sir from './sir3.webp'
import logo from './js.png'
function Js() {
  return (
    <>
    <Header/>
  <section className="playlist-details">
    <h1 className="heading">Course Details</h1>
    <div className="row">
      <div className="column">
        <div className="thumb">
          <img src={logo} alt="" />
          <span>11 videos</span>
        </div>
      </div>
      <div className="column">
        <div className="tutor">
          <img src={sir} alt="" />
          <div>
            <h3>Srikanth Varma</h3>
          </div>
        </div>
        <div className="details">
          <h3>complete Js tutorial</h3>
          <p>
          This JavaScript tutorial covers all the important concepts in JavaScript such as operators, loops, functions, OOPs, Asynchronous JS, and much more from the very basics to advanced level. It is best suited for beginners and professionals due to its simple and friendly language. You can follow this tutorial for crystal clear
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="playlist-videos">
    <h1 className="heading">Videos</h1>
    <div className="box-container">
      <Link className="box" to="/jsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Introduction to JavaScript (part-01)</h3>
      </Link>
      <Link className="box" to="/jsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Variables and Datatypes in JavaScript (part-02)</h3>
      </Link>
      <Link className="box" to="/jsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Operators in JavaScript (part-03)</h3>
      </Link>
      <Link className="box" to="/jsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Conditional Flow in JavaScript  (part 04)</h3>
      </Link>
      <Link className="box" to="/jsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Arrays in JavaScript (part 05)</h3>
      </Link>
      <Link className="box" to="/jsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Working with Objects in JavaScript(part 06)</h3>
      </Link>
      <Link className="box" to="/jsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Javascript Classes (part 07)</h3>
      </Link>
      <Link className="box" to="/jsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Async in JavaScript (part 08)</h3>
      </Link>
      <Link className="box" to="/jsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Error Handling in JavaScript (part 09)</h3>
      </Link>
      <Link className="box" to="/jsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>What is JSON? (part 10)</h3>
      </Link>
      <Link className="box" to="/jsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>What is AJAX? (part 11)</h3>
      </Link>
    </div>
  </section>
</>

  )
}

export default Js