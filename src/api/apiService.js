import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';  


export const createComment = async (postId, content) => {
  const response = await axios.post(`${BASE_URL}/comments`, {
    postId,
    content
  });
  return response.data;
};


export const deleteComment = async (commentId) => {
  const response = await axios.delete(`${BASE_URL}/comments/${commentId}`);
  return response.data;
};

export const addLike = async (postId) => {
  const response = await axios.post(`${BASE_URL}/likes/${postId}`);
  return response.data;
};


export const removeLike = async (postId) => {
  const response = await axios.delete(`${BASE_URL}/likes/${postId}`);
  return response.data;
};
