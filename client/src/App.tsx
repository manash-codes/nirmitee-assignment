import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Calendar from './components/Calendar'
import Sidebar from './components/Sidebar'
import './index.css'
import Navbar from './components/Navbar'
import EventList from './components/EventList'

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
            <Route path="/event-list" element={<EventList />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
