import React from 'react'

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
// import { Form } from 'react-router-dom';
import Form from '../components/Form';


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT" text="Lets have a chat. Fill out the form."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact