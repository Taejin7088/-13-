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
    <li>
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={handleSave}>저장</button>
      </div>
      <p>
        <strong>제목:</strong> {todo.title}
      </p>
      <p>
        <strong>완료 여부:</strong>
        <button onClick={handleToggle}>
          {todo.completed ? '✅ 완료' : '❌ 미완료'}
        </button>
      </p>
    </li>
  );
};

export default TodoItem;
