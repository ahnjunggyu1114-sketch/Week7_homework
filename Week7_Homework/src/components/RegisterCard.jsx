const RegisterCard = () => {
    return (
        <div className="flex flex-col gap-[64px] bg-white justify-center rounded-[20px] border border-[#CAC8C8] px-[20px] pt-[80px] pb-[120px] shadow-[0_0_10px_0_rgba(0,0,0,0.11)] ">
            <h1 className="flex justify-center items-center text-[36px] font-bold text-[#F0485F]">어쩌구저쩌구</h1>
            

            <div className="p-[16px] flex flex-col gap-[48px]">
                <div className="">
                    <p className="text-[20px] pb-[12px]">아이디</p>
                    <input
                    className="w-[533px] px-[16px] py-[16px] text-[#CAC8C8] text-[20px] border border-[#CAC8C8] rounded-[5px]"
                    type="text"
                    placeholder="아이디를 입력하세요"
                    />
                </div>

                <div className="">
                    <p className="text-[20px] pb-[12px]">비밀번호</p>
                    <input
                    className="w-[533px] px-[16px] py-[16px] text-[#CAC8C8] text-[20px] border border-[#CAC8C8] rounded-[5px]"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    />
                </div>

                <div className="">
                    <p className="text-[20px] pb-[12px]">비밀번호 확인</p>
                    <input
                    className="w-[533px] px-[16px] py-[16px] text-[#CAC8C8] text-[20px] border border-[#CAC8C8] rounded-[5px]"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    />
                </div>
            </div>

            
            <div className="flex justify-center">
                <button 
                    className=" w-[250px] px-[64px] py-[16px] bg-[#F7F7F7] text-[#858585] text-[20px] rounded-[16px] cursor-pointer" 
                    type="button"
                >
                    회원가입하기
                </button>
            </div>
        </div>
    );
};

export default RegisterCard;