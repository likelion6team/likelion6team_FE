import React, { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);

  return (
    <button onClick={handleLike} style={{ marginTop: '1rem' }}>
      ❤️ {likes} 좋아요
    </button>
  );
}

export default LikeButton;
