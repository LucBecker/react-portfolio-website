import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/lucas-becker-712237169/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/LucBecker' target="_blank"><FaGithub/></a>
        <a href='https://www.instagram.com/lucass_becker/' target="_blank"><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocials