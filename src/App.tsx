
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Volunteer from './Pages/Volunteer'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = { <Home/>}/>
        <Route path='Volunteer' element = { <Volunteer/>}/>
        <Route/>
      </Routes>
    </div>
  )
}
