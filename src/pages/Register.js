import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Register() {
  const [name, setName] = useState("");
  const [proff, setProff] = useState("");
  const [subject, setSub] = useState("");
  const [videos,setVideo] = useState("");
  const navigate=useNavigate();
  
  async function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:5000/register', { name,proff,subject,videos})
    .then((res)=>{toast.success('registration successfull')
      navigate('/teachers')
    })
    .catch((err)=>toast.error('unsuccessfull registration'));
  }
  return (
    <>
    <section class="form-container">
      <form onSubmit={handleSubmit}>
        <h3>register now</h3>
        <p>
          your name <span>*</span>
        </p>
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          required=""
          maxLength={50}
          className="box"
          value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
        />
        <p>
          your email <span>*</span>
        </p>
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          required=""
          maxLength={50}
          className="box"
        />
        <p>
          your password <span>*</span>
        </p>
        <input
          type="password"
          name="pass"
          placeholder="enter your password"
          required=""
          maxLength={50}
          className="box"
        />
        <p>
          profession <span>*</span>
        </p>
        <input
          type="text"
          name="c_pass"
          placeholder="Enter profession"
          required=""
          maxLength={50}
          className="box"
          value={proff}
            onChange={(e) => {
              setProff(e.target.value);
            }}
        />
        <p>
          subject <span>*</span>
        </p>
        <input
          type="text"
          name="c_pass"
          placeholder="Enter Subject"
          required=""
          maxLength={50}
          className="box"
          value={subject}
            onChange={(e) => {
              setSub(e.target.value);
            }}
        />
        <p>
          videos <span>*</span>
        </p>
        <input
          type="text"
          name="c_pass"
          placeholder="Enter Subject"
          required=""
          maxLength={50}
          className="box"
          value={videos}
            onChange={(e) => {
              setVideo(e.target.value);
            }}
        />
        <button
          type="submit"
          defaultValue="register new"
          className="btn">Register
        </button>
      </form>
      </section>
    </>
  );
}

export default Register;
