import { URL } from '../constants/url';

export const getTodos = async () => {
  try {
    const res = await fetch(URL.TODOS);

    if (!res.ok) {
      throw new Error('서버 응답 오류: ' + res.status);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
