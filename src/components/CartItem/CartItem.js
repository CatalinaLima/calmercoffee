import React from 'react';

const CartItem = ({ p, onCancel, total,onRemove }) => {
    const handleCancel = () => {
        onCancel ();
    }

    return (
    <div className="CartItem">
        <h4>{p.name}</h4>
        <img src={p.img}></img>
        <p>Cantidad: {p.quantity}</p>
        <p>Precio por unidad: ${p.price}</p>
        <p>Subtotal: ${total}</p>
        <button onClick={handleCancel}>Cancelar</button>
    </div>
    );
};

export default CartItem;

