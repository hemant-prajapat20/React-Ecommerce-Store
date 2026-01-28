import React from 'react'
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

      
const Cart = ({activePanel,HandleClose,cart,removeItem,quantityInc,quantityDec,subtotal,orderTotal,shipping,setOrderSummary}) => {
  return (
    <div className={`flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 z-40 h-full w-full sm:w-[70vw] md:w-[45vw] lg:w-[30vw]
     shadow-lg border-l-2 border-zinc-200 transform transition-transform duration-300
       ${activePanel==='cart' ? 'translate-x-0' : 'translate-x-full'}`}
      >

        {/* heading */}
        <div className='px-10'>
           <h3 className='text-3xl font-bold text-zinc-800 text-center mt-10'>your Cart</h3>
        </div>

        {/* cart items */}
      <div className='flex-1 flex flex-col gap-2 overflow-y-auto scroll'>
          {
            cart.length === 0 ? 
              (<p className='text-zinc-800 text-center'>Your Card is Empty</p>) :
              (
            cart.map((product,index)=>{
              return(
               <div className={`flex items-center gap-3 px-5 py-1 border-y-1 border-zinc-300
                ${index % 2 === 0 ? 'bg-blue-100' : 'bg-white'}`}>
              <div className='w-20 h-20 bg-zinc-200'>
                {/* cart image */}
                <img src={product.image} className='w-full h-full object-contain'/>
              </div>

           {/* product detail */}
           <div className='flex-1 '>
            <div className='flex justify-between'>
              <h4 className='font-semibold text-zinc-800 text-lg'>{product.name}</h4>
              <button className='w-8 h-8 bg-red-600 text-white rounded-full flex justify-center items-center mr-[26px] cursor-pointer active:bg-red-700'
              onClick={()=>removeItem(product)}>
                 <FaTrash />
              </button>
            </div>               
               
          <div className='flex justify-between'>
              <div>
            {
              product.onSale &&
              (
              <span className='text-zinc-600 mr-5 font-semibold text-lg line-through'>${product.oldPrice.toFixed(2)}</span>
              )
            }
              <span className='text-red-600 font-semibold text-lg '>${product.price.toFixed(2)}</span>
       </div>
            <div className='flex gap-2'>
              <button  className='w-7 h-7 text-[14px] cursor-pointer active:bg-blue-700  bg-blue-600 text-white rounded-full  flex justify-center items-center'
              onClick={()=>quantityDec(product)}>
                <FaMinus/>
                 </button>
                 <span>{product.quantity}</span>
                 <button className='w-7 h-7 text-[14px] cursor-pointer active:bg-blue-700  bg-blue-600 text-white rounded-full  flex justify-center items-center'
                 onClick={()=>quantityInc(product)}>
                   <FaPlus/>
                 </button>
               </div>
             </div>

           </div>

          </div> 
              )
            })
          )
          }
        
      </div>

      {/* cart total */}
     <div className='px-10 border-y border-zinc-300'>
      <div className='flex justify-between pt-2'>
        <span className='text-zinc-800'>Subtotal</span>
        <span className='text-zinc-800'>${subtotal.toFixed(2)}</span>
       </div>
       <div className='flex justify-between py-2'>
        <span className='text-zinc-800'>Shipping & Handlings</span>
        <span className='text-zinc-800'>{shipping.toFixed(2)}</span>
       </div>
       <div className='flex justify-between py-2 border-t border-zinc-300'>
        <span className='text-lg text-blue-600 font-bold'>Order Total</span>
        <span className='tetx-lg text-blue-600 font-bold'>{orderTotal.toFixed(2)}</span>
      </div>
    </div>

        {/* button */}
        <div className='flex gap-x-2 mb-6 px-8'>
         <button className='bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700 text-center py-3' onClick={HandleClose}>Close</button>
         <button className={` text-white flex-1 h-[7vh]  active:bg-blue-700 text-center py-3  ${cart.length === 0 ? 'bg-gray-400 cursor-not-allowed ' : 'bg-blue-600 cursor-pointer'}`}
          disabled={cart.length===0} onClick={()=>setOrderSummary(true)}>
            Checkout</button>
        </div>

    </div>
  )
}

export default Cart
