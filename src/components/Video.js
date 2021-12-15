import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import spaceVideo from '../assets/space.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>SUA CONEXÃO FIBRA.</h1>
                <p>PREÇOS FIXOS, SEM SUSTO NA MENSALIDADE.</p>
                <div>
                    <Link to='/pricing' className='btn'>Planos</Link>
                    <Link to='/contact' className='btn btn-light'>Assinar</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
