import { useNavigate } from 'react-router-dom';
import './Products.css'
import ez from './assets/logoShop.png';

function ProductComp({ name, img, catagory, description, price }) {
    const navigate = useNavigate();

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

    return (
        <>
          <div className='daddy-productcomp'>
            <img src={ez} onClick={handleImg} style={{width: "200px", cursor: "pointer"}}/>
            <h1 style={{margin: "0 0 10px 0"}}>{name}</h1>
            <h2 style={{margin: "10px 0 0 0", color: "white"}}>{catagory}</h2>
            <h1 style={{color: "white"}}>{price} $</h1>
            <button className='add-cartbtn'>Add To Cart</button>
          </div>
        </>
    )
}

export default ProductComp;