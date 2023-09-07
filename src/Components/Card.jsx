// eslint-disable-next-line no-unused-vars
import React from 'react'
import {AiFillStar} from "react-icons/ai"
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Card = ({product}) => {
  return (
    <div className=' w-72 border-2 border-secondary p-5 rounded-lg hover:shadow-xl transform transition hover:scale-105 '>
        <img src={product?.image} className=' h-[170px] mx-auto my-3' alt="" />
        <h3 className=' text-header font-bold tracking-wider my-3'>{product?.title?.substring(0, 25)}...</h3>
        <div className=' flex items-center gap-1'>
            <AiFillStar className=' text-danger'/>
            <small className=' text-info font-semibold'>({product?.rating?.rate})</small>
        </div>
        <p className=' text-header font-bold text-xl'>{product?.price}</p>
        <div>
            <button className=' bg-info text-primary shadow-lg py-2 px-4 rounded transform transition hover:scale-90 '>Add To Cart</button>
            <Link to={`/detail/${product.id}`}>
             <button className=' bg-header text-primary shadow-lg py-2 px-4 rounded ml-3 transform transition hover:scale-90 '>Details</button>
            </Link>

        </div>
    </div>
  )
}

export default Card
