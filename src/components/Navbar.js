
//navbar
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container py-2">
                    <Link className="navbar-brand" to="/">Digiderma</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse align-middle" id="navbarNav">
                        <ul className="navbar-nav ms-auto nav_ul align-items-center">
                            
                            <li className="nav-item">
                                <Link className={`nav-link ${activeLink === 'home' ? 'active-link' : ''}`} to="/" onClick={() => handleLinkClick('home')}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${activeLink === 'about' ? 'active-link' : ''}`} to="/about" onClick={() => handleLinkClick('about')}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${activeLink === 'services' ? 'active-link' : ''}`} to="/services" onClick={() => handleLinkClick('services')}>Services</Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link className={`nav-link ${activeLink === 'contact' ? 'active-link' : ''}`} to="/contact" onClick={() => handleLinkClick('contact')}>Contact Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Check Skin
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className={`dropdown-item ${activeLink === 'imageuplodepage' ? 'active-link' : ''}`} to="/imageuplodepage" onClick={() => handleLinkClick('imageuplodepage')}>ImageUploadPage</Link></li>
                                </ul>
                            </li>
                            <div className="mx-3">
                                <nav>
                                    <ul className='page'>
                                        <li><Link to="/login" className={`btn1 mx-2 ${activeLink === 'login' ? 'active-link' : ''}`} onClick={() => handleLinkClick('login')}>Login</Link></li>
                                        <li><Link to="/signup" className={`btn2 mx-2 ${activeLink === 'signup' ? 'active-link' : ''}`} onClick={() => handleLinkClick('signup')}>Signup</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            {/* app */}
                            <li className="nav-item">
                                <a href="yourapp.apk" download>
                                     <img src="/images/1053166.png" alt="Download App" className="nav-link blink" style={{ height: '50px', width: '50px' }} />
                                 </a>
                             </li>

                        </ul>
                    </div>
                </div>
            </nav>

            
        </>
    )
}

export default Navbar;




