import React from 'react'
import Header from '../../Components/Header'
import { Link } from 'react-router-dom'
import sir from './sir9.webp'
import logo from './thumb-8.png'
function Mysql() {
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
            <h3>Aditya Jain</h3>
          </div>
        </div>
        <div className="details">
          <h3>complete mysql tutorial</h3>
          <p>
          MySQL is an open-source relational database management system (RDBMS) widely used for managing and organizing data. It was originally developed by MySQL AB, a Swedish company, and is now owned by Oracle Corporation. Here are some key points about MySQL:</p>
        </div>
      </div>
    </div>
  </section>
  <section className="playlist-videos">
    <h1 className="heading">Videos</h1>
    <div className="box-container">
      <Link className="box" to="/mysqlVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Introduction to MySQL (part-01)</h3>
      </Link>
      <Link className="box" to="/mysqlVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Creating Database and Table in MySQL (part-02)</h3>
      </Link>
      <Link className="box" to="/mysqlVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Inserting, Updating and Deleting Data in MySQL (part-03)</h3>
      </Link>
      <Link className="box" to="/mysqlVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Clauses in MySQL  (part 04)</h3>
      </Link>
      <Link className="box" to="/mysqlVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Operators in MySQL (part 05)</h3>
      </Link>
      <Link className="box" to="/mysqlVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>JOINs in MYSQL(part 06)</h3>
      </Link>
      <Link className="box" to="/mysqlVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Functions in MySQL (part 07)</h3>
      </Link>
      <Link className="box" to="/mysqlVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Aggregations in MYSQL (part 08)</h3>
      </Link>
      <Link className="box" to="/mysqlVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Constraints in MYSQL (part 09)</h3>
      </Link>
      <Link className="box" to="/mysqlVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Indexing in MYSQL (part 10)</h3>
      </Link>
      <Link className="box" to="/mysqlVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Indexing in MYSQL (part 11)</h3>
      </Link>
      <Link className="box" to="/mysqlVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Advanced MySQL - 2 (part 12)</h3>
      </Link>
    </div>
  </section>
</>

  )
}

export default Mysql