import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
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
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Check Skin
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <li><Link className="dropdown-item" to="/imageuplodepage">ImageUploadPage</Link></li>


                                   
                                </ul>
                            </li>
                            <div className="mx-3">
                            
                                       <nav >
                                          <ul className='page'>
                                             <li><Link to="/login" className="btn1 mx-2">Login</Link></li>
                                             <li><Link to="/signup"  className="btn2 mx-2">Signup</Link></li>
                                            </ul>
                                         </nav>

                            </div>
                            {/* <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                            </div> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar