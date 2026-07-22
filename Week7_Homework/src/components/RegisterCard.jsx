import { useState } from "react";
import { signup } from "../apis/auth";
import { useNavigate } from "react-router-dom";

const RegisterCard = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [buttonOn, setButtonOn] = useState(false);

    const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?`~]).{8,16}$/;
        /* ^                                            : 문자열 시작         */
        /*(?=.*[A-Za-z])                                : 영문자 한개 이상     */
        /*(?=.*\d)                                      : 숫자 한개 이상      */
        /*(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?`~])  : 특수문자 한개 이상    */
        /*.{8,16}                                       : 8~16자리          */
        /* $                                            : 문자열 끝           */

    const handleRegister = async () => {
        if (!name || !email || !password || !confirmPassword) {
            alert("모든 값을 입력해주세요.");
            return;
        }
        if (!passwordRegex.test(password)) {
            alert("비밀번호는 8~16자이며, 숫자/영문/특수문자를 각각 1개 이상 포함해야 합니다.");
            return;
        }
        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        try {
            const result = await signup({ email, password, name });

            if (!result.success) {
                alert(result.message);
                return;
            }
            alert("회원가입 성공");
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            navigate("/login", { replace: true });
        } catch (error) {
            if (error.response?.data?.message) {
                alert(error.response.data.message);
            } else {
                alert("회원가입 중 오류가 발생했습니다.");
            }
        }
    };
    
    const checkButtonOn = (nextName, nextEmail, nextPassword, nextConfirmPassword) => {
        if (nextName && nextEmail && nextPassword && nextConfirmPassword) {
            setButtonOn(true);
        } else {
            setButtonOn(false);
        }
    };

    return (
        <div className="flex flex-col gap-[64px] bg-white justify-center rounded-[20px] border border-[#CAC8C8] px-[20px] pt-[80px] pb-[120px] shadow-[0_0_10px_0_rgba(0,0,0,0.11)] ">
            <h1 className="flex justify-center items-center text-[36px] font-bold text-[#F0485F]">어쩌구저쩌구</h1>
            

            <div className="p-[16px] flex flex-col gap-[48px]">
                <div className="">
                    <p className="text-[20px] pb-[12px]">아이디</p>
                    <input
                        className="w-[280px] dt:w-[533px] px-[16px] py-[16px] text-black placeholder:text-[#CAC8C8] text-[20px] border border-[#CAC8C8] rounded-[5px]"
                        type="text"
                        placeholder="아이디를 입력하세요"
                        value={name}
                        onChange={(e) => {
                            const value = e.target.value;
                            setName(e.target.value)
                            checkButtonOn(value, email, password, confirmPassword);
                        }}
                    />
                </div>
                
                <div>
                    <p className="text-[20px] pb-[12px]">이메일</p>
                    <input
                        className="w-[280px] dt:w-[533px] px-[16px] py-[16px] text-black placeholder:text-[#CAC8C8] text-[20px] border border-[#CAC8C8] rounded-[5px]"
                        type="email"
                        placeholder="이메일을 입력하세요"
                        value={email}
                        onChange={(e) => {
                            const value = e.target.value;
                            setEmail(value);
                            checkButtonOn(name, value, password, confirmPassword);
                        }}
                    />
                </div>

                <div className="">
                    <p className="text-[20px] pb-[12px]">비밀번호</p>
                    <input
                        className="w-[280px] dt:w-[533px] px-[16px] py-[16px] text-black placeholder:text-[#CAC8C8] text-[20px] border border-[#CAC8C8] rounded-[5px]"
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        value={password}
                        onChange={(e) => {
                            const value = e.target.value;
                            setPassword(e.target.value);
                            checkButtonOn(name, email, value, confirmPassword);
                        }}
                    />
                </div>

                <div className="">
                    <p className="text-[20px] pb-[12px]">비밀번호 확인</p>
                    <input
                        className="w-[280px] dt:w-[533px] px-[16px] py-[16px] text-black placeholder:text-[#CAC8C8] text-[20px] border border-[#CAC8C8] rounded-[5px]"
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        value={confirmPassword}
                        onChange={(e) => {
                            const value = e.target.value;
                            setConfirmPassword(e.target.value);
                            checkButtonOn(name, email, password, value);
                        }}
                    />
                </div>
            </div>

            
            <div className="flex justify-center">
                <button 
                    className={`w-[250px] px-[64px] py-[16px] text-[20px] rounded-[16px] cursor-pointer ${
                        buttonOn
                        ? "bg-[#F0485F] text-white "
                        : "bg-[#F7F7F7] text-[#858585] "
                    }`}
                    type="button"
                    onClick={handleRegister}
                >
                    회원가입하기
                </button>
            </div>
        </div>
    );
};

export default RegisterCard;