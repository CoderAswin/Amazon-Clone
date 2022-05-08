import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Components/Navbar/Navigation";
import Slider from "./Components/Slider/Slider";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
import CartPage from "./Pages/CartPage/CartPage";
import {commerce} from './lib/commerce'
import {useState , useEffect} from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  const [productsList, setProductsList] = useState([])
  const [newCart, setNewCart] = useState([])
  

  const getProductsList = async () => {
    const {data} = await commerce.products.list()
    setProductsList(data)
  }

  const getCart = async () => {
    setNewCart(await commerce.cart.retrieve())
  }

  const updateCart = async (id,quantity) => {
    setNewCart(await commerce.cart.add(id,quantity))
  }

  const removeItems = async (id) => {
    setNewCart(await commerce.cart.remove(id))
  }

  const emptyCart = async () => {
    setNewCart(await commerce.cart.empty())
  }

  useEffect(() => {
    getProductsList()
  }, [])

  useEffect(() => {
    getCart()
  }, [newCart])
  
  
  // console.log(productsList);
  // console.log(newCart);


  return (
    <Router>
      <Navigation newCart={newCart} />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Slider />
              <Products productsList = {productsList}/>
            </>} />
        <Route
          path='/productinfo/:name/:id'
          element={
            <ProductInfo productsList = {productsList} updateCart = {updateCart}  />
          } />
        <Route
          path='/cartpage'
          element={
            <CartPage newCart={newCart}  removeItems={removeItems} emptyCart = {emptyCart} />
          } />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
