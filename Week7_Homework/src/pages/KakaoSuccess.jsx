import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import { axiosInstance } from "../services/axiosInstance";

export default function KakaoSuccess() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const handleSuccess = async () => {
      // URL에서 accessToken 꺼내기
      // 예: /oauth/success?accessToken=eyJhbG...
      const params = new URLSearchParams(window.location.search);
      const token = params.get("accessToken");

      if (!token) {
        navigate("/login");
        return;
      }

      // 토큰 로컬스토리지에 저장
      localStorage.setItem("accessToken", token);

      // 내 정보 조회해서 유저 정보 저장
      const response = await axiosInstance.get("/api/users/me");
      const user = response.data.data;
      setUser(user);

      // 홈으로 이동
      navigate("/");
    };

    handleSuccess();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg">로그인 중...</p>
    </div>
  );
}