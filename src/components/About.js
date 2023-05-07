import React from 'react'
import img2 from '../images/2.jpg'
import './About.css'
export default function About() {
  return (
    <>
    <div className='aboutdiv'>
      <h1 className='abouthead'>
        ABOUT US
      </h1>
      <p className='aboutp'>
      At RadheK, we are a team of skilled construction professionals who are passionate about bringing your vision to life. Whether you're building your dream home, expanding your business, or renovating your space, we have the expertise and experience to get the job done right.
      </p>
      <img src={img2} alt="" className='img2' />
    </div>
    </>
  )
}
