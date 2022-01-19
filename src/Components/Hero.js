import React from 'react'
// import Lottie from 'react-lottie'
import lottie from 'lottie-web'
import { IoIosSearch } from 'react-icons/io'
import { BsArrowLeft } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
import Dot from '../Group 10.png'
import data from './57535-helmet-requirement.json'
import rider from './60019-adidas-rider.json'
import Bike from '../csm_ghost-bikes-e-square-trekking-universal-u-nightblue-blue-45_503566db8a 1.png'
import Other from '../eZesty LTD Ultimate D041 (1)_(1) 2.png'
import BikeImg from '../preview 1.png'

const Hero = () => {

    // const defaultOptions = {
    //     loop:true,
    //     autoplay:true,
    //     animationData: data,
    //     rendererSettings: {
    //         preserveAspectRatio: "xMidYMid slice"
    //     },
    // }
    
    const animationContainer = React.createRef()

    React.useEffect(() => {
        lottie.loadAnimation({
        container: animationContainer.current, 
        animationData: data,
      });
    }, [])

    const riderContainer = React.createRef()

    React.useEffect(() => {
        lottie.loadAnimation({
        container: riderContainer.current, 
        animationData: rider,
    });
    }, [])

    return (
        <div>
            <section className="hero">
                <div className="hero-center">
                    <img src={Dot} alt="" />
                    <article className="hero-info">
                        <h1>Your Bike <br /> Electric Update</h1>
                        <p> Dummy text progress, and affordable <br /> healthcare, accessible on mobile and online <br /> for everyone</p>
                        <div className="search">
                            <span> < IoIosSearch /></span>
                             <input type='text' name="find" placeholder="Search bike or anything" />
                             <button>find</button>
                        </div>
                    </article>
                    <article className="hero-images">
                        <div width="411px" height="411px" className="animation" ref={animationContainer}/>
                    </article>
                </div>
            </section>
            <section className='bike'>
                <div className="bike-center">
                    <div className="bike-card">
                        <h3> Universal eBike kit</h3>
                        <img src={Bike} alt="" />
                        <div className="line"></div>
                        <div className="bike-price">
                            <div className="price">
                                <p>Price</p>
                                <h2>$750.00</h2>
                            </div>
                            <button>Order</button>
                        </div>
                    </div>
                    <div className="bike-card">
                        <h3> Brampoton eBike kit</h3>
                        <img src={Bike} alt="" />
                        <div className="line"></div>
                        <div className="bike-price">
                            <div className="price">
                                <p>Price</p>
                                <h2>$750.00</h2>
                            </div>
                            <button>Order</button>
                        </div>
                    </div>
                    <div className="bike-card">
                        <h3> Additional eBike kit</h3>
                        <img src={Bike} alt="" />
                        <div className="line"></div>
                        <div className="bike-price">
                            <div className="price">
                                <p>Price</p>
                                <h2>$250.00</h2>
                            </div>
                            <button>Order</button>
                        </div>
                    </div>
                </div>
                <div className="arrow">
                    <span className="left">< BsArrowLeft/></span>
                    <span className="right">< BsArrowRight/></span>
                </div>
            </section>
            <section className='Types'>
                <p>Other Type Of Bikes</p>
                <div className="bikes-center"> 
                    <div className="bike-type">
                        <div className="other-card first">
                            <img src={Other} alt="" />
                        </div>
                        <p className='first-bike'>Hybrid Bikes</p>
                    </div>
                    <div className="bike-type">
                        <div className="other-card">
                            <img src={Other} alt="" />
                        </div>
                        <p>Fixies Bikes</p>
                    </div>
                    <div className="bike-type">
                        <div className="other-card">
                            <img src={Other} alt="" />
                        </div>
                        <p>Folding Bikes</p>
                    </div>
                    <div className="bike-type">
                        <div className="other-card">
                            <img src={Other} alt="" />
                        </div>
                        <p>Mount Bikes</p>
                    </div>
                    <div className="bike-type">
                        <div className="other-card">
                            <img src={Other} alt="" />
                        </div>
                        <p>City Bikes</p>
                    </div>
                </div>
            </section>
            <section className='hero'>
                <div className="hero-center">
                     <div className="bike-card">
                        <div width="411px" height="411px" className="rider-animation" ref={riderContainer}/>
                        <div className="lines"></div>
                        <div className="bike-price">
                            <div className="price">
                                <p>Price</p>
                                <h2>$750.00</h2>
                            </div>
                            <button>Order</button>
                        </div>
                    </div>

                    <article className="hero-more">
                        <h1>Hybrid Bikes</h1>
                        <p> Dummy text progress, and affordable healthcare, <br /> accessible on mobile and online  for everyone. To us, its <br /> not just work. we take pride <br /> in the solution we deliver   </p>
                        <div className="more-info">
                             <button>Learn more</button>
                        </div>
                    </article>
                </div>
            </section>

            <section className="hero">
                <div className="hero-preview">
                    <h1>What our customer are saying</h1>
                    <div className="preview-line"></div>
                    <div className="preview">
                        <div className="preview-image">
                            <div className="img">
                                <img src={BikeImg} alt="" />
                                <h2>Edward Newgate</h2>
                                <p>Pro-Cycler</p>
                            </div>
                            <div className="review">
                                <p>Dummy Text patient engagement app and <br />
                                web portal allow you to access information <br /> instantaneously (no tedeous form, long calls, <br />
                                or administrative hassle) and securely”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
