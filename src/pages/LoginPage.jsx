// src/pages/LoginPage.jsx
import React, { useState } from "react";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true); // true → 로그인 / false → 회원가입

  return (
    <>
      <div className="login-container">
        <h1 className="login-title">{isLogin ? "🔐 로그인" : "📝 회원가입"}</h1>
        <p className="login-sub">
          {isLogin ? "계정이 없다면 아래에서 가입해보세요!" : "이미 계정이 있다면 로그인하세요!"}
        </p>

        <form className="login-form">
          {!isLogin && (
            <label>
              닉네임
              <input type="text" placeholder="별명 입력" required />
            </label>
          )}
          <label>
            이메일
            <input type="email" placeholder="email@example.com" required />
          </label>
          <label>
            비밀번호
            <input type="password" placeholder="비밀번호" required />
          </label>

          <button type="submit">{isLogin ? "로그인" : "회원가입"}</button>
        </form>

        <div className="or">또는</div>

        <button className="google-btn">🔵 구글 계정으로 계속하기</button>

        <div className="toggle">
          {isLogin ? (
            <span>
              아직 회원이 아니신가요?{" "}
              <button onClick={() => setIsLogin(false)}>회원가입</button>
            </span>
          ) : (
            <span>
              이미 계정이 있으신가요?{" "}
              <button onClick={() => setIsLogin(true)}>로그인</button>
            </span>
          )}
        </div>
      </div>

      <style>{`
        .login-container {
          max-width: 420px;
          margin: 100px auto;
          padding: 40px;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          text-align: center;
          font-family: 'Segoe UI', sans-serif;
        }

        .login-title {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .login-sub {
          font-size: 1rem;
          color: #666;
          margin-bottom: 30px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 20px;
          text-align: left;
        }

        .login-form label {
          font-size: 0.9rem;
          color: #333;
        }

        .login-form input {
          margin-top: 6px;
          padding: 10px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          width: 100%;
        }

        .login-form button {
          margin-top: 10px;
          background-color: #3b82f6;
          color: white;
          border: none;
          padding: 12px;
          font-size: 1rem;
          border-radius: 8px;
          cursor: pointer;
        }

        .login-form button:hover {
          background-color: #2563eb;
        }

        .or {
          margin: 20px 0;
          font-size: 0.9rem;
          color: #999;
        }

        .google-btn {
          background-color: white;
          border: 1px solid #ccc;
          padding: 10px 16px;
          font-size: 1rem;
          border-radius: 8px;
          cursor: pointer;
        }

        .google-btn:hover {
          background-color: #f5f5f5;
        }

        .toggle {
          margin-top: 20px;
          font-size: 0.9rem;
        }

        .toggle button {
          background: none;
          color: #3b82f6;
          border: none;
          cursor: pointer;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}

export default LoginPage;
