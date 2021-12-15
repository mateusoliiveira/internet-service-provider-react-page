import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './NavbarStyles.css'
import {FaBars, FaTimes} from 'react-icons/fa'


const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
        const changeColor =() => {
            if(window.scrollY >= 100) {
                setColor(true)
            } else {
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
           <Link to='/'><h1>SPEEDFIBER</h1></Link> 
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li>
                   <Link to='/'>Home</Link>
               </li>
               <li>
                   <Link to='/pricing'>Planos</Link>
               </li>
               <li>
                   <Link to='/about'>Sobre</Link>
               </li>
               <li>
                   <Link to='/login' style={{fontWeight: 'bolder', border: '1px solid white', padding: '5px 15px 5px 15px'}}>Área do Cliente</Link>
               </li>
           </ul>
           <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
               
           </div>
        </div>
    )
}

export default Navbar
