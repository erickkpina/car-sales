import React, { Component } from 'react';
import { ContactForm } from '../components/ContactForm';
import img from '../assets/img/slider1.jpg';

export class Contacts extends Component {
  render() {
    return (
      <div className='flex flex-col md:flex-row mt-20 p-3'>
        <div className='md:w-1/2 mt-4 md:mt-0'>
          <img src={img} alt='' className='h-full rounded-lg' />
        </div>
        <div className='md:w-1/2 md:mt-0 mt-5'>
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Contacts;