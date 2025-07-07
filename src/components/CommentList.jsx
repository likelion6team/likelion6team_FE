import React from 'react';

const CommentList = ({ comments, onDeleteComment }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      {comments.length === 0 ? (
        <p style={{ color: '#888' }}>댓글이 없습니다.</p>
      ) : (
        comments.map(comment => (
          <div key={comment.id} style={{
            padding: '10px',
            border: '1px solid #eee',
            borderRadius: '4px',
            marginBottom: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span>{comment.content}</span>
            <button
              onClick={() => onDeleteComment(comment.id)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#FF5C5C',
                cursor: 'pointer'
              }}
            >
              삭제
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList;
