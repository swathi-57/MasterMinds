
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
import About from './pages/About'
import JsVideo from './pages/Js'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Profile from './pages/Profile'
import TeacherProfile from './pages/TeacherProfile'
import Teachers from './pages/Teachers'
import Update from './pages/Update'
import WatchVideo from './pages/Html'
import CssVideo from './pages/Css'
import Register from './pages/Register'
import Html from './Playlists/htplaylist/Html'
import Css from './Playlists/csplaylist/Css'
import Js from './Playlists/jsplaylist/Js'
import BootVideo from './pages/Bootstrap'
import Dsa from './Playlists/dsaplaylist/Dsa'
import Boot from './Playlists/bootplaylist/Boot'
import Node from './Playlists/nodejsplaylist/Node'
import DsaVideo from './pages/Dsa'
import MysqlVideo from './pages/Mysql'
import NodeVideo from './pages/Nodejs'
import JavaVideo from './pages/Java'
import ReactVideo from './pages/React'
import Java from './Playlists/javaplaylist/Java'
import Mysql from './Playlists/mysqlplaylist/Mysql'
import React from './Playlists/reactplaylist/React'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/reactVideo" element={<ReactVideo/>}></Route>
        <Route path="/nodejsVideo" element={<NodeVideo/>}></Route>
        <Route path="/bootstrapVideo" element={<BootVideo/>}></Route>
        <Route path="/javaVideo" element={<JavaVideo/>}></Route>
        <Route path="/mysqlVideo" element={<MysqlVideo/>}></Route>
        <Route path="/dsaVideo" element={<DsaVideo/>}></Route>
        <Route path="/cssVideo" element={<CssVideo/>}></Route>
        <Route path="/jsVideo" element={<JsVideo/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/watchvideo" element={<WatchVideo/>}></Route>
        <Route path="/update" element={<Update/>}></Route>
        <Route path="/teachers" element={<Teachers/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/teacherprofile" element={<TeacherProfile/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/home/htmlplaylist" element={<Html/>}></Route>
        <Route path="/home/cssplaylist" element={<Css/>}></Route>
        <Route path="/home/jsplaylist" element={<Js/>}></Route>
        <Route path="/home/bootstrapplaylist" element={<Boot/>}></Route>
        <Route path="/home/nodejsplaylist" element={<Node/>}></Route>
        <Route path="/home/dsaplaylist" element={<Dsa/>}></Route>
        <Route path="/home/javaplaylist" element={<Java/>}></Route>
        <Route path="/home/mysqlplaylist" element={<Mysql/>}></Route>
        <Route path="/home/reactplaylist" element={<React/>}></Route>
        <Route path="/courses/htmlplaylist" element={<Html/>}></Route>
        <Route path="/courses/cssplaylist" element={<Css/>}></Route>
        <Route path="/courses/jsplaylist" element={<Js/>}></Route>
        <Route path="/courses/bootstrapplaylist" element={<Boot/>}></Route>
        <Route path="/courses/nodejsplaylist" element={<Node/>}></Route>
        <Route path="/courses/dsaplaylist" element={<Dsa/>}></Route>
        <Route path="/courses/javaplaylist" element={<Java/>}></Route>
        <Route path="/courses/mysqlplaylist" element={<Mysql/>}></Route>
        <Route path="/courses/reactplaylist" element={<React/>}></Route>
      </Routes>
    </div>
  )
}

export default App
