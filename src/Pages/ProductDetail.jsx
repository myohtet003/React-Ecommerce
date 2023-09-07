// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../api';
import {AiFillStar} from "react-icons/ai"

const ProductDetail = () => {

  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  
  const getProductDetail = async () => {
    setProduct(await getData(`/products/${id}`))
  }
  
  const getProductsByCart = async () => {
    setProducts(await getData(`/products/category/${product.category}`))
  }
  useEffect(() => {
    getProductDetail();
    getProductsByCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  } ,[products,product])
  return (
    <div className="">
      <div className=' flex gap-5 items-start my-10'>
        <img src={product?.image} className=' h-96 border-2 shadow-lg p-10' alt="" />
        <div className=" flex flex-col gap-5 mt-5">
          <p className=' bg-secondary text-info px-2 py-1 text-sm rounded-full text-center w-32'>Category - {product?.category}</p>
          <h3 className=" text-2xl font-semibold text-header">{product?.title}</h3>
          <div className=" ">
            <p className=' text-header font-semibold text-lg'>Description</p>
            <p className=" text-secondary tracking-wider leading-6 mt-1">
              {product?.description}
            </p>
          </div>
          <p className=' flex items-center gap-2'><AiFillStar className=' text-xl text-danger'/><small className=' text-header font-bold'>({product?.rating?.rate})</small> </p>
          <p className=" text-header text-xl font-semibold">${product?.price}</p>
          <div className="">
            <button className=' bg-info py-2 w-40 text-secondary rounded transform transition hover:scale-90'>Add To Cart</button>
            <button className=' bg-header py-2 w-40 ml-5 text-secondary rounded transform transition hover:scale-90'>Buy Now</button>
          </div>
        </div>
      </div>
      <div className="my-20">
        <h1 className='text-2xl font-semibold text-header'>You may also like</h1>
        <div className=' flex flex-wrap gap-7 my-10'>
          {products?.map(item => (
            // eslint-disable-next-line react/jsx-key
            <div onClick={() => setProduct(item)} key={item.id}>
              <img src={item?.image} className=' h-52 border-2 shadow-lg p-5 rounded' alt="" />
              <p className=' text-header font-semibold mt-1'>${item?.price}</p>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail