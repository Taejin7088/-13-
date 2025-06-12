import { COMPLETION_STATUS, CompletionStatus } from '../constants/query-key';
import { URL } from '../constants/url';
import { Todo } from '../types/todo';

export const getTodosUrl = (status: CompletionStatus): string => {
  switch (status) {
    case COMPLETION_STATUS.COMPLETED:
      return `${URL.TODOS}?completed=true`;
    case COMPLETION_STATUS.INCOMPLETE:
      return `${URL.TODOS}?completed=false`;
    case COMPLETION_STATUS.ALL:
    default:
      return URL.TODOS;
  }
};

export const getTodos = async (
  completionStatus: CompletionStatus
): Promise<Todo[]> => {
  const apiUrl = getTodosUrl(completionStatus);

  try {
    const res = await fetch(apiUrl, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error('서버 응답 오류: ' + res.status);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const createTodo = async (newTodo: Omit<Todo, 'id'>): Promise<Todo> => {
  try {
    const res = await fetch(URL.TODOS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });

    if (!res.ok) {
      throw new Error('서버 응답 오류: ' + res.status);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (todo: Todo): Promise<Todo> => {
  try {
    const res = await fetch(`${URL.TODOS}/${todo.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });

    if (!res.ok) {
      throw new Error('서버 응답 오류: ' + res.status);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
