import React from 'react'
import Header from "../Components/Header"
import { Link } from 'react-router-dom'
import abhi from './image/abhishek.jpeg'
import adhan from './image/adhan.jpg'
import archana from './image/archana.jpeg'
import durga from './image/duraga.jpeg'
import namratha from './image/namratha.jpg'
import prasad from './image/prasad.avif'
function About() {
  return (
    <>
    <Header/>
    <section className="about">
    <div className="row">
      <div className="image">
        <img src="assets/images/about-img.svg" alt="" />
      </div>
      <div className="content">
        <h3>why choose us?</h3>
        <p>
        Choose us for your online learning needs because we offer a comprehensive, user-friendly platform with expertly designed courses tailored to meet diverse educational goals. Our experienced instructors provide engaging, interactive content, ensuring an effective and enjoyable learning experience. With flexible scheduling and 24/7 access, you can learn at your own pace, anytime, anywhere. Join our community and transform your educational journey today!
        </p>
        <Link to='/courses' className="inline-btn">
          our courses
        </Link>
      </div>
    </div>
    <div className="box-container">
      <div className="box">
        <i className="fas fa-graduation-cap" />
        <div>
          <h3>+10k</h3>
          <p>online courses</p>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-user-graduate" />
        <div>
          <h3>+40k</h3>
          <p>brilliant students</p>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-chalkboard-user" />
        <div>
          <h3>+2k</h3>
          <p>expert tutors</p>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-briefcase" />
        <div>
          <h3>100%</h3>
          <p>job placement</p>
        </div>
      </div>
    </div>
  </section>
  <section className="reviews">
    <h1 className="heading">student's reviews</h1>
    <div className="box-container">
      <div className="box">
        <p>
          {" "}
          I have recently completed the ""JavaScript for Beginners"" course in
          Learnify Topics, and I must say it was an exceptional experience. As
          an individual, I found the course refreshing, and it helped me brush
          up on my knowledge of JavaScript.
        </p>
        <div className="student">
          <img src={durga} alt="" />
          <div>
            <h3>Durga Attaluri</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <p>
          I'm thrilled to announce that I have successfully completed the
          JavaScript for Beginners course from Learnify Topics! 🎉 A big thank
          you to the course instructor Mrinal Bhattacharya for their dedication
          and expertise in making this course an excellent
        </p>
        <div className="student">
          <img src={abhi} alt="" />
          <div>
            <h3>abhishek kumar</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <p>
          I recently completed the "Java for Beginners" course offered by
          Learnify Topics, and I must say that it was an outstanding experience.
          Despite being an experienced professional, I found the course to be
          refreshing and it helped me to brush up on my basics.
        </p>
        <div className="student">
          <img src={adhan} alt="" />
          <div>
            <h3>MOHD ADNAN KHAN</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <p>
          I'm happy to share that I've obtained a new certification : JavaScript
          for Beginners from Learnify #javascript #learnify #learnifytopics
          Mrinal Bhattacharya I must say it was an exceptional experience. As an
          experienced professional, I found the
        </p>
        <div className="student">
          <img src={namratha} alt="" />
          <div>
            <h3>Namrata khot</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <p>
          I'm thrilled to announce that I have successfully completed the
          JavaScript for Beginners course from learnify Topics! 🎉 A big thank
          you to the course instructor Mrinal Bhattacharya for their dedication
          and expertise in making this course an excellent
        </p>
        <div className="student">
          <img src={prasad} alt="" />
          <div>
            <h3>Prasad Katta</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <p>
          I recently completed the "Java for Beginners" course offered by Scaler
          Topics, and I must say that it was an outstanding experience. Despite
          being an experienced professional, I found the course to be refreshing
          and it helped me to brush up on my skills.
        </p>
        <div className="student">
          <img src={archana} alt="" />
          <div>
            <h3>Archana Maravi</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <Footer/> */}
</>

  )
}

export default About
