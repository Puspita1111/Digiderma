import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>DIGIDERM</span></h3>
                            <p>Early detection saves lives. Check your skin health now.
Know your risk. Predict skin cancer with precision.
Empowering prevention through predictive analysis.
Stay ahead of skin cancer. Predict. Prevent. Protect.
Take control of your skin's future. Predict and prevent skin cancer today.</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                            <li className="nav-item">
                                    <a className="" href="/">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="" href="/about">About</a>
                                </li>

                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="" href="/contact">Contact Us</a>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> 123456789</p>
                            <p><i class="fa-solid fa-envelope"></i> digiderma@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> India</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Skin Cancer Prediction</p>
            </div>
        </>
    )
}

export default Footer