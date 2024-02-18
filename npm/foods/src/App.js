import  './ss.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navbar";
import   Shop   from "./pages/shop/shop";
// import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { Option }  from './pages/option';
import  { Login }  from './pages/login/login'
import Signup from './pages/login/signup';
import Qpay from './card/qpay';
import { PRODUCTS } from './products';
import { ShopContextProvider } from "./context/shop-context";
import Card from './card/card';
import Home from './pages/login/Home';
import Piechart from './back/Piechart';
import Admin from './pages/login/Admin';
import Read from './back/Read';
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from './back/Create';
import Form from './back/Form';
import Update from './back/Update';
import Feedback from './back/Feedback';

import New from './back/New';
import Choose from './back/choose';

import Product12 from './pages/shop/product12';

import Visitor from './pages/login/visitor';
import { Adminb } from './back/adminb';
import { Cart1 } from './pages/cart/cart1';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
 
        <Router>
          <Navbar />
          <Routes>
          <Route path="/adminb" element={<Adminb />} />
            <Route path="/product12" element={<Product12 />} />
            <Route path="/visitor" element={<Visitor />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<Shop />} />
            <Route path="/cart1" element={<Cart1 />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/new" element={<New />} />
            <Route path="/choose" element={<Choose />} />
            <Route path="/create" element={<Create />} />
            <Route path='/read/:id' element={<Read />} />
            <Route path='/edit/:id' element={<Update />} />
            <Route path="/piechart" element={<Piechart />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/card" element={<Card />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<PRODUCTS/>} />
            <Route path="/form" element={<Form />} />
            <Route path="/qpay" element={<Qpay />} />
            <Route path="/option" element={<Option />} />
          </Routes>
        </Router>

      </ShopContextProvider>
    </div>
  );
}

export default App;