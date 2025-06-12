import { Todo } from '../types/todo';

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
  return (
    <li>
      <p>
        <strong>제목:</strong> {todo.title}
      </p>
      <p>
        <strong>완료 여부:</strong> {todo.completed ? '✅ 완료' : '❌ 미완료'}
      </p>
    </li>
  );
};

export default TodoItem;
