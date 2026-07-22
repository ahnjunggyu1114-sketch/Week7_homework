import KakaoSuccess from "./pages/KakaoSuccess";
import KakaoFailure from "./pages/KakaoFailure";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from './pages/MainPage'
import Payment from './pages/Payment'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Complete from './pages/Complete'
import useAuthStore from "./stores/useAuthStore";
import Credit from "./pages/Credit";
import Register from "./pages/Register";


function App() {

const accessToken = useAuthStore((state) => state.accessToken);  return (
    <BrowserRouter>
      <Routes>
        <Route path="/oauth/success" element={<KakaoSuccess />} />
        <Route path="/oauth/failure" element={<KakaoFailure />} />
        <Route path="/"   element={accessToken ? <MainPage /> : <Navigate to="/login" replace />} />
        <Route path="/payment" element={accessToken ? <Payment /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={accessToken ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/register" element={accessToken ? <Navigate to="/" replace /> : <Register />} />
        <Route path="/complete" element={accessToken ? <Complete /> : <Navigate to="/login" replace />} />
        <Route path="/credit" element={accessToken ? <Credit /> : <Navigate to="/login" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App