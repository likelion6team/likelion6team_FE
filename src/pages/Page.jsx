// src/pages/Page.jsx
import React from "react";
import { Link } from 'react-router-dom';

function Page() {
  return (
    <>
      <div className="page-container">
        <h1 className="page-title">🧑‍💻 개발자 커뮤니티</h1>
        <p className="page-desc">자유롭게 글을 쓰고 정보를 공유해보세요!</p>

        <div className="post-card">
          <h2>[질문] useEffect가 뭐예요?</h2>
          <p>작성자: 익명 | 3시간 전</p>
        </div>
        <div className="post-card">
          <h2>[공유] 깃허브 블로그 만들기 정리</h2>
          <p>작성자: byul227 | 6시간 전</p>
        </div>
        <div className="post-card">
          <h2>[스터디] 리액트 스터디 부원 모집</h2>
          <p>작성자: jeongneung2052 | 6시간 전</p>
        </div>

       <div className="button-area">
  <Link to="/post">
    <button className="write-btn">✏️ 글쓰기</button>
  </Link>
</div>
      </div>

      <style>{`
        .page-container {
          max-width: 800px;
          margin: 40px auto;
          padding: 20px;
        }

        .page-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 8px;
          color: #1e293b;
        }

        .page-desc {
          font-size: 1rem;
          color: #555;
          margin-bottom: 30px;
        }

        .post-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 20px;
          background-color: #fafafa;
          transition: 0.2s;
        }

        .post-card:hover {
          background-color: #f0f8ff;
          cursor: pointer;
        }

        .post-card h2 {
          margin: 0 0 8px;
          font-size: 1.2rem;
        }

        .post-card p {
          margin: 0;
          color: #666;
          font-size: 0.9rem;
        }

        .button-area {
          text-align: right;
          margin-top: 30px;
        }

        .write-btn {
          background-color: #2563eb;
          color: white;
          border: none;
          padding: 10px 16px;
          font-size: 1rem;
          border-radius: 6px;
          cursor: pointer;
        }

        .write-btn:hover {
          background-color: #1d4ed8;
        }
      `}</style>
    </>
  );
}

export default Page;
