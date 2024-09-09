import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Calendar from './components/Calendar'
import Sidebar from './components/Sidebar'
import './index.css'
import moment from 'moment'

function App() {
  // const events = [
  //   {
  //     start: moment("2024-09-09T12:00:00").toDate(),
  //     end: moment("2024-09-09T01:00:00").toDate(),
  //     title: "Event 1"
  //   }
  // ]
  return (
    <div className='font-euclid bg-neutral-200 antialiased flex gap-4 overflow-hidden'>
      <Router>
        <aside>
          <Sidebar />
        </aside>
        <main className='w-full'>
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
