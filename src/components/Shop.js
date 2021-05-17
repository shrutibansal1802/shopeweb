import React from 'react'
import {Singleproduct} from './Singleproduct'
import {products} from './../data'
import './../css/shop.css'

export default function Shop() {
// const [productarr,setProductarr] = useState(products);

    return (
        <div className='display'>
           {
               products.map(product=>{
                   return(
                       <div key={product.id} className='singledisplay'>
                           <Singleproduct  product={product}/>
                       </div>
                   )
               })
           }
        </div>
    )
}
