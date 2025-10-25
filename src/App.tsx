
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './Pages/Home'
import Volunteer from './Pages/Volunteer'
import { LoadingScreen } from './Components/LoadingScreen'

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Volunteer' element={<Volunteer/>}/>
          <Route/>
        </Routes>
      )}
    </div>
  )
}
