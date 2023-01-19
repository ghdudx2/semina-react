import React from "react";


export default function Login() {

    return (
        <div className="page">
            <div className="title">
                회원가입
            </div>
            <div className="content">
                <div className="inputTitle">아이디</div>
                <div className="inputWrap">
                    <input
                        type="text"
                        className="input"
                        placeholder="아이디 입력"
                    />
                </div>

                <div style={{ marginTop: "26px" }} className="inputTitle">비밀번호</div>
                <div className="inputWrap">
                    <input
                        type="password"
                        className="input"
                        placeholder="비밀번호 입력"
                    />
                </div>
                <div style={{ marginTop: "26px" }} className="inputTitle">비밀번호 확인</div>
                <div className="inputWrap">
                    <input
                        type="password"
                        className="input"
                        placeholder="비밀번호 재입력"
                    />
                </div>
            </div>
            <div>
                <button className="bottomButton">회원가입</button>
            </div>
        </div>
    )
}