import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {

  const {clearCart} = useContext(CartContext);

  const handleClearCart = () => {
    clearCart();
    alert('Se ha borrado tu carrito.');
  }

  return (
    <div>
      <div>
        <button onClick={handleClearCart}>
            Reset carrito //test
        </button>
      </div>
    </div>
  )
}

export default Cart;
