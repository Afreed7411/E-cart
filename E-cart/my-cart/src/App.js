import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart';
import Navbar from './components/Navbar';
import { ShopContextProvider } from './context/shop-contex';

function App() {
  return (
    <div>
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
