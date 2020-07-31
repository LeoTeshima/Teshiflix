import React from 'react'
import Logo from '../../assets/Logo.png'
import './menu.css'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <nav className='Menu'>
            <Link to='/'>
                <img className="Logo" src={Logo} alt='Teshiflix logo' />
            </Link>

            <Button as = {Link} to="/cadastro/video" >
                Novo Video  
            </Button>
        </nav>

    )
}

export default Menu;