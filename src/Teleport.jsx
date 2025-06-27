import { useState } from 'react'
import './App.css'
import ez from './assets/logoShop.png';
import { Outlet, useNavigate } from 'react-router-dom';

function Teleport() {
  const navigate = useNavigate();

  function handleHome() {
    navigate('/Home');
  }
  
  function handleProducts() {
    navigate('/Products');
  }

  return (
    <>
      <nav className='daddy-Nav'>
        <h1 className='headers'>Immortal Shopping</h1>
        <img src={ez} width={55} style={{border: "2px solid black", borderRadius: "10px", boxShadow: "0px 3px 4px black"}}/>
        <div className='nav-btns-handle'>
          <button className='nav-btns' onClick={handleHome}>Home</button>
          <button className='nav-btns' onClick={handleProducts}>Products</button>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Teleport