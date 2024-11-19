import Cart from "./pages/Cart";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import Pay from "./pages/Pay";
import Product from "./pages/product/product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import OrderDetail from "./components/OrderDetail";
import PreOrderDetail from "./components/PreOrderDetail";
import OrderList from "./components/OrderList";
import TrackOrderList from "./components/TrackOrderList";
import TrackPreOrderList from "./components/TrackPreOrderList";

import OrderHistory from "./components/OrderHistory";

// import Order from "./components/Order";
import Order from "./components/order/order";
import PreOrder from "./components/PreOrder";
import { useSelector } from "react-redux";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Invoice from "./components/Invoice";
import PrivacyPolicy from "./pages/PrivacyPolicy";


const App = () => {

  const user = useSelector((state)=>state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products/:category_id/:category_name" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order/:name" element={<Order/>}/>
        <Route path="/preorder/:id" element={<PreOrder/>}/>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>}/>
        <Route path="/order_detail/:id" element={<OrderDetail/>}/>
        <Route path="/preorder_detail/:id" element={<PreOrderDetail/>}/>

        <Route path="/order_invoice/:id" element={<Invoice/>}/>

        <Route path="/order_history" element={<OrderHistory/>}/>
        <Route path="/order_list" element={<OrderList/>}/>
        <Route path="/track_order_list" element={<TrackOrderList/>}/>
        <Route path="/track_preorder_list" element={<TrackPreOrderList/>}/>

        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/user-profile" element={<Profile/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      </Routes>
    </Router>
  );
  
};

export default App;
