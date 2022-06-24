import React from 'react'
import Product from '../../components/product/Product'
import { products } from '../../data';
import './productList.css'
const ProductList = () => {
    return (
        <div className='product-list'>
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. It's Karthik</h1>
                <p className="pl-desc">karthik is a creative portfolio that your work has been waiting for.Beautiful homes, stunning portfolio styles & a whole lot more awaits inside.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => {
                    return (<Product key={item.id} img={item.img} link={item.link} />)
                })}

            </div>
        </div>
    )
}

export default ProductList