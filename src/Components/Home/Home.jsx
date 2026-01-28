import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Product from '../Products/Product'
import Cart from '../Cart/Cart'
import Whishlist from '../Wishlist/Wishlist'
import OrderSummary from '../OrderSummary/OrderSummary'
import OrderPlace from '../OrderPlace/OrderPlace'

const Home = ()=>{
 
   const [searchTerm, setSearchTerm] = useState('');
   const [isScrolled, setIsScrolled] = useState(false);
   const [activePanel, setactivePanel] = useState(null);
   const [cart, setCart] = useState(()=>{
    //lazy initialization
     const storeCart=localStorage.getItem('cart');
     return  storeCart ? JSON.parse(storeCart) : []
      });
   const [orderSummary, setOrderSummary] = useState(false)
   const [orderPlaced, setOrderPlaced] = useState(false)
   const [wishlist, setWishlist] = useState(()=>{
      const storeWishlist=localStorage.getItem('wishlist');
      return storeWishlist? JSON.parse(storeWishlist) : []            
   })

   //total calculations
       const subtotal=cart.reduce((acc,item)=> acc + item.price * item.quantity,0);
       const totalItems=cart.reduce((acc,item)=> acc + item.quantity,0);
       const shipping = totalItems * 2;
       const orderTotal = subtotal + shipping;

    
    useEffect(()=>{
      const changeNavbar=()=>{
        setIsScrolled(window.scrollY>10)
      }
      window.addEventListener('scroll',changeNavbar);
    },[]);

    // save items to localstorage
    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart));
        localStorage.setItem('wishlist',JSON.stringify(wishlist));
    },[cart,wishlist])


// handle Scroll
   const handleScroll=()=>{
    const section=document.getElementById('product-section')
    if(section){
      section.scrollIntoView({behavior:'smooth'});
    }
  }

  //Cart and wishlist Showtab function
   
  const handlePanel=(tabName)=>{
      setactivePanel(prev=>(
          prev=== tabName ? null : tabName
      ))
  }

    //ClosePanel function
    const HandleClose=()=> setactivePanel(null)

    //remove item from cart function
    const removeItem=(product)=>{
      setCart(cart.filter(item=>item.id !== product.id)
    )}

    //quantity increment
    const quantityInc=(product)=>{

    setCart(cart.map(item=>
      item.id === product.id ?
      
        {...item, quantity:item.quantity + 1} : item
    ))
    }
    //quantity decrement
    const quantityDec=(product)=>{

    setCart(cart.map(item=>
      item.id === product.id && item.quantity > 1 ?
        {...item, quantity:item.quantity - 1} : item
    ))
    }


  // AddToCart Function
  const addToCart=(product)=>{
    const alreadyAdded = cart.find(item=>item.id === product.id);
    if(alreadyAdded){
      alert('item is already in the cart');
      return;
    }
      setCart([...cart,{...product,quantity:1}])
  }

  // wishlist function

   const addToWishlist=(product)=>{
      const isInWishlist=wishlist.some(item=>item.id === product.id);
      if(isInWishlist){
        setWishlist(wishlist.filter(item=>item.id!==product.id))
      }
      else{
        const addDate=new Date().toLocaleDateString('en-GB');
        setWishlist([...wishlist,{...product,addDate}])
      }
   }

// clear wishlist
    const clearWishlist=()=>{
       setWishlist([]);
    }



  return (
    <div>
      <Navbar 
        handleScroll={handleScroll}
        setSearchTerm={setSearchTerm}
        isScrolled={isScrolled}
        handlePanel={handlePanel}
        totalItems={totalItems}
        wishlist={wishlist}
      />

      <Banner/>

      <Product searchTerm={searchTerm}
      addToCart={addToCart}
      addToWishlist={addToWishlist}
      wishlist={wishlist}

      />

      <Cart
      activePanel={activePanel}
      HandleClose={HandleClose}
      cart={cart}
      removeItem={removeItem}
      quantityInc={quantityInc}
      quantityDec={quantityDec}
      subtotal={subtotal}
      shipping={shipping}
      orderTotal={orderTotal}
      setOrderSummary={setOrderSummary}
      />

      <Whishlist
      activePanel={activePanel}
      HandleClose={HandleClose}
      wishlist={wishlist}
      addToCart={addToCart}
      clearWishlist={clearWishlist}
      />

     {
      orderSummary &&
      <OrderSummary
      cart={cart}
      subtotal={subtotal}
      shipping={shipping}
      orderTotal={orderTotal}
      setOrderSummary={setOrderSummary}
      setOrderPlaced={setOrderPlaced}
      setCart={setCart}
      />
     }

     {
      orderPlaced &&
      <OrderPlace
     setOrderPlaced={setOrderPlaced}
     />
     }

    </div>
  )
}

export default Home
