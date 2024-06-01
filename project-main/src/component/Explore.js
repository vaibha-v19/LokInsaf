import React from 'react'
import { Link } from "react-router-dom";
export default function Explore() {
    return (
        <>

            <div className='explore'>
                <div className="butt">
                    <h3 style={{ textAlign: "center", color: "", fontWeight: "bolder", fontSize: "3rem", margin: "0 0 50px 0" }}>IN WHICH FIELD YOU WANT TO EXPLORE</h3>

                    <Link to="/TextSummarizer">  <button className="btn btn-primary"  >Report Summarizer</button></Link>
                    <button className='btn btn-primary'>Case Tracking</button>
                    <button className='btn btn-primary'>Video Conferencing</button>
                    <button className='btn btn-primary'>Calendar</button>
                    <button className='btn btn-primary'>Client Portals</button>
                    <button className='btn btn-primary'>Multi-language Support</button>
                    <button className='btn btn-primary'>User Support</button>
                </div>
            </div>
            

        </>
    )
}
