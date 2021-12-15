import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>R$99/mês</h3>
                    <span className='bar'></span>
                    <p className='btc'>100MB</p>
                    <p>Upload 50MB</p>
                    <p>Valor fixo</p>
                    <p>Até 5 dispositivos</p>
                    <p>Sem franquia</p>
                    <Link to='/contact' className='btn'>Assinar</Link>
                </div>
                <div className='card'>
                <h3>R$129/mês</h3>
                    <span className='bar'></span>
                    <p className='btc'>300MB</p>
                    <p>Upload 150MB</p>
                    <p>Valor fixo</p>
                    <p>Até 15 dispositivos</p>
                    <p>Sem franquia</p>
                    <Link to='/contact' className='btn'>Assinar</Link>
                </div>
                <div className='card'>
                <h3>R$149/mês</h3>
                    <span className='bar'></span>
                    <p className='btc'>500MB</p>
                    <p>Upload 250MB</p>
                    <p>Valor fixo</p>
                    <p>Até 25 dispositivos</p>
                    <p>Sem franquia</p>
                    <Link to='/contact' className='btn'>Assinar</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing
