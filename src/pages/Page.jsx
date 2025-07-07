// src/pages/Page.jsx
import React from "react";

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
          <button className="write-btn">✏️ 글쓰기</button>
        </div>
      </div>

      <style>{`
        .page-container {
          max-width: 1200px;
          margin: 60px auto;
          padding: 40px 24px;
          font-family: 'Segoe UI', sans-serif;
          color: #1f2937;
        }

        .intro-section {
          margin-bottom: 40px;
          text-align: left;
        }

        .title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #555;
        }

        .post-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .post-card {
          background-color: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: all 0.2s ease;
        }

        .post-card:hover {
          background-color: #f9fafb;
          transform: translateY(-2px);
        }

        .post-card h2 {
          margin: 0 0 8px;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .post-card p {
          margin: 0;
          color: #6b7280;
          font-size: 0.95rem;
        }

        .write-btn-wrap {
          text-align: right;
          margin-top: 40px;
        }

        .write-btn {
          background-color: #3b82f6;
          color: white;
          border: none;
          padding: 12px 20px;
          font-size: 1rem;
          font-weight: 500;
          border-radius: 8px;
          cursor: pointer;
        }

        .write-btn:hover {
          background-color: #2563eb;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2rem;
          }
          .post-card h2 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
}

export default Page;
