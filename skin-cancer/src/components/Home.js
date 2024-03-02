 import React from 'react'
 import "./Home.css";

const Home = () => {
  return (
    <main className="hero ">
        <div className="hero-content">
            <h1 className="hero-heading">Instant Skin Cancer Detection </h1>
            <p className="hero-para">Take a Photo, Know Your Risk !</p>
            <p className="hero-second-para">Capture, Detect, Shield: DigiDerma's Instant Skin Cancer Insight</p>
            <div className="hero-button"> 
            <button className="hero-btn" > Try DigiDerma</button>
            </div>
         </div>

        <div className="hero-image">
        <img src="/images/hero-section.png" alt="hero-section-img" />
        </div>
    </main>
  )
}

export default Home