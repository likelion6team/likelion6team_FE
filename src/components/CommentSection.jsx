import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { createComment, deleteComment } from '../api/apiService';

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);

  const handleAddComment = async (content) => {
    try {
      const newComment = await createComment(postId, content);
      setComments([newComment, ...comments]);
    } catch (error) {
      alert('댓글 작성 실패');
      console.error(error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await deleteComment(commentId);
      setComments(comments.filter(comment => comment.id !== commentId));
    } catch (error) {
      alert('댓글 삭제 실패');
      console.error(error);
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <CommentForm onAddComment={handleAddComment} />
      <CommentList comments={comments} onDeleteComment={handleDeleteComment} />
    </div>
  );
}
