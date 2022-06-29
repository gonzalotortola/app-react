import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0);

    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        console.log(cart)
        console.log('Carrito: ' + cart.length)
    }, [cart]);
    
    useEffect(() => {
        console.log('El precio total es: $' + totalPrice)
    }, [totalPrice]);

    // función para agregar al carrito
    const addToCart = (item, quantity) => {
        if (isInCart(item)) {
            console.log('Ya está en el carrito.');
        } else {
            setCart([...cart, {...item, quantity}]);
            setTotalQuantity(totalQuantity + quantity)
        };
    };

    // función para verificar si el producto ya está en el carrito
    const isInCart = (item) => {
        return cart.some((producto) => producto.id === item.id);
    };

    // función para calcular el $ total del carrito
    const priceTotal = (item, quantity) => {
        if (isInCart(item)) {
            return null
        } else {
        setTotalPrice((item.price * quantity) + totalPrice);
    }};
   
    // función para eliminar un item del carrito
    const deleteItem = (item) => {
        setCart(cart.filter(cartItem => cartItem.id !== item.id));
        setTotalPrice(cart.filter(cartItem => cartItem.id !== item.id).reduce((acc, curr) => acc + curr.price * curr.quantity, 0));
        setTotalQuantity(cart.filter(cartItem => cartItem.id !== item.id).reduce((acc, curr) => acc + curr.quantity * curr.quantity, 0));
    };

    // función para eliminar todos los items del carrito
    const clearCart = () => {
        setCart([]);
        setTotalPrice(0);
        setTotalQuantity(0);
    };

    return (
        <CartContext.Provider value={{cart, addToCart, isInCart, priceTotal, deleteItem, clearCart, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}