import { QueryClient, dehydrate } from '@tanstack/react-query';
import { HydrationBoundary } from '@tanstack/react-query';
import TodoList from './components/todo-list';
import { getTodos } from './services/todo-service';
import { COMPLETION_STATUS, QUERY_KEY } from './constants/query-key';
import AddTodoForm from './components/add-todo-form';

const Page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.TODOS, COMPLETION_STATUS.ALL],
    queryFn: async () => getTodos(COMPLETION_STATUS.ALL),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AddTodoForm />
      <TodoList />
    </HydrationBoundary>
  );
};

export default Page;
