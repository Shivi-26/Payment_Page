import React from 'react';
import '../App.css';
import img1 from '../images/key.png'
import img2 from '../images/LOGO.png'

function Navbar() {
  return (
    <nav className="navbar">
      <img src={img2} alt="" height={30} width={100} className='logo'/>
      <div className='courses'>
        <label>Courses</label>
        <select className='crs'></select>
        <label className='prg'>Programs</label>
        <select className='crs'></select>
      </div>
      <div className='right'>
        <img src={img1} alt="" className='search' />
        <button className='btn'>Log in</button>
        <button className='btn1'>JOIN NOW</button>
      </div>
    </nav>
  );
}

export default Navbar;
