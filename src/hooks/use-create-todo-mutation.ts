import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from '@/app/constants/query-key';
import { createTodo } from '@/app/services/todo-service';

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TODOS] });
    },
    onError: (error) => {
      alert('추가 실패 ' + error.message);
    },
  });
};
