import React from 'react'

const Wishlist = ({activePanel,HandleClose,wishlist,addToCart,clearWishlist}) => {
  return (
   <div className={`flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 z-40 h-full w-full sm:w-[70vw] md:w-[45vw] lg:w-[30vw]
     shadow-lg border-l-2 border-zinc-200 transform transition-transform duration-300
   ${activePanel==='wishlist' ? 'translate-x-0' : 'translate-x-full'}`}>
           {/* heading */}
           <div className='px-10'>
              <h3 className='text-3xl font-bold text-zinc-800 text-center mt-10'>your Wishlist</h3>
           </div>
   
           {/* cart items */}
       <div className='flex-1 flex flex-col gap-2 overflow-y-auto px-2'>
            {
              wishlist.length===0 ?
              (<p className='text-zinc-800 text-center'>Your wishlist is empty</p>) :
              (
            wishlist.map((product,index)=>{
              return(
                <div className={`flex items-center gap-3  px-5 py-1 border-y-1 border-zinc-300
                  ${index % 2 === 0 ? 'bg-blue-100' : 'bg-white'}`}>
                 <div className='w-20 h-20 mb-3'>
                   {/* cart image */}
                   <img src={product.image} className='w-full h-full object-contain pt-2'/>
                 </div>
              {/* product detail */}
              <div className='flex-1 '>
               <div className='flex justify-between'>
                 <h4 className='font-semibold text-zinc-800 text-lg'>{product.name}</h4>
                 <p className='text-sm text-zinc-500'>{product.addDate}</p>
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
                     <button className='bg-blue-600 text-white text-sm px-5 py-[5px] rounded-full active:bg-blue-700 cursor-pointer'onClick={()=>addToCart (product)}> Add to Cart</button>
                   </div>
              </div>
   
             </div>
              )
            })
          )
            }
         </div>
   
                
       {/* button */}
     <div className='flex gap-x-2 px-8 py-4 bg-zinc-100 sticky bottom-0 border-t'>
          <button className='bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700 text-center py-3' onClick={HandleClose}>Close</button>
          <button className='bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700 text-center py-3' onClick={clearWishlist}>Clear All</button>
          </div>
   
       </div>
  )
}

export default Wishlist
