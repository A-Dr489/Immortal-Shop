import Teleport from './Teleport.jsx'
import Home from './Home.jsx'
import Products from './Products.jsx'

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
        path: 'Products',
        element: <Products />
    }
    ]
}];

export default routes;