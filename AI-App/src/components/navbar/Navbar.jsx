import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';


const Menu = () => (
    <>
    <p className='un'><a href='#home'>Home</a></p>
    <p className='un'><a href='#wgpt3'>What is GPT3</a></p>
    <p className='un'><a href='#possibility'>OPen AI</a></p>
    <p className='un'><a href='#features'>Case studies</a></p>
    </>
)


function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);

  return ( 

    <header> 
        <div className='gpt3__navbar' id='navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'></div>
                <img src={logo} alt='logo' className='logo-img' />
            </div>
            <div className='gpt3__navbar-links_container'>
            <Menu />
            </div>
            <div className='gpt3__navbar-sign'>
                <p>Sign in</p>
                <button type='buttton'>Sing up</button>
            </div>
            <div className='gpt3__navbar-menu'>
                {toggleMenu 
                    ? <RiCloseLine color='#fff' size={26} onClick={() => setToggleMenu(false)} /> 
                    : <RiMenu3Line color='#fff' size={26} onClick={() => setToggleMenu(true)} /> 
                }
                {toggleMenu && (
                    <div className='gpt3__navbar-menu-container scale-up-center'>
                        <div className='gpt3__navbar-menu_container'> 
                        <Menu />
                        <div className='gpt3__navbar-menu_container-links-sign'>
                            <p>Sign in</p>
                            <button type='buttton'>Sing up</button>
                        </div>
                        </div>
                    </div>
                )}
            </div>
    </div>
    </header>
    
  )
}

export default Navbar