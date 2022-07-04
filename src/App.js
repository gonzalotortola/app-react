import './app.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <header>
          <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<ItemListContainer greeting={<h1>Explora nuestro catálogo</h1>} />} />
                <Route path="/category/:categoryId" element={<ItemListContainer greeting={<h1>Productos por categoría</h1>} />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </BrowserRouter>          
        </header>
      </div>
    </CartProvider>
  );
}

export default App;
