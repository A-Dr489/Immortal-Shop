import { useNavigate } from 'react-router-dom';
import './Products.css'
import ez from './assets/logoShop.png';
import { useOutletContext } from "react-router-dom";

function ProductComp({ name, img, catagory, description, price }) {
    const navigate = useNavigate();
    const context = useOutletContext();
    

    function handleImg() {
        let info = {
            name: name,
            catagory: catagory,
            description: description,
            price: price,
            img: ez
        }

        navigate(`/Products/${name}`, {state: { data: info}});
    }

    function handleAddTo() {
      try {
            context.setShop((prev) => [...prev, {id: crypto.randomUUID(), name: name, price: price, img: ez, catagory: catagory, quantity: 1}]);
            window.alert(`${name} has been added to you shopping cart`);
        } catch(e) {
            window.alert("Something went wrong! " + e);
        }
    }

    return (
        <>
          <div className='daddy-productcomp'>
            <img src={ez} onClick={handleImg} style={{width: "200px", cursor: "pointer"}}/>
            <h1 style={{margin: "0 0 10px 0"}}>{name}</h1>
            <h2 style={{margin: "10px 0 0 0", color: "white"}}>{catagory}</h2>
            <h1 style={{color: "white"}}>{price} $</h1>
            <button className='add-cartbtn' onClick={handleAddTo}>Add To Cart</button>
          </div>
        </>
    )
}

export default ProductComp;