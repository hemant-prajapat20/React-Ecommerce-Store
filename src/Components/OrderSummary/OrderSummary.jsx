import React from 'react'

const OrderSummary = ({cart,subtotal,shipping,orderTotal,setOrderPlaced,setOrderSummary,setCart}) => {

  const handlePlaceOrder=()=>{
    setOrderSummary(false)
    setOrderPlaced(true)
    setCart([])
  }

  return (
    <section className='bg-black/95 justify-center items-center flex fixed inset-0 z-40'>
       <div className='bg-zinc-100 p-5 sm:p-8 w-[90%] sm:w-[500px] lg:w-[600px] mx-auto rounded-lg'>
        <h2 className='text-3xl font-bold text-zinc-800 mb-5 text-center'>Order Summary</h2>
          
          <div>
            <div>
              {
                 /* Order items would be listed here */
                    cart.map(item=>(
                 <div key={item.id} className='flex justify-between items-center border-b-1 border-zinc-300'>
                    <span className='text-zinc-800 py-2'>{item.name}(x{item.quantity})</span>
                    <span className='text-zinc-800 py-2'>${(item.price* item.quantity).toFixed(2)}</span>
                 </div>
                 ))
                }
           </div>

           <div className='flex justify-between pt-3 '>
            <span className='text-zinc-800'>SubTotal</span>
            <span className='text-zinc-800'>${subtotal.toFixed(2)}</span>
           </div>
           <div className='flex justify-between py-3 '>
            <span className='text-zinc-800'>Shipping & Handling</span>
            <span className='text-zinc-800'>${shipping.toFixed(2)}</span>
           </div>
           <div className='flex justify-between pt-3 border-t-1 border-zinc-30 mb-5'>
            <span className='text-blue-600 font-bold text-xl'>Order Total</span>
            <span className='text-blue-600 font-bold text-xl'>${orderTotal.toFixed(2)}</span>
           </div>

         </div>
        <div className='flex gap-x-3 mt-10'>
          <button className='bg-zinc-800 flex-1 py-3 active:bg-zinc-900 text-white font-bold rounded-lg cursor-pointer' onClick={()=>setOrderSummary(false)}>Cancel</button>
          <button className='bg-blue-600 flex-1 py-3 active:bg-zinc-700 text-white font-bold rounded-lg cursor-pointer' onClick={handlePlaceOrder}>Place Order</button>
        </div>      

       </div>
    </section>
  )
}

export default OrderSummary
