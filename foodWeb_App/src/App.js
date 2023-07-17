import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from "./components/Home/Home"
import Header from "./components/layout/Header"
import Footer from './components/layout/Footer';
import Contact from './components/contact/Contact'
import Cart from './components/cart/Cart'
import Shipping from './components/cart/Shipping'
import ConfirmOrder from './components/cart/ConfirmOrder'
import PaymentSuccess from './components/cart/PaymentSuccess'
import Login from './components/login/Login'
import Profile from './components/profile/Profile';
import MyOrders from './components/myOrders/MyOrders';
import OrderDetails from './components/myOrders/OrderDetails';
import DashBoard from './components/admin/DashBoard';
import Users from './components/admin/Users';
import Orders from './components/admin/Orders';
import About from './components/about/About';
import NotFound from './components/layout/NotFound';


import "./styles/app.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import './styles/contact.scss'
import './styles/common.scss'
import './styles/Footer.scss'
import './styles/shipping.scss'
import './styles/confirmOrder.scss'
import './styles/PaymentSuccess.scss'
import './styles/login.scss'
import './styles/login.scss'
import './styles/profile.scss'
import './styles/myOrder.scss'
import './styles/OrderDetails.scss'
import './styles/dashboard.scss'
import './styles/about.scss'




const App = () => {
  return (
    <Router>
      <Header isAuthenticated = {true} />
      <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/contact' element = {<Contact/>} />
          <Route path = '/about' element = {<About />} />
          <Route path = '/cart' element = {<Cart/>} />
          <Route path = '/shipping' element = {<Shipping/>} />
          <Route path = '/confirmorder' element = {<ConfirmOrder/>} />
          <Route path = '/paymentsuccess' element = {<PaymentSuccess/>} />
          <Route path = '/login' element = {<Login/>} />
          <Route path = '/me' element = {<Profile/>} />
          <Route path = '/myorders' element = {<MyOrders/>} />
          <Route path = '/orders/:id' element = {<OrderDetails/>} />
          <Route path = '/admin/dashboard' element = {<DashBoard/>} />
          <Route path = '/admin/users' element = {<Users/>} />
          <Route path = '/admin/orders' element = {<Orders/>} />

          <Route path='*' element = {<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App