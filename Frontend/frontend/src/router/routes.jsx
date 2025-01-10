import AddProduct from "../pages/User/AddProduct";
import { default as Favorites } from "../pages/User/favorites";
import { default as Home } from "../pages/User/Home";
import Nopage from "../pages/User/NoPage";
import { default as UserProductDetail } from "../pages/User/UserProductDetail";
import { default as UserProducts } from "../pages/User/UserProducts";
import { default as UserRoot } from "../pages/User/UserRoot";

const ROUTES = [
    {
        path:"/",
        element:<UserRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/products",
                element:<UserProducts/>
            },
            {
                path:"/products/:id",
                element:<UserProductDetail/>
            },
            {
                path:"/favorites",
                element:<Favorites/>
            },
            {
                path:"/addproduct",
                element:<AddProduct/>
            },
        ]
    },{
        path:"*",
        element:<Nopage/>
    }
]
export default ROUTES