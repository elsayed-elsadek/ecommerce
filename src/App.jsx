import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Suspense, lazy } from "react"
import Layout from "./layout/Layout"
import { AuthProvider } from "./context/UserContext"
import { CartProvider } from "./context/CartContext"
import { ToastProvider } from "./context/ToastContext"
import ErrorBoundary from "./component/ErrorBoundary"
import LoadingSpinner from "./component/LoadingSpinner"
import ProtectedRoute from "./component/ProtectedRoute"
import ToastNotifications from "./component/ToastNotifications"

// Lazy load components
const Home = lazy(() => import("./pages/Home"))
const Contact = lazy(() => import("./pages/Contact"))
const About = lazy(() => import("./pages/About"))
const SignUp = lazy(() => import("./pages/SignUp"))
const NotFound = lazy(() => import("./pages/NotFound"))
const Login = lazy(() => import("./pages/Login"))
const ProductItem = lazy(() => import("./component/ProductItem"))
const AllProducts = lazy(() => import("./pages/AllProducts"))
const WishList = lazy(() => import("./pages/WishList"))
const Cart = lazy(() => import("./component/Cart"))
const Checkout = lazy(() => import("./component/Checkout"))
const MyAcount = lazy(() => import("./component/MyAcount"))
const ProductsCategory = lazy(() => import("./component/ProductsCategory"))

const App = () => {
  const root = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        } />
        <Route path="contact" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        } />
        <Route path="about" element={
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        } />
        <Route path="/signup" element={
          <Suspense fallback={<LoadingSpinner />}>
            <SignUp />
          </Suspense>
        } />
        <Route path="*" element={
          <Suspense fallback={<LoadingSpinner />}>
            <NotFound />
          </Suspense>
        } />
        <Route path="/login" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Login />
          </Suspense>
        } />
        <Route path="/product/:id" element={
          <Suspense fallback={<LoadingSpinner />}>
            <ProductItem />
          </Suspense>
        } />
        <Route path="/allproducts" element={
          <Suspense fallback={<LoadingSpinner />}>
            <AllProducts />
          </Suspense>
        } />
        <Route path="/wishlist" element={
          <Suspense fallback={<LoadingSpinner />}>
            {/* <ProtectedRoute> */}
              <WishList />
            {/* </ProtectedRoute> */}
          </Suspense>
        } />
        <Route path="/cart" element={
          <Suspense fallback={<LoadingSpinner />}>
            {/* <ProtectedRoute> */}
              <Cart />
            {/* </ProtectedRoute> */}
          </Suspense>
        } />
        <Route path="/checkout" element={
          <Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          </Suspense>
        } />
        <Route path="/myaccount" element={
          <Suspense fallback={<LoadingSpinner />}>
            {/* <ProtectedRoute> */}
              <MyAcount />
            {/* </ProtectedRoute> */}
          </Suspense>
        } />
        <Route path="/category/:category" element={
          <Suspense fallback={<LoadingSpinner />}>
            <ProductsCategory />
          </Suspense>
        } />
      </Route>
    )
  )

  return (
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <ToastProvider>
            <RouterProvider router={root} />
            <ToastNotifications />
          </ToastProvider>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
