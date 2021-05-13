import React from 'react'

export default function Singleproduct({product}) {

    return (
        <div>
            <img className='image' src={product.img}/>
            <div>
                <h5>{product.name}</h5>
                <p>${product.price}</p>
            </div>
        </div>
    )
}
