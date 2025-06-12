'use client';

import { useCreateTodoMutation } from '@/hooks/use-create-todo-mutation';
import React, { useState } from 'react';

const AddTodoForm = () => {
  const [title, setTitle] = useState('');
  const { mutate, isPending } = useCreateTodoMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('내용이 비어있습니다.');
      return;
    }

    mutate(
      { title, completed: false },
      {
        onSuccess: () => {
          setTitle('');
        },
      }
    );
  };

  const isDisable = isPending || !title.trim();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='할 일 입력'
        value={title}
        onChange={(e) => {
          if (isDisable && e.target.value === ' ') return;
          setTitle(e.target.value);
        }}
        disabled={isPending}
      />

      <button type='submit' disabled={isDisable}>
        {isPending ? '추가 중...' : '추가'}
      </button>
    </form>
  );
};

export default AddTodoForm;
