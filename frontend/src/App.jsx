import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import AuthForm from './components/auth/Form'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex felx-col overflow-hidden bg-white'>
          <Routes>
            <Route path='/auth' element={<AuthForm/>}>
              <Route path='Login' element={<Login/>}/>
              <Route path='Register' element={<Register/>}/>
            </Route>
          </Routes>
      </div>
    </>
  )
}

export default App
