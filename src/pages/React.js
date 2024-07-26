import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

function WatchVideo() {
  return (
    <>
      <Header />
      <>
  <section className="watch-video">
    <div className="video-container">
      <div className="video">
        <video
          src="assets/images/vid-1.mp4"
          controls
          poster="assets/images/thumb-9.png"
          id="video"
        />
      </div>
      <h3 className="title">complete React js tutorial (part 01)</h3>
      <div className="info">
        <p className="date">
          <i className="fas fa-calendar" />
          <span>22-10-2022</span>
        </p>
        <p className="date">
          <i className="fas fa-heart" />
          <span>44 likes</span>
        </p>
      </div>
      <div className="tutor">
        <img src="assets/images/pic-2.jpg" alt="" />
        <div>
          <h3>john deo</h3>
          <span>developer</span>
        </div>
      </div>
      <form action="" method="post" className="flex">
        <Link to="/home/reactplaylist" className="inline-btn">
          view playlist
        </Link>
        <button>
          <i className="far fa-heart" />
          <span>like</span>
        </button>
      </form>
      <p className="description">
      React.js is one of the most popular JavaScript libraries for building user interfaces and is found in multiple applications, ranging from simple websites to complex single-page applications.
      </p>
    </div>
  </section>
  <section className="comments">
    <h1 className="heading">5 comments</h1>
    <form action="" className="add-comment">
      <h3>add comments</h3>
      <textarea
        name="comment_box"
        placeholder="enter your comment"
        required=""
        maxLength={1000}
        cols={30}
        rows={10}
        defaultValue={""}
      />
      <input
        type="submit"
        defaultValue="add comment"
        className="inline-btn"
        name="add_comment"
      />
    </form>
    <h1 className="heading">user comments</h1>
    <div className="box-container">
      <div className="box">
        <div className="user">
          <img src="assets/images/pic-1.jpg" alt="" />
          <div>
            <h3>shaikh anas</h3>
            <span>22-10-2022</span>
          </div>
        </div>
        <div className="comment-box">this is a comment form shaikh anas</div>
        <form action="" className="flex-btn">
          <input
            type="submit"
            defaultValue="edit comment"
            name="edit_comment"
            className="inline-option-btn"
          />
          <input
            type="submit"
            defaultValue="delete comment"
            name="delete_comment"
            className="inline-delete-btn"
          />
        </form>
      </div>
      <div className="box">
        <div className="user">
          <img src="assets/images/pic-2.jpg" alt="" />
          <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
          </div>
        </div>
        <div className="comment-box">awesome tutorial! keep going!</div>
      </div>
      <div className="box">
        <div className="user">
          <img src="assets/images/pic-3.jpg" alt="" />
          <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
          </div>
        </div>
        <div className="comment-box">
          amazing way of teaching! thank you so much!
        </div>
      </div>
      <div className="box">
        <div className="user">
          <img src="assets/images/pic-4.jpg" alt="" />
          <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
          </div>
        </div>
        <div className="comment-box">loved it, thanks for the tutorial!</div>
      </div>
      <div className="box">
        <div className="user">
          <img src="assets/images/pic-5.jpg" alt="" />
          <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
          </div>
        </div>
        <div className="comment-box">
          this is what I have been looking for! thank you so much!
        </div>
      </div>
      <div className="box">
        <div className="user">
          <img src="assets/images/pic-2.jpg" alt="" />
          <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>

          </div>
        </div>
        <div className="comment-box">
          thanks for the tutorial! how to download source code file?
        </div>
      </div>
    </div>
  </section>
</>

</>
  )
}
export default WatchVideo