import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Calendar from './components/Calendar'
import Sidebar from './components/Sidebar'
import './index.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='font-euclid bg-neutral-200 antialiased flex overflow-hidden'>
      <Router>
        <aside>
          <Sidebar />
        </aside>
        <main className='w-full'>
          <Navbar />
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
