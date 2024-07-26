
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Signup() {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:5000/signup', { name,email, password })
    .then((res)=>{toast.success('registration successfull')
      navigate('/home')
    })
    .catch((err)=>toast.error('unsuccessfull registration'));
  }
  return (
    <>
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <h3>Signup now</h3>
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
            placeholder="enter your email"
            className="box form-control"
            value={email}
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p>
            your password <span>*</span>  </p>
          <input
            type="password"
            placeholder="enter your password"
            className="box form-control"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="App">
            <button type="submit" className="btn">Signup</button>
            
          </div>
        </form>
      </section>
    </>
  );
}

export default Signup;
