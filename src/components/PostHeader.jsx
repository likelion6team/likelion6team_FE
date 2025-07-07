import React from 'react';

export default function PostHeader({ author, time, title, content }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <p style={{ fontWeight: 'bold' }}>{author}</p>
      <p style={{ color: '#888', fontSize: '12px' }}>{time}</p>
      <h3>{title}</h3>
      <p style={{ whiteSpace: 'pre-line' }}>{content}</p>
    </div>
  );
}
