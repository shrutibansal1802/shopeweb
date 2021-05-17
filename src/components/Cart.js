import React, { useState } from "react";
import { cart } from "./../components/Singleproduct";
import emptybasket from "./../imgs/emptycart.png";
import "./../css/cart.css";

export default function Cart() {  
  const [cartproducts, setcartproducts] = useState(cart);
  return (
    <div>
        
        {/* show the empty cart image if cart is empty or map all the items */}
      {cartproducts.length == 0 ? (
        <img className="emptycart" src={emptybasket} />
      ) : (
        cartproducts.map((item) => <Cartitem product={item} />)
      )}
    </div>
  );
}

function Cartitem({ product }) {  //single product in a cart
  const [quantity, setquantity] = useState(product.quantity);
  return (
    <div className="cartitem">
      <img src={product.img}></img>
      <p>{product.name} </p>
     
       {/* to increase to decrease quantity from cart */}
      <div>           
        <button > + </button>        
        {"  " +quantity + "  "} 
        <button > - </button>
      </div>
      <p className="price"> ${product.price}</p>
    </div>
  );
}
