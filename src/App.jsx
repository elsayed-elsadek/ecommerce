import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import SignUp from "./pages/SignUp"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import ProductItem from "./component/ProductItem"
import AllProducts from "./pages/AllProducts"
import WishList from "./pages/WishList"
import { AuthProvider } from "./context/UserContext"
import Cart from "./component/Cart"
import { CartProvider } from "./context/CartContext"
import Checkout from "./component/Checkout"
import MyAcount from "./component/MyAcount"
import ProductsCategory from "./component/ProductsCategory"

const App = () => {

  const root = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductItem />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/myaccount" element={<MyAcount />} />


        <Route path="/category/:category" element={<ProductsCategory />} />


      </Route>
    )
  )
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={root} />
        </CartProvider>
      </AuthProvider>

    </>
  )
}

export default App
