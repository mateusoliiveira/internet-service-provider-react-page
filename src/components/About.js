import React from 'react'
import './AboutStyles.css'

import {Link} from 'react-router-dom'

import Fiber from '../assets/fiber.jpg'
import Cable from '../assets/cable.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Conheça a gente!</h1>
                <p>Somos uma empresa totalmente digital, nascida do propósito de oferecer soluções completas para nossos clientes.</p>
                <Link to='/contact'><button className='btn'>Assine já</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Fiber} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Cable} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
