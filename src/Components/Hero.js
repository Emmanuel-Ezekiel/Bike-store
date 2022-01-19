import React, { useRef, useEffect } from 'react'
import lottie from 'lottie-web'
import { IoIosSearch } from 'react-icons/io'
import Dot from '../Group 10.png'

const Hero = () => {
    
    // const container = useRef(null)

//     useEffect(() => {
//         lottie.loadAnimation({
//         container: container.current, 
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         path: 'https://assets3.lottiefiles.com/packages/lf20_f363x44a.json'
// });
//     }, [])

    return (
        <div>
            <section className="hero">
                <div className="hero-center">
                    <article className="hero-info">
                        <h1>Your Bike <br /> Electric Update</h1>
                        <p> Dummy text progress, and affordable healthcare, accessible on mobile and online for everyone</p>
                        <div className="search">
                             < IoIosSearch />
                             <input type='text' name="find" />
                             <button>find</button>
                        </div>
                    </article>
                    <article className="hero-images">
                        {/* <div className="container" ref={container}></div> */}
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Hero
