import { Routes, Route } from 'react-router-dom'
import { Home, Login, Secret, Signup, Logout } from '@/pages'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/logout' element={<Logout />} />
    </Routes>
  )
}

export default RoutesIndex
