'use client';

import React from 'react';
import TodoItem from './todo-item';
import { useGetTodosQuery } from '@/hooks/use-get-todos-query';
import { COMPLETION_STATUS } from '../constants/query-key';

const TodoList = () => {
  const {
    data: todos,
    isPending,
    error,
  } = useGetTodosQuery(COMPLETION_STATUS.ALL);

  if (isPending) return <div>로딩중입니다...</div>;
  if (error) return <div>에러가 발생했습니다. {error.message}</div>;

  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
