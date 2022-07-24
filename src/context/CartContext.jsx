import { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);

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

    function isInCart(id) {
        return cart.some((producto) => producto.id === id);
    };

    function priceTotal() {
        let total = 0;
        cart.forEach((item) => (total = total + item.quantity * item.price));
        return total;
    }
   
    const deleteItem = (id) => {
        let newCart = cart.filter(cartItem => cartItem.id !== id);
        setCart(newCart);
    };

    function quantityInCart() {
        let total = 0;
        cart.forEach( item => total = total + item.quantity);
        return total;
    }

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{cart, addToCart, isInCart, priceTotal, deleteItem, clearCart, quantityInCart}}>
            {children}
        </CartContext.Provider>
    )
}