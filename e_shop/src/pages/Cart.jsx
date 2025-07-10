import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';
const Cart= () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div>
            <h1>Cart Items</h1>
            <ul>
                {cartItems.map(item=>(
                    <li key={item.id} style={{marginBottom: '20px', border: '1px solid #ddd', padding: '16px', borderRadius: '8px'}}>
                        <img src={item.image.split("Image")[0]} alt={item.title} style={{width: '100px', height: '100px'}} />
                        <h3>{item.title}</h3>
                        <p><strong>Category:</strong> {item.category}</p>
                        <p><strong>Price:</strong> ${item.price}</p>
                        <p><strong>Quantity:</strong> {item.quantity}</p>
                    </li>    
                ))}
                
            </ul>
        </div>
    );
}
export default Cart;