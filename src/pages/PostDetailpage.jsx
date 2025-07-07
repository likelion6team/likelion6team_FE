import React from 'react';
import CommentSection from '../components/CommentSection';
import PostActions from '../components/PostActions';

export default function PostDetailPage() {
  const postId = 1; 

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h2>게시글 제목</h2>
      <p>게시글 내용...</p>

      <PostActions postId={postId} />
      <CommentSection postId={postId} />
    </div>
  );
}
