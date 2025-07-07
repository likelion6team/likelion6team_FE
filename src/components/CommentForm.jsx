import React, { useState } from 'react';

const CommentForm = ({ onAddComment }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) {
      alert('댓글을 입력해주세요.');
      return;
    }
    onAddComment(content);
    setContent('');
  };


    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <input
        type="text"
        placeholder="댓글을 입력하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          marginBottom: '10px'
        }}
      />
      <button type="submit" style={{
        width: '100%',
        padding: '10px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        댓글 작성
      </button>
    </form>
  );
};

export default CommentForm;
