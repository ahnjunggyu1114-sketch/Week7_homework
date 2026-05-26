import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage'
import Payment from './pages/Payment'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App