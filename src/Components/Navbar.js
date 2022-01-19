import React from 'react'
import './style.css'

const Navbar = () => {
    return (
        <>
            <nav className='Nav'>
                <div className='nav-center'>
                    <div className="nav-log">
                        <button>B</button>
                        <h6>eBike</h6>
                    </div>
                    <ul className='nav-links'>
                        <li>
                            <a className="product" href="/product">Product</a>
                        </li>
                        <li>
                            <a href="/bike-type">Bike Type</a>
                        </li>
                        <li>
                            <a href="/about-us">About Us</a>
                        </li>
                        <li>
                            <a href="/testimonial">Testimonials</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
