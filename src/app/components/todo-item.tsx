import { useState } from 'react';
import { Todo } from '../types/todo';
import { useUpdateTodoMutation } from '@/hooks/use-update-todo-mutation';

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
  const [title, setTitle] = useState(todo.title);
  const { mutate: update } = useUpdateTodoMutation();

  const handleToggle = () => {
    update({ ...todo, completed: !todo.completed });
  };

  const handleSave = () => {
    update({ ...todo, title });
  };

  return (
    <li className='border border-gray-300 rounded p-4 flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center'>
      <div className='flex-1 space-y-2'>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='w-full border border-gray-200 rounded px-2 py-1'
        />
        <p>
          <strong>제목:</strong> {todo.title}
        </p>
        <p className='flex items-center gap-2'>
          <strong>완료 여부:</strong>
          <button
            onClick={handleToggle}
            className='text-sm bg-gray-100 px-2 py-1 rounded border'
          >
            {todo.completed ? '✅ 완료' : '❌ 미완료'}
          </button>
        </p>
      </div>
      <button
        onClick={handleSave}
        className='mt-2 sm:mt-0 self-start sm:self-center bg-green-500 text-white px-3 py-1 rounded'
      >
        저장
      </button>
    </li>
  );
};

export default TodoItem;
