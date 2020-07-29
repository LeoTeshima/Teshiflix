import React from 'react'
import Logo from '../../assets/Logo.png'
import './menu.css'
import Button from '../Button'

const Menu = () => {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className="Logo" src={Logo} alt='Teshiflix logo' />
            </a>

            <Button as='a' href="/" >
                Novo Video  
            </Button>
        </nav>

    )
}

export default Menu;