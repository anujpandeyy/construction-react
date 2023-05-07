import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
  <>
  <div className='contactdiv'>
    <div>
    <h1 className='contacthead'>
      CONTACT US
    </h1>
  </div>
  <div className='form'>
    <label htmlFor="" className='name1'>Name</label>
    <input type="text" name=""  className='name'/>
    <label htmlFor="" className='email1'>Email</label>
    <input type="email" name=""  className='email'/>
    <button className='contactbtn'>Submit</button>
  </div>
  </div>
  </>
  )
}
