import React, { useState } from 'react';

function CommentSection() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <form onSubmit={handleSubmit}>
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글을 입력하세요"
          style={{ padding: '0.5rem', width: '70%' }}
        />
        <button type="submit" style={{ padding: '0.5rem' }}>등록</button>
      </form>
      <ul style={{ marginTop: '1rem' }}>
        {comments.map((c, i) => (
          <li key={i}>💬 {c}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommentSection;
