import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import { axiosInstance } from "../services/axiosInstance";

export default function KakaoSuccess() {
  const navigate = useNavigate();

  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const handleSuccess = async () => {
      try {
        // URL에서 accessToken 꺼내기
        // 예: /oauth/success?accessToken=eyJhbG...
        const params = new URLSearchParams(window.location.search);
        const token = params.get("accessToken");

        if (!token) {
          navigate("/login", { replace: true });
          return;
        }


          // 먼저 Zustand에 토큰 저장
          setAccessToken(token);
          // 토큰 저장 후 내 정보 조회
          const response = await axiosInstance.get("/api/users/me");
          const user = response.data.data;

          setUser(user);

          navigate("/", { replace: true });
      } catch (error) {
          console.error(
            "카카오 로그인 처리 실패:",
            error.response?.data || error
          );
          alert("카카오 로그인 처리 중 오류가 발생했습니다.");
          navigate("/login", { replace: true });
        }
      };

      handleSuccess();
    }, [navigate, setAccessToken, setUser]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg">로그인 중...</p>
    </div>
  );
}