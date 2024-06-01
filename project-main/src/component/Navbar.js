// Navbar.js
import Logo from '../img/Logo.png'
import React from 'react';
import LoginPage from './LoginPage';
import Card from './Card';
import SignUp from './SignUp';
import { Link } from "react-router-dom";
// import './Navbar.css';

export default function Navbar() {



    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">~LokInsaaf~</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" to="/home">Home</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link active" to="/expo">Explore</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/support">Support</Link>
                        </li>

                    </ul>

                    <div className='modalCard loginbtn'>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LoginPage">
                            Login
                        </button>
                        <div className="modal  login fade" id="LoginPage" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                           <div className="modal-dialog modal-dialog-centered" style={{minWidth:"500px"}}>
                                <div className="modal-content">
                                    <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close" style={{padding:"30px 40px 0 0 ", height:"", fontSize:"30px"}}></button>
                                    <Card/>
                                </div>
                            </div>
                        </div> 
                        
                    </div>
                </div>
            </div>
        </nav>
    );
}
