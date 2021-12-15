import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import FormLogin from '../components/FormLogin'


const Login = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='AREA DO CLIENTE.' text='ENTRE E CONSULTE INFORMAÇÕES COMO FATURAS E CONSUMO.' />
            <FormLogin />
            <Footer/>
        </div>
    )
}

export default Login
