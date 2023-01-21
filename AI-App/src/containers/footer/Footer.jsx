import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo' />
          <p>Crechterwoord K12 182 DK. All rights reserved</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Social Meida</p>
          <p>Overons</p>
          <p>SOcial Media</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy & Police</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Crechterwood K12 182 DK</p>
          <p>Phone Number:</p>
          <p>infoAI@gmail.com</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>2021 GPT3. All rights reserved</p>
      </div>

    </div>
  )
}

export default Footer