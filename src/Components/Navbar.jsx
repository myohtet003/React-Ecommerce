 // eslint-disable-next-line no-unused-vars
 import React, { useState } from 'react';
 import { SiShopify } from 'react-icons/si';
 import { FaSearch, FaShoppingCart } from 'react-icons/fa';
 import { Link } from 'react-router-dom';
import { useStateContext } from '../Context/StateContext';
 
 const Navbar = () => {
   const {search, setSearch} = useStateContext();
 
   return (
     <nav className='flex items-center justify-between shadow-md px-5 py-2 my-5 rounded'>
       <Link to='/'>
         <div className='flex items-center gap-2 cursor-pointer'>
           <SiShopify className='text-4xl text-danger' />
           <h1 className='uppercase text-xl tracking-wider font-semibold text-header'>mms-shop</h1>
         </div>
       </Link>
       <div className='flex items-center gap-3'>
         <div className='flex items-center gap-2 bg-header text-primary rounded px-4 py-2'>
           <FaShoppingCart />
           <small>10</small>
         </div>
         <div className='flex items-center gap-2 border-2 rounded px-3 py-2'>
           <FaSearch />
           <input
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             type='text'
             className='outline-none bg-transparent'
             placeholder='Search....'
           />
         </div>
       </div>
     </nav>
   );
 };
 
 export default Navbar;
 