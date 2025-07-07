import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">DevTalk 💬</Link>
          <nav className="nav">
            <Link to="/">홈</Link>
            <Link to="/post">글쓰기</Link>
            <Link to="/mypage">마이페이지</Link>
            <Link to="/login">로그인</Link>
          </nav>
        </div>
      </header>

      <style>{`
        .header {
          background-color: #1e293b;
          padding: 16px 32px;
          color: white;
          position: sticky;
          top: 0;
          z-index: 999;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 2rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
        }

        .nav {
          display: flex;
        }

        .nav a {
          margin-left: 32px;
          color: white;
          text-decoration: none;
          font-size: 1.15rem;
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav a:hover {
          text-decoration: underline;
          color: #60a5fa;
        }
      `}</style>
    </>
  );
}

