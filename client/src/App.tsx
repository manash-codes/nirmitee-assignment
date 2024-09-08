import Sidebar from './components/Sidebar'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div className='font-euclid bg-neutral-200 antialiased flex'>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
