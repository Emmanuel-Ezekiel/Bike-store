import React from 'react';

const Footer = () => {
  return (
    <div>
        <footer className="footer">
            <div className="footer-center">
                <article className="footer-info">
                    <div className="footer-log">
                        <button>B</button>
                        <h6>eBike</h6>
                    </div>
                    <div className="footer-description">
                        <p>
                            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
                            for everyone
                        </p>
                    </div>
                    <div className="copyright">
                        <p>©eBike 2021. All rights reserved</p>
                    </div>
                </article>
                <article className="footer-company">
                    <h1>company</h1>
                    <p>Product</p>
                    <p>Bike Type</p>
                    <p>About Us</p>
                    <p>Contact</p>
                </article>
                <article className="footer-help">
                    <h1>Help</h1>
                    <p>Help Center</p>
                    <p>Contact Support</p>
                    <p>Instructions</p>
                    <p>How it Works</p>
                </article>
            </div>
        </footer>
    </div>
  )
};

export default Footer;
