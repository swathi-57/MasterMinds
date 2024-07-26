import React from 'react'
import Header from '../../Components/Header'
import { Link } from 'react-router-dom'
import sir from './sir4.webp'
import logo from './thumb-4.png'


function Boot() {
  return (
    <>
  <Header/>
  <section className="playlist-details">
    <h1 className="heading">Course Details</h1>
    <div className="row">
      <div className="column">
        <div className="thumb">
          <img src={logo} alt="" />
          <span>10 videos</span>
        </div>
      </div>
      <div className="column">
        <div className="tutor">
          <img src={sir} alt="" />
          <div>
            <h3>Prateek Narang</h3>
          </div>
        </div>
        <div className="details">
          <h3>complete Bootstrap tutorial</h3>
          <p>
          Bootstrap is popular among web designers and developers because it is adaptable and easy to use. Its key advantages are that it is responsive by design, maintains broad browser compatibility, gives consistent design by employing reusable components, and is very easy to use and understand.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="playlist-videos">
    <h1 className="heading">Videos</h1>
    <div className="box-container">
      <Link className="box" to="/bootstrapVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Introduction to Bootstrap (part-01)</h3>
      </Link>
      <Link className="box" to="/bootstrapVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Grid System (part-02)</h3>
      </Link>
      <Link className="box" to="/bootstrapVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Typography (part-03)</h3>
      </Link>
      <Link className="box" to="/bootstrapVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Components  (part 04)</h3>
      </Link>
      <Link className="box" to="/bootstrapVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Utilities (part 05)</h3>
      </Link>
      <Link className="box" to="/bootstrapVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Responsive Design (part 06)</h3>
      </Link>
      <Link className="box" to="/bootstrapVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>JavaScript Plugins (part 07)</h3>
      </Link>
      <Link className="box" to="/bootstrapVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Customization (part 08)</h3>
      </Link>
      <Link className="box" to="/bootstrapVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Icons (Advanced) (part 09)</h3>
      </Link>
      <Link className="box" to="/bootstrapVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Helpers (Advanced) (part 10)</h3>
      </Link>
    </div>
  </section>
</>

  )
}

export default Boot;