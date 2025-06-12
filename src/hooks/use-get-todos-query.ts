import { QUERY_KEY } from '@/app/constants/query-key';
import { getTodos } from '@/app/services/todo-service';
import { Todo } from '@/app/types/todo';
import { useQuery } from '@tanstack/react-query';

export const useGetTodosQuery = () => {
  return useQuery<Todo[]>({
    queryKey: [QUERY_KEY.TODOS],
    queryFn: getTodos,
  });
};
