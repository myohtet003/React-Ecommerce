// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useStateContext } from '../Context/StateContext'
import Card from '../Components/Card';

const Products = () => {
   const {state: {products}} = useStateContext();


  return (
    <div className=' flex flex-wrap gap-5 justify-center my-10'> 
       {products?.map((product) => (<Card key={product.id} product={product}/>))}
    </div>
  )
}

export default Products
