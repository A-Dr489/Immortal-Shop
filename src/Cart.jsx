import './Cart.css'
import { useOutletContext, useNavigate } from "react-router-dom";
import { useState } from 'react';

function Cart() {
  const context = useOutletContext();
  const navigate = useNavigate();
  let tot = context.shop.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  function handleGoShop() {
    navigate("/Products");
  }

  function handleQuant(e, id) {
    context.setShop((prev) => prev.map((data) => {
      return data.id == id ?  {...data, quantity: Number(e.target.value)} : data;
    }));
  }

  function deleteElement(id) {
      context.setShop((prev) => prev.filter(item => item.id !== id))
  }

  function handlePurchase() {
    window.alert("We have ur ip address 💀")
    context.setShop([]);
  }

    if(context.shop.length == 0) return <div style={{display: 'flex', flexDirection: 'column', alignItems: "center", marginTop: "110px"}}>
      <h1>Nothing is in you shopping cart!</h1>
      <button className='go-to-shopbtn' onClick={handleGoShop}>Go Back To Shopping</button>
    </div>

    return(
        <>
          <div className='daddy-carts'>
            {context.shop.map((data) => {
              return <div className='cart-item'>
                  <div style={{display: 'flex', alignItems: "center"}}>
                    <img src={data.img} width={150}/>
                    <h2>{data.name}</h2>
                  </div>
                  <div>
                    <label htmlFor='Quant' style={{marginRight: "20px", fontSize: "1.6em", fontWeight: "bold"}}>Quantity: {data.quantity}</label>
                    <input name='Quant' type='number' min={1} value={data.quantity} onChange={(e) => handleQuant(e, data.id)} style={{width: "60px", fontSize: "1.6em"}}/>
                  </div>
                  <h1 style={{color: "var(--secondary)"}}>{(data.price * data.quantity).toFixed(2)} $</h1>
                  <button className="del-cartbtn" onClick={() => deleteElement(data.id)}>X</button>
              </div>
            })}
            <h1 style={{marginTop: "75px"}}>Total is: <span style={{color: "var(--secondary)"}}>{tot.toFixed(2)} $</span></h1>
            <button className='purchase-cart' onClick={handlePurchase}>Purchase</button>
          </div>
        </>
    )
}

export default Cart