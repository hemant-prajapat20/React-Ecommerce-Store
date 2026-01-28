import React, { useState } from 'react'
import { GoHeartFill } from 'react-icons/go';
import ProductList from './ProductList';

const Product = ({searchTerm,addToCart,addToWishlist,wishlist})=>{

  const categories=['All','Mens','Womens','Kids','New Arrivals','On Sale']
   
  const [ActiveTab, setActiveTab] = useState('All');

  const filteredItems = ProductList.filter(item=>{
    const matchesCategory= 
      (ActiveTab==='All') ||
      (ActiveTab==='New Arrivals' && item.NewArrival) ||  
      (ActiveTab==='On Sale' && item.onSale) ||  
      (ActiveTab=== item.category)
       
      const matchesSearch=item.name.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
   })

  const renderProducts = filteredItems.map(product=>{
    return(
      // Card
      <div key={product.id} className='bg-zinc-100  p-5 border-1 border-zinc-100 rounded-lg'>
        <div className='flex justify-between items-center'>
          <button className={`text-3xl cursor-pointer
          ${wishlist.some(item=>item.id===product.id)?
            'text-red-600':'text-zinc-300'
          }`}
          
          onClick={()=>addToWishlist(product)}>
           <GoHeartFill/>
         </button>

      <div>
          {
            (product.onSale || product.NewArrival) &&
            (
              <span className={`px-3 py-1 pb-1.5 text-white rounded-2xl ${product.onSale ? 'bg-red-600' : 'bg-green-600'}`
              }>
                {product.onSale ? 'Sale' : 'New'}
              </span>
            )
          }
         </div>
         </div>


         {/* product image */}
     <div className='w-full h-[180px] sm:h-[240px] lg:h-[300px] overflow-hidden flex items-center justify-center'>
          <img src={product.image}  
            className='w-full h-full object-contain sm:object-cover'
          />

         </div>
          
          {/* product detail */}
    <div className='text-center mt-4 flex flex-col gap-3'>
               <h3 className='text-[1.4rem] font-semibold'>{product.name}</h3>
            
              <button className='bg-blue-600 text-white text-lg py-3 w-full rounded-lg cursor-pointer active:bg-blue-700'
              onClick={()=>addToCart(product)}>
                Add to Cart</button>
          </div>
        </div>
      )
    })


  return (
    <section id='product-section' className='max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12'>
      {/* tabs */}
     <div className='flex flex-wrap gap-2 sm:gap-3 justify-center items-center mt-6 sm:mt-8'>
        {
         categories.map(category=>{
           return(
               <button key={category}
                className={`px-8 py-2 rounded-full text-lg cursor-pointer
                 ${ActiveTab===category ? 'bg-blue-600 text-white' : 'bg-zinc-100 text-zinc-800'}`}
                  onClick={()=>setActiveTab(category)} 
               >
                   {category}
               </button>
           )
          })
        }
      </div>

      {/* Product Listing */}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 lg:gap-9 mt-8 sm:mt-12'>
        {
           filteredItems.length===0 ? 
           <p className='text-center col-span-4 text-zinc-800 text-lg'>No product found!!</p> :
           renderProducts
        }
      </div>
    </section>
  )
}

export default Product
