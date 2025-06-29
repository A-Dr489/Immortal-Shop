import { useLocation } from 'react-router-dom';
import './Products.css'
import { useState } from 'react';
import { useOutletContext } from "react-router-dom";

function ProductDes() {
    const location = useLocation();
    const [count, setCount] = useState(1);
    const { data } = location.state || {};
    const context = useOutletContext();
    

    function handleCount(e) {
        if(e.target.value > 0) {
            setCount(e.target.value);
        }
    }

    function handleAdd() {
        try {
            context.setShop((prev) => [...prev, {id: crypto.randomUUID(), name: data.name, price: data.price, img: data.img, catagory: data.catagory, quantity: count}]);
            window.alert(`${data.name} has been added to you shopping cart`);
        } catch(e) {
            window.alert("Something went wrong! " + e);
        }
    }

    if(!data) return <h1>Something is wrong with the data</h1>

    return (
        <>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className='daddy-des'>
                <img src={data.img} style={{width: "400px", border: "3px solid black", padding: "50px", borderRadius: "10px"}}/>
                <div>
                    <h1>{data.name}</h1>
                    <p>This product is a {data.description}</p>
                    <label htmlFor='quantity' style={{fontSize: "1.4em"}}>Quantity:</label> <br />
                    <input name='quantity' type='number' value={count} onChange={handleCount} style={{width: "60px", fontSize: "1.4em"}}/> <br/>
                    <h1>{data.price * count} $</h1>
                    <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
                        <button className='add-cartbtn' onClick={handleAdd}>Add to Cart</button>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default ProductDes;