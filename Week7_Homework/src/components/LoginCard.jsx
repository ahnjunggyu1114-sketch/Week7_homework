import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuthStore from "../stores/useAuthStore";
import { login } from "../apis/auth";



const LoginCard = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [buttonOn, setButtonOn] = useState(false);

    const navigate = useNavigate();
    const setAccessToken = useAuthStore((state) => state.setAccessToken);

    const handleClickRegister = () => {
        navigate("/register");
    };

    const checkButtonOn = (nextEmail, nextPassword) => {
        if (nextEmail && nextPassword) {
        setButtonOn(true);
        } else {
        setButtonOn(false);
        }
    };

    const handleLogin = async () => {
        try {
            const result = await login({ email, password });
            console.log("로그인 응답 전체:", result);
            console.log("토큰 값:", result?.data?.accessToken);

            if (!result.success) {
            alert(result.message);
            return;
            }

            const accessToken = result.data.accessToken;
            setAccessToken(accessToken);

            console.log("저장 직전 accessToken:", accessToken);

            alert("로그인 성공");
            navigate("/");
        } catch (error) {
            console.log("로그인 에러:", error.response?.data || error);
            alert("로그인 중 오류가 발생했습니다.");
        }
    };
    
    return (
        <div className="flex flex-col gap-[52px] bg-white justify-center rounded-[20px] border border-[#CAC8C8] px-[20px] pt-[80px] pb-[96px] shadow-[0_0_10px_0_rgba(0,0,0,0.11)] ">
            <h1 className="flex justify-center items-center text-[36px] font-bold text-[#F0485F]">어쩌구저쩌구</h1>
            
            <div className="dt:w-[100px] dt:h-[100px]"></div>

            <div className="p-[16px] flex flex-col gap-[48px]">
                <div className="">
                    <p className="text-[20px] pb-[12px]">아이디(이메일)</p>
                    <input
                        className="w-[280px] dt:w-[533px] px-[16px] py-[16px] text-[#CAC8C8] text-[20px] border border-[#CAC8C8] rounded-[5px]"
                        type="text"
                        placeholder="아이디(이메일)를 입력하세요"
                        onChange={(e) => {
                        const value = e.target.value;
                        setEmail(value);
                        checkButtonOn(value, password);
                        }}
                    />
                </div>

                <div className="">
                    <p className="text-[20px] pb-[12px]">비밀번호</p>
                    <input
                        className="w-[280px] dt:w-[533px] px-[16px] py-[16px] text-[#CAC8C8] text-[20px] border border-[#CAC8C8] rounded-[5px]"
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        value={password}
                        onChange={(e) => {
                            const value = e.target.value;
                            setPassword(value);
                            checkButtonOn(email, value);
                        }}  
                    />
                </div>
            </div>

            <div className="flex flex-col dt:flex-row justify-center items-center gap-[4px]">
                <span className="text-[#CAC8C8] text-[15px]">계정이 없나요? </span>
                <button 
                    className="text-[#F0485F] text-[15px] cursor-pointer" 
                    type="button"
                    onClick={handleClickRegister}
                >
                회원가입 하기
                </button>
            </div>
            
            <div className="flex justify-center">
                <button 
                    className={`w-[190px] px-[64px] py-[16px] text-[20px] rounded-[16px] cursor-pointer ${
                        buttonOn
                        ? "bg-[#F0485F] text-white "
                        : "bg-[#F7F7F7] text-[#858585] "
                    }`}
                    type="button"
                    onClick={handleLogin}
                >
                    로그인
                </button>
            </div>
        </div>
    );
};

export default LoginCard;