import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '@/pages/home'
import Gallery from '@/pages/activitiy/gallery'
import NavigationBar from '@/components/navbar/navbar'
function App() {
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/activity/gallery' element={<Gallery/>}/>
      </Routes>
      </div>
    
  )
}

export default App
