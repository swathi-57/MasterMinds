import React, { useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


function Contact() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phn,setPhn]=useState('')
  const [msg,setMsg]=useState('')
  const navigate=useNavigate()
  function handleSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:5000/contact', { name,email,phn,msg})
    .then((res)=>{toast.success('request send successfully')
      setName('');
      setEmail('');
      setPhn('');
      setMsg('');

      navigate('/contact')
    })
    .catch((err)=>toast.error('request not send'));
  }
  return (
    <>
    <Header/>
      <section className="contact">
        <div className="row">
          <div className="image">
            <img src="assets/images/contact-img.svg" alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <h3>get in touch</h3>
            <input
              type="text"
              placeholder="enter your name"
              name="name"
              required=""
              maxLength={50}
              className="box"
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="enter your email"
              name="email"
              required=""
              maxLength={50}
              className="box"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="enter your number"
              name="number"
              required=""
              maxLength={50}
              className="box"
              value={phn}
              onChange={(e)=> setPhn(e.target.value)}
            />
            <textarea
              name="msg"
              className="box"
              placeholder="enter your message"
              required=""
              maxLength={1000}
              cols={30}
              rows={10}
              defaultValue={""}
              value={msg}
              onChange={(e)=> setMsg(e.target.value)}
            />
            <button
              type="submit"
              defaultValue="send message"
              className="inline-btn"
            >Submit</button>
          </form>
        </div>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-phone" />
            <h3>phone number</h3>
            <a href="#">123-456-7890</a>
            <a href="#">111-222-3333</a>
          </div>
          <div className="box">
            <i className="fas fa-envelope" />
            <h3>email address</h3>
            <a href="mailto:mittapalliswathi57@gmail.com">mittapalliswathi57@gmail.come</a>
            <a href="mailto:mittapallisathish84@gmail.com">mittapallisathish84@gmail.com@gmail.come</a>
          </div>
          <div className="box">
            <i className="fas fa-map-marker-alt" />
            <h3>office address</h3>
            <a href="#">
              flat no. 1, a-1 building, jogeshwari, mumbai, india - 400104
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
