import React,{useEffect, useState} from 'react'
import BannerImg from '../../assets/banner.jpg'

const Banner = ()=>{


  return (
    <section className='h-[45vh] sm:h-[55vh] lg:h-[60vh] mt-[10vh] sm:mt-[12vh] lg:mt-[14vh] bg-cover bg-top' style={{backgroundImage:`url(${BannerImg})`}}>
       <div className='max-w-[1300px] mx-auto flex flex-col gap-3 px-4 sm:px-8 lg:px-0 justify-center  h-full'>
            <h1 className='text-red-600 text-5xl sm:text-7xl lg:text-9xl uppercase font-bold tracking-tight'>Big Sale!</h1>
            <h2 className='text-zinc-600 text-3xlsm:text-2xl lg:text-3xl mt-2 '>Up to 50% OFF - Limited Time Only!</h2>

    <span className='text-sm uppercase tracking-widest text-blue-600 font-semibold mt-2'>
       Trending Collection 2026
   </span>
         </div>
    </section>
  )
}

export default Banner
    