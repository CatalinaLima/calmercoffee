import { createContext, useState } from 'react'

export const CartContext = createContext ({
    cart: [],
    totalQuantity: 0,
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState ([])

    console.log (cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart (prev => [...prev, {...item, quantity}])
        } else {
            console.error ('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId, quantity) => {
        const updatedCart = cart.map((item) => {
            if (item.id === itemId) {
                const newQuantity = item.quantity - quantity;
            if (newQuantity <= 0) {
                return null; 
            }
            return { ...item, quantity: newQuantity };
        }
        return item;
        });
    
        setCart(updatedCart.filter((item) => item !== null));
    };
    

    const clearCart = () => {
        setCart ([])
    }

    const isInCart = (itemId) => {
        return cart.some (prod => prod.id === itemId)
    }

    const totalQuantity = cart.reduce((total, item) => total + item.price + item.quantity, 0);

    return (
        <CartContext.Provider value= {{cart, addItem, removeItem, clearCart, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}


