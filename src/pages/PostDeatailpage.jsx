import React, { useState } from 'react';
import PostHeader from '../components/PostHeader';
import PostActions from '../components/PostActions';
import CommentSection from '../components/CommentSection';

export default function PostDetailPage() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <PostHeader
        author="익명"
        time="07/07 16:10"
        title="안녕하세요 감사합니다"
        content="잘있어요\n다시 만나요"
      />
      <PostActions likes={likes} onLike={handleLike} />
      <CommentSection />
    </div>
  );
}
