import React, { useState } from "react";
import { cart } from "./../components/Singleproduct";
import emptybasket from "./../imgs/emptycart.png";
import "./../css/cart.css";

export default function About() {
  const [cartproducts, setcartproducts] = useState(cart);
  return (
    <div>
      {cartproducts.length == 0 ? (
        <img className="emptycart" src={emptybasket} />
      ) : (
        cartproducts.map((item) => <Cartitem product={item} />)
      )}
    </div>
  );
}

function Cartitem({ product }) {
  const [quantity, setquantity] = useState(product.quantity);
  return (
    <div className="cartitem">
      <img src={product.img}></img>
      <p>{product.name} </p>
      <div>
        <button > + </button> 
        {"  " +quantity + "  "} 
        <button > - </button>
      </div>
      <p className="price"> ${product.price}</p>
    </div>
  );
}
