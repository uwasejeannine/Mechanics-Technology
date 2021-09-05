import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Button from '@restart/ui/esm/Button';
import image from  './Images/transmision-removebg-preview.png'
import image2 from  './Images/care4-removebg-preview.png'
import image3 from  './Images/care5.jpeg'
import image4 from  './Images/care3.jpeg'
import image5 from  './Images/bmw x .jpeg'
import image6 from  './Images/battery.jpeg'
import image7 from  './Images/bic-removebg-preview.png'
import image8 from  './Images/mirror-removebg-preview.png'


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Different car engine!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
              src={image}
              text='Engine And Transmission Repair'
              label='Add to cart'
              path='/Services'
            />
            <CardItem
              src={image2}
              text='Brake Service And Repair'
              label='Add to cart'
              path='/Services'
            />
            <CardItem
              src={image6}
              text='Batteries And Charging Systems'
              label='Add to cart'
              path='/Services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image3}
              text='Tires/Wheels Sales And Service'
              label='Add to cart '
              path='/Services'
            />
            <CardItem
              src={image4}
              text='Heating And AC Repairs'
              label='Add to cart'
              path='/Services'
            />
            <CardItem
              src={image5}
              text='Batteries And Charging Systems'
              label='Add to cart'
              path='/Services'
            />
          </ul>
          <ul className='cards__items'>

            <CardItem
              src={image7}
              text='Engine And Transmission Repair'
              label='Add to cart'
              path='/Services'
            />
            <CardItem
              src={image8}
              text='Brake Service And Repair'
              label='Add to cart'
              path='/Services'
            />
            <CardItem
              src={image6}
              text='Batteries And Charging Systems'
              label='Add to cart'
              path='/Services'
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
