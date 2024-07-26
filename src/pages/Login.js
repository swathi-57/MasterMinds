import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  async function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { name, email, password })
      .then((res) => {
        console.log(res);
        if (res.data === "Success") {
          toast.success('Login success')
          navigate("/home");
        }
        else{
          toast.error("Incorrect Password")
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <section class="form-container">
        <form onSubmit={handleSubmit}>
          <h3>login now</h3>
          <p>
            your name <span>*</span>
          </p>
          <input
            type="text"
            placeholder="enter your name"
            className="box form-control"
            name="name"
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
            required
            maxlength="50"
            className="box form-control"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <p>
            your password <span>*</span>
          </p>
          <input
            type="password"
            name="pass"
            placeholder="enter your password"
            required
            maxlength="20"
            class="box form-control"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <div className="App">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
          <div className="signupContainer">
            <p>Doesn't have an account yet?</p>
            <Link to="/signup">Signup</Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
