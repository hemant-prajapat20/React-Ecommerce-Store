import React,{useEffect, useState} from 'react'
import Logo from '../../assets/logo.png'
import { IoSearch } from "react-icons/io5";
import { GoHeartFill } from 'react-icons/go';
import { HiShoppingBag } from 'react-icons/hi2';



const Navbar = ({handleScroll,setSearchTerm,isScrolled,handlePanel,totalItems,wishlist })=>{
  
  return (
    <header className={`bg-white fixed top-0 left-0 right-0 z-30 ${isScrolled ? 'shadow-lg' : ''}`}>
<nav className='max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12 h-[10vh] sm:h-[12vh] lg:h-[14vh] flex items-center justify-between'>
            {/* Logo */}
          <a href="#" className='w-10 h-10 sm:w-12 sm:h-12 lg:w-15 lg:h-15 bg-zinc-200 rounded-full flex p-2'>
            <img src={Logo}/>
        </a>

    {/* actions */}
       <div className='flex items-center gap-x-5'>

    {/* search bar */}
      <div className='flex p-1 rounded-full border-2 border-blue-500'>
         <input type="text" name='search' id='search' placeholder='Seacrh...' autoComplete='off'
            className='h-8 sm:h-10 lg:h-[5vh] w-28 sm:w-48 lg:w-64 pl-3 sm:pl-4 focus:outline-none text-sm sm:text-base'
            onFocus={handleScroll}
            onChange={(e)=>setSearchTerm(e.target.value)}
          />

        <button className=' flex justify-center items-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl'>
           <IoSearch />
        </button>
     </div>

    {/* icons */}
       <button className='text-[1.7rem] text-zinc-800 relative cursor-pointer ' onClick={()=>handlePanel('wishlist')}>
          <GoHeartFill/>
        {
         wishlist.length>0 &&
          <span className='bg-red-500 text-white w-5 h-5 rounded-full text-[14px] flex justify-center items-center absolute top-4 right-3 border-2'>
           {wishlist.length}
           </span>
        }
       </button>

       <button className='text-[1.7rem] text-zinc-800 relative cursor-pointer' onClick={()=>handlePanel('cart')}>
          <HiShoppingBag/>
           {
           totalItems>0 &&
            <span className='bg-red-500 text-white w-5 h-5 rounded-full text-[14px] flex justify-center items-center absolute top-4 right-4 border-2 border-white'>
           {totalItems}
           </span>
           }
       </button>
      </div>
    
    </nav>
    </header>
  )
}

export default Navbar
