import React, { useState } from 'react';
import { addLike, removeLike } from '../api/apiService';

export default function PostActions({ postId }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = async () => {
    try {
      if (!liked) {
        await addLike(postId);
        setLiked(true);
        setLikeCount(likeCount + 1);
      } else {
        await removeLike(postId);
        setLiked(false);
        setLikeCount(Math.max(likeCount - 1, 0));
      }
    } catch (error) {
      alert('좋아요 처리 실패');
      console.error(error);
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={handleLikeClick}>
        {liked ? '❤️ 좋아요 취소' : '🤍 좋아요'} {likeCount}
      </button>
    </div>
  );
}
