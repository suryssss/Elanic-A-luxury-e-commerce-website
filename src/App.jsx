import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import AuthForm from './components/auth/Form'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Layout from './components/admin/layout'
import AdminDashboard from './pages/admin-view/dashboard'
import AdminProducts from './pages/admin-view/products'
import AdminOrders from './pages/admin-view/orders'
import AdminFeatures from './pages/admin-view/features'
import ShoppingLayout from './pages/shopping-view/layout'
import NotFound from './pages/not-found'
import ShoppingHome from './pages/shopping-view/home'
import ShoppingCheckout from './pages/shopping-view/checkout'
import ShoppingListing from './pages/shopping-view/listing'
import ShoppingAccount from './components/shopping/account'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex felx-col overflow-hidden bg-white'>
          <Routes>
            <Route path='/'/>
            <Route path='/auth' element={<AuthForm/>}>
              <Route path='Login' element={<Login/>}/>
              <Route path='Register' element={<Register/>}/>
            </Route>
            <Route path='/admin' element={<Layout/>}>
              <Route path='dashboard' element={<AdminDashboard/>}/>
              <Route path='products' element={<AdminProducts/>}/>
              <Route path='orders' element={<AdminOrders/>}/>
              <Route path='features' element={<AdminFeatures/>}/>
            </Route>
            <Route path='/shop' element={<ShoppingLayout/>}> 
            <Route path='/shop' element={<ShoppingHome/>}/>
            <Route path='/shop' element={<ShoppingCheckout/>}/>
            <Route path='/shop' element={ShoppingListing}/> 
            <Route path='/shop' element={ShoppingAccount}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </div>
    </>
  )
}

export default App
