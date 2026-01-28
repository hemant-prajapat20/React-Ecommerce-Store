import Jeans from '../../assets/jeans.png'
import Hoodie from '../../assets/hoodie.png'
import LeatherJacket from '../../assets/leather-jacket.png'
import Skirt from '../../assets/skirt.png'
import TShirt from '../../assets/tshirt.png'
import Sleepsuit from '../../assets/sleepsuit.png'
import Shirt from '../../assets/shirt.png'
import Dress from '../../assets/dress.png'
import Skater from '../../assets/skater.png'
import Sweater from '../../assets/sweater.png'
import BabyShirt from '../../assets/baby-shirt.png'
import ShirtDress from '../../assets/shirt-dress.png'

const Product =[
  {
    id: 1,
    name: 'Sports Tshirt',
    image: TShirt,
    price: 25.99,
    oldPrice: 35.99,
    onSale: true,
    NewArrival: false,
    category: "Mens",
  },
  {
    id: 2,
    name: 'Blue Jeans',
    image: Jeans,
    price: 45.99,
    oldPrice: 60.99,
    onSale: false,
    NewArrival: false,
    category: "Mens",
  },
  {
    id: 3,
    name: 'Winter Hoodie',
    image: Hoodie,
    price: 39.99,
    oldPrice: 49.99,
    onSale: false,
    NewArrival: true,
    category: "Unisex",
  },
  {
    id: 4,
    name: 'Leather Jacket',
    image: LeatherJacket,
    price: 120.99,
    oldPrice: 150.99,
    onSale: false,
    NewArrival: false,
    category: "Mens",
  },
  {
    id: 5,
    name: 'Stylish Skirt',
    image: Skirt,
    price: 30.99,
    oldPrice: 40.99,
    onSale: false,
    NewArrival: true,
    category: "Womens",
  },
  {
    id: 6,
    name: 'Kids Sleepsuit',
    image: Sleepsuit,
    price: 20.99,
    oldPrice: 28.99,
    onSale: true,
    NewArrival: false,
    category: "Kids",
  },
  {
    id: 7,
    name: 'Casual Shirt',
    image: Shirt,
    price: 32.99,
    oldPrice: 42.99,
    onSale: false,
    NewArrival: true,
    category: "Mens",
  },
  {
    id: 8,
    name: 'Party Dress',
    image: Dress,
    price: 55.99,
    oldPrice: 75.99,
    onSale: false,
    NewArrival: false,
    category: "Womens",
  },
  {
    id: 9,
    name: 'Skater Outfit',
    image: Skater,
    price: 48.99,
    oldPrice: 65.99,
    onSale: false,
    NewArrival: true,
    category: "Unisex",
  },
  {
    id: 10,
    name: 'Warm Sweater',
    image: Sweater,
    price: 42.99,
    oldPrice: 55.99,
    onSale: false,
    NewArrival: false,
    category: "Unisex",
  },
  {
    id: 11,
    name: 'Baby Shirt',
    image: BabyShirt,
    price: 18.99,
    oldPrice: 25.99,
    onSale: false,
    NewArrival: true,
    category: "Kids",
  },
  {
    id: 12,
    name: 'Shirt Dress',
    image: ShirtDress,
    price: 50.99,
    oldPrice: 70.99,
    onSale: true,
    NewArrival: false,
    category: "Womens",
  },
]

export default Product
