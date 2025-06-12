import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from '@/app/constants/query-key';
import { updateTodo } from '@/app/services/todo-service';

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TODOS] });
    },
    onError: (error) => {
      alert('수정 실패 ' + error.message);
    },
  });
};
