import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage'
import Payment from './pages/Payment'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App