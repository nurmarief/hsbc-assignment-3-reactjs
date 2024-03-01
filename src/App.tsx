import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Watch from './pages/Watch'
import Sidebar from './components/Sidebar'
import NotFound from './pages/NotFound'
import Results from './pages/Results'

const App = () => {
  return (
    <div data-theme='light'>
      <Navbar />
      <Sidebar id='universal-sidebar' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/results' element={<Results />} />
        <Route path='/watch' element={<Watch />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App