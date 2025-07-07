
import axios from 'axios';

export const submitPost = async ({ title, content }) => {
  try {
    const response = await axios.post('/api/posts', { title, content });
    return response.data;
  } catch (error) {
    console.error('게시글 작성 실패:', error);
    throw error;
  }
};
