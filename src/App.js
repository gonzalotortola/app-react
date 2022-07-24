import React from 'react';
import './app.scss';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

import Catalogo from './components/pages/Catalogo/Catalogo';
import Contacto from './components/pages/Contacto/Contacto';
import QuienesSomos from './components/pages/Quienes somos/QuienesSomos';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { CartProvider } from './context/CartContext';


function App() {

  return (
    <CartProvider>
      <div className="app">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={<h1>Explora nuestro catálogo</h1>} />} />
              <Route path="/category/:categoryId" element={<ItemListContainer greeting={<h1>Productos por categoría</h1>} />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/quienessomos" element={<QuienesSomos />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
            <Footer />
          </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
