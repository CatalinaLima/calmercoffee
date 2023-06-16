import React from 'react';

const CartItem = ({ name, quantity, price, total, onCancel, onRemove }) => {
    const handleCancel = () => {
        onCancel ();
    }

    return (
    <div className="CartItem">
        <h4>{name}</h4>
        <p>Cantidad: {quantity}</p>
        <p>Precio por unidad: ${price}</p>
        <p>Subtotal: ${total}</p>
        <button onClick={handleCancel}>Cancelar</button>
        <button onClick={onRemove}>Eliminar uno</button>
    </div>
    );
};

export default CartItem;

