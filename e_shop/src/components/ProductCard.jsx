import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";
const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    return (
        <div style={{'border':'1px solid #ddd',
            'padding':'16px',
            'marginBottom':'20px',
            'borderRadius':'8px',
            'borderWidth':'10px',
            'maxWidth':'400px',
            'backgroundColor':'#fffff',
            borderColor: product.price > 100 ? 'red' : product.price > 50 ? 'orange' : 'green'
            }}>
            <img style={styles.image} src={product.image.split("Image")[0]} alt="Product Image" />
            <h3>{product.title}</h3>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong>${product.price}</p>

            <p style={{color: product.rating.rate > 4 ? 'green' : product.rating.rate > 3 ? 'orange' : 'red', fontWeight: 'bold'}}>
                <strong>Rating:</strong> {product.rating.rate} ⭐ ({product.rating.count} reviews)
            </p>
            
            {/* <input type="number" value={product.quantity} readOnly style={{width: '50px', marginRight: '10px'}} /> */}
            <button onClick={()=>addToCart(product)}>Add To Cart</button>
            <button style={{marginLeft:'10px'}}>Remove From Cart</button>
            
        </div>
    )
}
const styles={
    card:{
        border:'1px solid #ddd',
        padding:'16px',
        marginBottom:'20px',
        borderRadius:'8px',
        maxWidth:'400px',
        backgroundColor:'#fffff',
    },
    image:{
        width:'100%',
        maxHeight:'300px',
        marginBottom:'12px',
        objectFit:'contain',
    }
}
export default ProductCard;