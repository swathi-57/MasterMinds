
import { Link } from "react-router-dom";
import image from "./user.png";
import logo from './logo.jpg'

function changeMenu() {
  document.querySelector("#menu-btn").onclick = () => {
    let body = document.body;
    let sideBar = document.querySelector(".side-bar");
    sideBar.classList.toggle("active");
    body.classList.toggle("active");
  };
}

function Header() {
  return (
    <>
      <>
        <header className="header">
          <section className="flex">
            <div className="div">
              <h1 className="logo">Master Minds</h1>
              <img src={logo} alt="" className="imageLogo"/>
            </div>
            <div className="icons div">
              <button
                id="menu-btn"
                className="fas fa-bars button"
                onClick={changeMenu}
              />
              <Link to="/login" className="btn">
                Logout
              </Link>
            </div>
            <div className="profile">
              <img src={image} className="image" alt="" />
              <h3 className="name">shaikh anas</h3>
              <p className="role">studen</p>
              <div className="flex-btn">
                <Link to="/login" className="login">
                  login
                </Link>
                <Link to="/register" className="register">
                  register
                </Link>
              </div>
            </div>
          </section>
        </header>
        <div className="side-bar">
          <div id="close-btn">
            <i className="fas fa-times" />
          </div>
          <div className="profile">
            <img src={image} className="image" alt="" />
            <h3 className="name">swathi</h3>
            <p className="role">student</p>
            <Link to="/profile" className="btn">
              view profile
            </Link>
          </div>
          <nav className="navbar">
            <Link to="/home">
              {" "}
              <i className="fas fa-home" />
              <span>home</span>
            </Link>
            <Link to="/about">
              <i className="fas fa-question" />
              <span>about</span>
            </Link>
            <Link to="/courses">
              <i className="fas fa-graduation-cap" />
              <span>courses</span>
            </Link>
            <Link to="/teachers">
              <i className="fas fa-chalkboard-user" />
              <span>teachers</span>
            </Link>
            <Link to="/contact">
              <i className="fas fa-headset" />
              <span>contact us</span>
            </Link>
          </nav>
        </div>
      </>
    </>
  );
}

export default Header;
