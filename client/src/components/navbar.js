import React from 'react'
import './navbar.css';

function navbar() {
  return (
    <div className='navbar'>
        <div className='announcement'> <b className='green'>Free shipping</b> on all orders above <b className='green'>$20</b></div>
        <div className='navagation'>
        <figure className='logo'>
            <img src='https://le-cdn.hibuwebsites.com/767557674d6e4362acfa088c81c84a89/dms3rep/multi/opt/pennyjuice-logo-462w.png'></img>
        </figure>
        <i className="fa-solid fa-cart-shopping "></i>
        
        <nav>
            <ul className='link-list'>
                <li className='listing' >
                    <a href='#' className='link__hover-effect link__hover-effect--black'></a>
                </li>
                <li className='listing' >
                    <a href='#' className='link__hover-effect link__hover-effect--black'>ABOUT</a>
                </li>
                <li className='listing' >
                    <a href='#' className='link__hover-effect link__hover-effect--black'>SHOP</a>
                </li>
                <li className='listing' >
                    <a href='#' className='link__hover-effect link__hover-effect--black'>CONTACT</a>
                </li>
            </ul>
        </nav>
        </div>
    </div>
  )
}

export default navbar