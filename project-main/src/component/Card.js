import React from "react";
import { useState } from "react";
import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";
export default function Card() {
  const [Car, setCar] = useState(true);

  const handleClick = () => {
    setCar(!Car);
  };

  return (
    <>
      <div>
        {" "}
        {Car ? (
          <div className="column">
            <form action="login" >
              <div className="containerL">
                <div className="headingL">
                  <h1>Choose your category </h1>
                </div>
                <div className="card">
                 
                  <div className="button-container">
                  <div className="column">
                        <div className="button">
                            <button className="btn " onClick={handleClick}>Laywer</button>
                            <button className="btn " onClick={handleClick}>Judge</button>
                                           
                        </div>
                        <div className="button">
                            <button className="btn " onClick={handleClick}>Police</button>
                            <button className="btn " onClick={handleClick}>Other</button>             
                        </div>
    
                    </div>
                    
                  </div>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <LoginPage />
        )}
      </div>
    </>
  );
}
