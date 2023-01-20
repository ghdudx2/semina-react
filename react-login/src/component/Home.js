import { Link } from "react-router-dom"

export default function Home() {
    <div>
        <div>
            <Link to="/login">
                <button>
                    로그인
                </button>
            </Link>
        </div>
        <div>
            <Link to="/register">
                <button>회원가입</button>
            </Link>
        </div>
    </div>
}