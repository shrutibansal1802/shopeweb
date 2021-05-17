import React ,{useState}from "react";
import "./../css/shop.css";
import { cart } from "./../data";
import { HiShoppingCart } from "react-icons/hi";
import {MdAddShoppingCart} from 'react-icons/md'


// single product displaying is shop page with product image , cost and add to cart option
 function Singleproduct({ product }) {

    const [incart, setincart] = useState(false);

    function addToCart(){
        setincart(true)      // item is now added in cart  
        if(!cart.includes(product))     // only add the item if it is not present already
         cart.push(product);
          console.log(cart)
     }

  return (
    <div>
      <img className="image" alt={product.name} src={product.img} />
      <div className="productdetails">
        <div>
          <h5>{product.name}</h5>
          <p>${product.price}</p>
        </div>
        <icon onClick={ addToCart }
         className="addtocart">

             {/* change the icon based on wheather it is in cart or not */}
             {incart? <HiShoppingCart />:<MdAddShoppingCart/>}   
      
        </icon>
      </div>
    </div>
  );
}

export { Singleproduct, cart}