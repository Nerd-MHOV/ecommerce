import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='footer-container'>
      <p>Agro & Varas MIRINHO 2001, todos os direitos reservados</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook />
      </p>
    </div>
  )
}

export default Footer