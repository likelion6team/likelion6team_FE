import React, { useState } from 'react';

export default function PostActions({ likes, onLike }) {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(prev => !prev);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px', marginTop: '20px' }}>
      <button onClick={onLike}>❤️ 공감 {likes}</button>
      <button onClick={toggleComments}>💬 댓글</button>
    </div>
  );
}
