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

  function handleCart() {
    navigate('/Cart')
  }

  return (
    <>
      <nav className='daddy-Nav'>
        <h1 className='headers'>Immortal Shopping</h1>
        <img src={ez} width={55} style={{border: "2px solid black", borderRadius: "10px", boxShadow: "0px 3px 4px black"}}/>
        <div className='nav-btns-handle'>
          <button className='nav-btns' onClick={handleHome}>Home</button>
          <button className='nav-btns' onClick={handleProducts}>Products</button>
          <button className='nav-cart' onClick={handleCart}>
            <div style={{display: "flex", gap: '10px', alignItems: "center"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
              <span>1</span>
            </div>
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Teleport