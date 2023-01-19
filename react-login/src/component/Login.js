import React from "react";
import { useState } from "react";
import axios from "axios"


export default function Login() {
    const [id, setId] = useState("")
    const [pw, setPw] = useState("")

    const btnClick = () => {
        axios({
            method:"post",
            url:"http://210.223.18.224:8003/auth/local",
            data: {
                email: id,
                password: pw,
            }
        }).then(() => {
            alert("로그인 성공")
        }).catch(() => {
            console.log("err")
        })
    }

    const emptyIdCheck = () => {
        if (id <= 0) {
            alert("아이디를 입력해주세요")
        }
    }

    const emptyPwCheck = () => {
        if (pw <= 0) {
            alert("비밀번호를 입력해주세요")
        }
    }

    return (
        <div className="page">
            <div className="title">
                아이디와 비밀번호를 입력하세요
            </div>
            <div className="content">
                <div className="inputTitle">아이디</div>
                <div className="inputWrap">
                    <input
                        type="text"
                        className="input"
                        placeholder="아이디 입력"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>

                <div style={{ marginTop: "26px" }} className="inputTitle">비밀번호</div>
                <div className="inputWrap">
                    <input
                        type="password"
                        className="input"
                        placeholder="비밀번호 입력"
                        value={pw}
                        onChange={(e) => setPw(e.target.value)} />
                </div>
            </div>
            <div>
                <button onClick={() => {
                    emptyIdCheck();
                    emptyPwCheck();
                    btnClick();
                }} className="bottomButton">확인</button>
            </div>
        </div>
    )
}