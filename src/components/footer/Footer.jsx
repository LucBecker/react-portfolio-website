import React from 'react'
import './footer.css';
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Nav = () => {
  return (
    <footer>
    <a href='#' className='footer__logo'>Lucas Becker</a>

    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experiências</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#testimonials'>Recomendações</a></li>
      <li><a href='#contact'>Contato</a></li>
    </ul>

    <div className='footer__socials'>
      <a href='https://www.facebook.com/LucasBeckerAndrade'><FaFacebookF/></a>
      <a href='https://www.instagram.com/lucass_becker/'><FiInstagram/></a>
      <a href='https://twitter.com/LksBecker'><FiTwitter/></a>
    </div>

    <div className='footer__copyright'>
      <small>&copy; Lucas Becker. All rights reserved</small>
    </div>
</footer>
  )
}

export default Nav