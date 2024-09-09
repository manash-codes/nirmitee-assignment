import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import './index.css'

function App() {
  return (
    <div className='font-euclid bg-neutral-200 antialiased flex gap-4 overflow-hidden'>
      <Router>
        <aside>
          <Sidebar />
        </aside>
        <main className='w-full'>
          <Routes>
            <Route path="/" element={<div>Home</div>} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
