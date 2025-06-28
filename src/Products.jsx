/* 
  NOTE: THIS IS THE PRODUCTS PAGE
  everything starts from here.
  each individual items we see in the Products page is a <ProductComp />
  And each ProductComp has a navigate to display info of that items, which is /Products/:id (item's name)
  and that path will display <ProductDes /> component after passing big object as a state
  from <ProductComp /> to <ProductDes /> when navigated to it
*/

import './Products.css'
import ProductComp from './ProductComp';

const items = [{
  name: "Sword 1",
  description: "Uniqe double minecraft sword the killed more than billion souls, and way more to come",
  catagory: "Minecraft",
  price: 9.99
}, {
  name: "Sword 2",
  description: "Uniqe double minecraft sword the killed more than billion souls, and way more to come",
  catagory: "Minecraft",
  price: 11.99
}];

function Products() {

    return (
        <>
          <div style={{ display: "flex", justifyContent: "center"}}>
            <div className="daddy-products">
                {items.map((data) => {
                  return <ProductComp id={data.name} name={data.name} description={data.description} catagory={data.catagory} price={data.price}/>
                })}
            </div>
          </div>
        </>
    )
}

export default Products;