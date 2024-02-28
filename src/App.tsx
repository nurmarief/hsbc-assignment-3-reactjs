import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Video from './pages/Video'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div data-theme='light'>
      <Navbar />
      <Sidebar id='universal-sidebar' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  )
}

export default App