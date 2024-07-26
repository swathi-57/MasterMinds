
import React from 'react'
import image from '../Components/user.png'
import Header from '../Components/Header'

function Profile() {
  return (
    <>
    <Header/>
    <section className="user-profile">
  <h1 className="heading">your profile</h1>
  <div className="info">
    <div className="user">
      <img src={image} alt="" />
      <h3>Swathi</h3>
      <p>student</p>
      {/* <Link to="/update" className="inline-btn">
        update profile
      </Link> */}
      <h1>Enrolled courses: <p>Html, Css, Java</p></h1>
    </div>
    <div className="box-container">
      <div className="box">
        <div className="flex">
          <i className="fas fa-heart" />
          <div>
            <span>33</span>
            <p>videos liked</p>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="flex">
          <i className="fas fa-comment" />
          <div>
            <span>12</span>
            <p>videos comments</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Profile
