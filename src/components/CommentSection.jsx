import React, { useState } from 'react';

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleAddComment = () => {
    if (!inputText.trim()) return;
    const newComment = { id: Date.now(), text: inputText };
    setComments([newComment, ...comments]);
    setInputText('');
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <input
        type="text"
        placeholder="댓글을 입력하세요"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <button onClick={handleAddComment} style={{ width: '100%', padding: '10px' }}>
        댓글 작성
      </button>

      <div style={{ marginTop: '20px' }}>
        {comments.length === 0 ? (
          <p style={{ color: '#888' }}>댓글이 없습니다.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} style={{ padding: '10px', border: '1px solid #eee', borderRadius: '4px', marginBottom: '8px' }}>
              {comment.text}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
