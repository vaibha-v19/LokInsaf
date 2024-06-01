import React from 'react'
import photo1 from '../img/pic3.png'
import Explore from './Explore'
import Navbar from './Navbar'
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
    <Navbar/>
      <div className='landingpage'>
        <div className="heading">
          <h1>Your Gateway to </h1>
          <h1><span>Legal</span> Excellence</h1>
          <h4 style={{ color:"black"}}> - Connecting the legal world for a more accessible future.. </h4>
          <br />

          <Link to="/Expo"> <button className="btn btn-primary " >Explore</button></Link>
        </div>
        <div className="img">
          <img src={photo1} alt="photo" style={{ width: "500px", margin: "70px 100px", backgroundColor:"white"}} />
        </div>
      </div>
      <div className="box" style={{display:'flex',justifyContent:"center"}}>
        <div className="con">
          <h1 style={{fontWeight:"500"}}>Why Us?</h1>
          <h3 style={{paddingTop:"20px",paddingBottom:"40px"}}>"Our e-portal is your gateway to legal excellence. We offer top-rated content and cutting-edge technology to streamline case management. Whether you're a seasoned expert or a beginner, our community-driven platform ensures access to justice, making legal services more accessible, transparent, and efficient for all."</h3>
         
        </div>
        </div>
        <Explore/>
    </>
  )
}
