import axios from "axios";

// axios 인스턴스 생성
const instance = axios.create({
  baseURL: "https://mutsa.dev.me.kr",
});

// 요청할 때마다 토큰 자동으로 헤더에 추가
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 401 에러 나면 로그인 페이지로 이동
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("accessToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default instance;