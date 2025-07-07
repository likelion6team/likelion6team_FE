import axios from 'axios';

export const submitPost = async ({ title, content }) => {
  try {
    const response = await axios.post('http://localhost:8000/api/v1/posts', { title, content });
    return response.data;
  } catch (error) {
    console.error('게시글 작성 실패:', error);
    throw error;
  }
};
