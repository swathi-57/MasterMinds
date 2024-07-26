import React from 'react'
import Header from '../../Components/Header'
import { Link } from 'react-router-dom'
import sir from './sir6.webp'
import logo from './dsa.jpg'
function Dsa() {
  return (
    <>
    <Header/>
  <section className="playlist-details">
    <h1 className="heading">Course Details</h1>
    <div className="row">
      <div className="column">
        <div className="thumb">
          <img src={logo} alt="" />
          <span>13 videos</span>
        </div>
      </div>
      <div className="column">
        <div className="tutor">
          <img src={sir} alt="" />
          <div>
            <h3>Rahul Janghu</h3>
          </div>
        </div>
        <div className="details">
          <h3>complete Dsa tutorial</h3>
          <p>
          Data Structures are used to organise and store data to use it in an effective way when performing data operations. Learn in-depth about the need & applications of data structures, along with complexity analysis, sorting and searching algorithms.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="playlist-videos">
    <h1 className="heading">Videos</h1>
    <div className="box-container">
      <Link className="box" to="/dsaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>1D Arrays (part-01)</h3>
      </Link>
      <Link className="box" to="/dsaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>2D Arrays (part-02)</h3>
      </Link>
      <Link className="box" to="/dsaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Functions (part-03)</h3>
      </Link>
      <Link className="box" to="/dsaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Binary Search  (part 04)</h3>
      </Link>
      <Link className="box" to="/dsaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Recursion (part 05)</h3>
      </Link>
      <Link className="box" to="/dsaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Stacks(part 06)</h3>
      </Link>
      <Link className="box" to="/dsaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Queues (part 07)</h3>
      </Link>
      <Link className="box" to="/dsaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Linkedlist (part 08)</h3>
      </Link>
      <Link className="box" to="/dsaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Heaps (part 09)</h3>
      </Link>
      <Link className="box" to="/dsaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Hashing (part 10)</h3>
      </Link>
      <Link className="box" to="/dsaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Trees (part 11)</h3>
      </Link>
      <Link className="box" to="/dsaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Graphs (part 12)</h3>
      </Link>
      <Link className="box" to="/dsaVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Sorting (part 13)</h3>
      </Link>
    </div>
  </section>
</>

  )
}

export default Dsa