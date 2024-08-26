import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FoodLottery from './components/FoodLottery'
import Home from './components/Home'
import ErrorPage from './components/EorrPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/foodlottery' element={<FoodLottery/>}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
