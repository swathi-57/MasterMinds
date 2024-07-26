import React from 'react'
import Header from '../../Components/Header'
import { Link } from 'react-router-dom'
import sir from './mrinal_bhattacharya.webp'
import logo from './logo.jpg'


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
          <span>06 videos</span>
        </div>
      </div>
      <div className="column">
        <div className="tutor">
          <img src={sir} alt="" />
          <div>
            <h3>mrinal bhatacharya</h3>
          </div>
        </div>
        <div className="details">
          <h3>complete HTML tutorial</h3>
          <p>
          HTML, also known as Hyper Text Markup Language is the standard markup language used to create web pages all over the internet. It can be referred to as the skeleton of web content as it is used to define the structure and the meaning of the content.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="playlist-videos">
    <h1 className="heading">Videos</h1>
    <div className="box-container">
      <Link className="box" to="/watchvideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Introduction to html (part-01)</h3>
      </Link>
      <Link className="box" to="/watchvideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Excecuting Html programs (part-02)</h3>
      </Link>
      <Link className="box" to="/watchvideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Hide extensions (part-03)</h3>
      </Link>
      <Link className="box" to="/watchvideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Heading tags (part 04)</h3>
      </Link>
      <Link className="box" to="/watchvideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Paragraph tags (part 05)</h3>
      </Link>
      <Link className="box" to="/watchvideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Text formating tags (part 06)</h3>
      </Link>
    </div>
  </section>
</>

  )
}

export default Html;