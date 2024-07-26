
import Header from '../../Components/Header'
import { Link } from 'react-router-dom'
import sir from './sir10.webp'
import logo from './thumb-9.png'
function React() {
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
            <h3>Satya Sai</h3>
          </div>
        </div>
        <div className="details">
          <h3>complete React tutorial</h3>
          <p>
          React.js is one of the most popular JavaScript libraries for building user interfaces and is found in multiple applications, ranging from simple websites to complex single-page applications.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="playlist-videos">
    <h1 className="heading">Videos</h1>
    <div className="box-container">
      <Link className="box" to="/reactVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Introducing react (part-01)</h3>
      </Link>
      <Link className="box" to="/reactVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Setting up React (part-02)</h3>
      </Link>
      <Link className="box" to="/reactVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>React Essentials (part-03)</h3>
      </Link>
      <Link className="box" to="/reactVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>React Components  (part 04)</h3>
      </Link>
      <Link className="box" to="/reactVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Practical use cases (part 05)</h3>
      </Link>
      <Link className="box" to="/reactVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Routing in React (part 06)</h3>
      </Link>
      <Link className="box" to="/reactVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Advanced React (part 07)</h3>
      </Link>
      <Link className="box" to="/reactVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>React Hooks (part 08)</h3>
      </Link>
      <Link className="box" to="/reactVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Redux and State Management (part 09)</h3>
      </Link>
      <Link className="box" to="/reactVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>React Libraries / Frameworks (part 10)</h3>
      </Link>
      <Link className="box" to="/reactVideo">
        <i className="fas fa-play" />
        <img src={logo} alt="" />
        <h3>Miscellaneous (part 11)</h3>
      </Link>
      
    </div>
  </section>
</>

  )
}

export default React