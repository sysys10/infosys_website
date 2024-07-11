import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/home'
import Gallery from '@/pages/activitiy/gallery'
import NavigationBar from '@/components/navbar/navbar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about'>
          <Route path='organization' />
        </Route>
        <Route path='/activity'>
          <Route path='gallery' element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
