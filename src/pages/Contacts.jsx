import React, { Component } from 'react';
import { ContactForm } from '../components/ContactForm';
import img from '../assets/img/slider1.jpg';

export class Contacts extends Component {
  render() {
    return (
      <main>

      <div className='flex flex-col md:flex-row md:items-center md:justify-center' >
      <div className='md:w-1/2  '>
          <img src={img} alt='' className='md:h-screen' />
        </div>
        <div className='md:w-1/2 p-3'>
          <ContactForm />
        </div>
      </div>
      </main>
    );
  }
}

export default Contacts;