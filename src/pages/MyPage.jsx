// src/pages/MyPage.jsx
import React from "react";

function MyPage() {
  const myPosts = [
    { id: 1, title: "[질문] useState가 뭔가요?", time: "2시간 전" },
    { id: 2, title: "[공유] 타입스크립트 정리", time: "어제" },
  ];

  return (
    <>
      <div className="mypage-container">
        <h1 className="mypage-title">🙋‍♀️ 마이페이지</h1>
        <p className="mypage-sub">내가 작성한 글 목록입니다.</p>

        <ul className="post-list">
          {myPosts.map(post => (
            <li key={post.id} className="post-item">
              <strong>{post.title}</strong>
              <span>{post.time}</span>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .mypage-container {
          max-width: 1200px;
          margin: 60px auto;
          padding: 30px;
        }

        .mypage-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .mypage-sub {
          font-size: 1rem;
          color: #666;
          margin-bottom: 30px;
        }

        .post-list {
          list-style: none;
          padding: 0;
        }

        .post-item {
          padding: 16px;
          margin-bottom: 16px;
          background-color: #f9fafb;
          border: 1px solid #ddd;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .post-item strong {
          font-size: 1.1rem;
        }

        .post-item span {
          font-size: 0.9rem;
          color: #555;
        }
      `}</style>
    </>
  );
}

export default MyPage;