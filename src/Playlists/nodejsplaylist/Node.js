import React from 'react'
import Header from '../../Components/Header'
import { Link } from 'react-router-dom'
import sir from './sir5.webp'
import logo from './nodejs.png'
function Node() {
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
            <h3>Jitender Punia</h3>
          </div>
        </div>
        <div className="details">
          <h3>complete Nodejs tutorial</h3>
          <p>
          Node.js has become quite popular since its first release in 2009. The speed and performance of Node.js have given excellent results to big companies like Netflix, NASA, PayPal, LinkedIn, and many others. Node.js offers asynchronous and event-driven architecture, efficiency, reusability, and scalability.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="playlist-videos">
    <h1 className="heading">Videos</h1>
    <div className="box-container">
      <Link className="box" to="/nodejsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Introduction to NodeJS (part-01)</h3>
      </Link>
      <Link className="box" to="/nodejsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Node JS Basics (part-02)</h3>
      </Link>
      <Link className="box" to="/nodejsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Asynchronous Javascript (part-03)</h3>
      </Link>
      <Link className="box" to="/nodejsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Functional programming Advanced  (part 04)</h3>
      </Link>
      <Link className="box" to="/nodejsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Node JS Modules (part 05)</h3>
      </Link>
      <Link className="box" to="/nodejsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Internet and Networking(part 06)</h3>
      </Link>
      <Link className="box" to="/nodejsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Node JS APIs (part 07)</h3>
      </Link>
      <Link className="box" to="/nodejsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Nifty Node JS (part 08)</h3>
      </Link>
      <Link className="box" to="/nodejsVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Testing and Development (part 09)</h3>
      </Link>
    </div>
  </section>
</>

  )
}

export default Node