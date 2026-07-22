import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function KakaoFailure() {
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 에러 메시지 꺼내기
    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");

    // 에러 메시지 보여주고 로그인 페이지로 이동
    if (error) {
      alert(`로그인 실패: ${error}`);
    } else {
      alert("로그인에 실패했습니다.");
    }

    navigate("/login");
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg">로그인 실패...</p>
    </div>
  );
}