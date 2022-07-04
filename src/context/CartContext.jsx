import { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);

    // función para agregar al carrito
    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const idToAdd = item.id;
            let itemToAdd = cart.find ( producto => producto.id === idToAdd);
            itemToAdd.quantity += quantity;
            
            let newCart = cart.filter(cadaItem => cadaItem.id !== item.id);
            setCart([...newCart, {...itemToAdd}]);

        } else {
            setCart([...cart, {...item, quantity}]);
        };
    };

    // función para verificar si el producto ya está en el carrito
    function isInCart(id) {
        return cart.some((producto) => producto.id === id);
    };

    // función para calcular el $ total del carrito
    function priceTotal() {
        let total = 0;
        cart.forEach((item) => (total = total + item.quantity * item.price));
        return total;
    }
   
    // función para eliminar un item del carrito
    const deleteItem = (id) => {
        let newCart = cart.filter(cartItem => cartItem.id !== id);
        setCart(newCart);
    };

    // función para ver la cantidad total del carrito

    function quantityInCart() {
        let total = 0;
        cart.forEach( item => total = total + item.quantity);
        return total;
    }

    // función para eliminar todos los items del carrito
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{cart, addToCart, isInCart, priceTotal, deleteItem, clearCart, quantityInCart}}>
            {children}
        </CartContext.Provider>
    )
}