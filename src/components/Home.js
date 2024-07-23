import React from 'react'
 import "./Home.css";


const Home = () => {
  return (
    <>
    <div className="home">
    <main className="hero ">
        <div className="hero-content">
            <h1 className="hero-heading">Instant Skin Disease Detection </h1>
            <p className="hero-para">Take a Photo, Know Your Risk !</p>
            <p className="hero-second-para">Capture, Detect, Shield: DigiDerma's Instant Skin Disease Insight</p>
            <div className="hero-button"> 
            <button className="hero-btn" > Try DigiDerma</button>
            </div>
         </div>

        <div className="hero-image">
        <img src="/images/hero-section.png" alt="hero-section-img" />
        </div>
    </main>

    {/* benifitsection */}

    <main className='Benifit'>
        <div className='Benifit-Section'>
            <div className='First-Benifit'>
            <h3 className='heading'>Early Detection Saves Lives</h3>
            <p className='para'>Empower yourself with timely information, potentially saving lives through early intervention.</p>
            </div>

            <div className='Second-Benifit'>
            <h3 className='heading'>Swift Checks</h3>
            <p className='para'>Swiftly upload skin photos from the comfort of your home for hassle-free assessments.</p>
            </div>

            <div className='Third-Benifit'>
            <h3 className='heading'> User-Friendly Interface</h3>
            <p className='b-para'>Our user-friendly design ensures that individuals of all technological backgrounds can easily navigate and utilize the features of Digi_Derma. Your health is our priority, and we make sure the process is as straightforward as possible</p>   
            </div>

        </div>

    </main>
          
    </div>
    {/* review section */}
    <header>
    <div class="container1">
    <div class="container__left1">
      <h1 className='reviewheading1'>Read what our users love about us</h1>
      <p>
      People love Digiderma because it offers a convenient and efficient way to monitor their skin health, combining cutting-edge technology with a user-friendly experience. The quick and accurate results, along with personalized insights, make Digiderma a trusted ally in skin cancer prevention.
      </p>
      <button>Read more reviews</button>
    </div>
    <div className="container__right1">
      <div className="card1">
        <img src="images/pic-1.jpg" alt="user" />
        <div className="card__content1">
          <span><i className="ri-double-quotes-l"></i></span>
          <div className="card__details1">
            <p>
            Digiderma saved my time  with its quick and accurate skin disease detection. The seamless upload process and instant results literally saves many lives.
            </p>
            <p className='review1'>- Marnus Stephen</p>
          </div>
        </div>
      </div>
      <div class="card1">
        <img src="images/pic-2.jpeg" alt="user" />
        <div class="card__content1">
          <span><i class="ri-double-quotes-l"></i></span>
          <div class="card__details1">
            <p>
            I was skeptical at first, but Digiderma exceeded my expectations. Its user-friendly interface and reliable assessments make it a go-to tool for anyone .
            </p>
            <p className='review1'> - Andrew Jettpace</p>
          </div>
        </div>
      </div>
      <div class="card1">
        <img src="images/pic-3.jpg" alt="user" />
        <div class="card__content1">
          <span><i class="ri-double-quotes-l"></i></span>
          <div class="card__details1">
            <p>
            "Digiderma's innovative approach to skin disease screening is a game-changer. 
            </p>
            <p className='review1'>- Stacy Stone</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </header>

  {/* main cta */}
  <main className="MainCta ">
          <div className="hero-content">
              <p className="MainCtapara">Snap, check, and stay ahead with DigiDerma!  </p>
             
            
             
              <div className="MainCtabutton"> 
              <button className="Ctabtn" > Try DigiDerma</button>
              </div>
           </div>
  
          <div className="hero-image">
          {/* <img src="" /> */}
          </div>
      </main>
    </>
  )
}

export default Home