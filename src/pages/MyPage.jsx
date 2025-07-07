// src/pages/MyPage.jsx
import React, { useState, useEffect } from "react";

function MyPage() {
  const [nickname, setNickname] = useState("username");
  const [editingNickname, setEditingNickname] = useState(false);

  useEffect(() => {
    const savedNickname = localStorage.getItem("nickname");
    if (savedNickname) {
      setNickname(savedNickname);
    }
  }, []);

  const saveNickname = () => {
    localStorage.setItem("nickname", nickname);
    setEditingNickname(false);
    alert("닉네임이 저장되었습니다!");
  };

  const posts = [
    { id: 1, title: "[질문] useState가 뭔가요?", time: "2시간 전" },
    { id: 2, title: "[공유] 타입스크립트 정리", time: "어제" },
  ];

  return (
    <>
      <div className="mypage-container">
        <h1 className="mypage-title">🙋‍♀️ 마이페이지</h1>

        <section className="profile-section">
          <h2>👤 내 정보</h2>

          <div className="field">
            <label>닉네임</label>
            {editingNickname ? (
              <>
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
                <button onClick={saveNickname}>저장</button>
              </>
            ) : (
              <>
                <span>{nickname}</span>
                <button onClick={() => setEditingNickname(true)}>수정</button>
              </>
            )}
          </div>

          <div className="field">
            <label>비밀번호 변경</label>
            <input type="password" placeholder="현재 비밀번호" />
            <input type="password" placeholder="새 비밀번호" />
            <button>비밀번호 변경</button>
          </div>
        </section>

        <section className="post-section">
          <h2>📝 내가 작성한 글</h2>
          {posts.map((post) => (
            <div key={post.id} className="post-item">
              <div>
                <strong>{post.title}</strong>
                <span>{post.time}</span>
              </div>
              <button className="edit-btn">수정</button>
            </div>
          ))}
        </section>
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
          margin-bottom: 30px;
        }

        section {
          margin-bottom: 40px;
        }

        h2 {
          font-size: 1.2rem;
          margin-bottom: 16px;
          color: #1f2937;
        }

        .field {
          margin-bottom: 20px;
        }

        .field label {
          display: block;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .field input {
          display: block;
          padding: 10px;
          width: 100%;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }

        .field span {
          font-size: 1rem;
          margin-right: 10px;
        }

        .field button {
          background-color: #3b82f6;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
        }

        .post-item {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f9fafb;
        }

        .post-item strong {
          font-size: 1.1rem;
        }

        .post-item span {
          display: block;
          font-size: 0.9rem;
          color: #666;
        }

        .edit-btn {
          background-color: #10b981;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
        }

        .edit-btn:hover {
          background-color: #059669;
        }
      `}</style>
    </>
  );
}

export default MyPage;
