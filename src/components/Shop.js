import React,{useState} from 'react'
import Singleproduct from './Singleproduct'
import {products} from './../data'
import './../css/shop.css'

export default function Shop() {
const [productarr,setProductarr] = useState(products);

    return (
        <div className='display'>
           {
               productarr.map(product=>{
                   return(
                       <div className='singledisplay'>
                           <Singleproduct key={product.id} product={product}/>
                       </div>
                   )
               })
           }
        </div>
    )
}
