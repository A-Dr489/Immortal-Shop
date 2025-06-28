import Teleport from './Teleport.jsx'
import Home from './Home.jsx'
import Products from './Products.jsx'
import ProductDes from './ProductDes.jsx'
import Cart from './Cart.jsx'

const routes = [{
    path: '/',
    element: <Teleport />,
    children: [{
        index: 'Home',
        element: <Home />
    },
    {
        path: 'Home',
        element: <Home />   
    },
    {
        path: 'Cart',
        element: <Cart />
    },
    {
        path: 'Products',
        element: <Products />
    },
    {
        path: "Products/:id",
        element: <ProductDes />
    }
    ]
},];

export default routes;