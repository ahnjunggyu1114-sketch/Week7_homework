
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from './pages/MainPage'
import Payment from './pages/Payment'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Complete from './pages/Complete'
import useAuthStore from "./stores/useAuthStore";


function App() {

  const user = useAuthStore((state) => state.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"   element={user ? <MainPage /> : <Navigate to="/login" replace />} />
        <Route path="/payment" element={user ? <Payment /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/complete" element={user ? <Complete /> : <Navigate to="/login" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App