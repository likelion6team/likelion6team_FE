import React from 'react';
import PostForm from '../post/Post.jsx';
import { submitPost } from '../post/Post.js';
import LikeButton from '../components/LikeButton';
import CommentSection from '../components/CommentSection';

const PostPage = () => {
  const handlePostSubmit = async (data) => {
    try {
      await submitPost(data);
      alert('게시글이 성공적으로 작성되었습니다.');
    } catch (error) {
      alert('게시글 작성 실패');
    }
  };

  return (
    <div style={{ maxWidth: '800px', padding: '2rem' }}>
      <PostForm onSubmit={handlePostSubmit} />
      <LikeButton />
      <CommentSection />
    </div>
    

  );
};

export default PostPage;
