
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from './pages/MainPage'
import Payment from './pages/Payment'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Complete from './pages/Complete'
import useAuthStore from "./stores/useAuthStore";
import Credit from "./pages/Credit";


function App() {

const accessToken = useAuthStore((state) => state.accessToken);  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"   element={accessToken ? <MainPage /> : <Navigate to="/login" replace />} />
        <Route path="/payment" element={accessToken ? <Payment /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={accessToken ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/complete" element={accessToken ? <Complete /> : <Navigate to="/login" replace />} />
        <Route path="/credit" element={accessToken ? <Credit /> : <Navigate to="/login" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App