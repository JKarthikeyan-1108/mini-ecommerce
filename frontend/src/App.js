import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ContactUs from './pages/ContactUs';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <div>
            <ToastContainer theme='dark' position='top-center' />
            <Header cartItems={cartItems} />
            <Routes>
                <Route path="/"  element={ <Home />}/>
                <Route path="/search"  element={ <Home />}/>
                <Route path="/product/:id"  element={ <ProductDetail cartItems={cartItems}  setCartItems={setCartItems}  />}/>
                <Route path="/cart"  element={ <Cart cartItems={cartItems}  setCartItems={setCartItems}  />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
      <Footer/>
    </div>
  );
}

export default App;
