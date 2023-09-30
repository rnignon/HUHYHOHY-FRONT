import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo" onClick={() => navigate("/")}>
          ㅎㅎㅎㅎ
        </div>
        <Link className="header__crews" to="crews">
          크루즈 둘러보기
        </Link>
      </div>
      <div className="header__user">
        <Link className="header__join" to="join">
          회원가입
        </Link>
        <Link className="header__login" to="login">
          로그인
        </Link>
      </div>
      <div className="header__user">
        <Link className="header__mypage" to="mypage">
          나의 크루
        </Link>
        <div>사용자 ID</div>
        <button className="header__logout">로그아웃</button>
      </div>
    </header>
  );
}
