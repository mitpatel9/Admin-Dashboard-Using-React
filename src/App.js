import Sidebar from "./component/Sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import "./App.css"
import Home from "./pages/home/Home";
import UserList from "./pages/userlist/UserList"
import User from "./pages/user/User";
import {BrowserRouter as Router,useRoutes} from 'react-router-dom';
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/productlist/ProductList";
import Product from "./pages/product/Product"
import NewProduct from "./pages/newproduct/NewProduct";

const Menu = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/user", element: <UserList /> },
    { path: "/user/:userId", element: <User /> },// for select user id  use :
    { path: "/newuser", element: <NewUser /> }, 
    { path: "/productlist", element: <ProductList /> },
    { path: "/productlist/:productId", element: <Product /> }, 
    { path: "/newproduct", element: <NewProduct /> } 
  ]);
  return routes;
};

function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Router>
          <Menu />
        </Router>
      </div>

    </>
  );
}

export default App;
//
//
