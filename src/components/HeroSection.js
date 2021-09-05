import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './Services'




function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Welcome to MechTech</h1>
      <p>How can we help you?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         Request a mechanic
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Book an appointment
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;







