import { QueryClient, dehydrate } from '@tanstack/react-query';
import { HydrationBoundary } from '@tanstack/react-query';
import TodoList from './components/todo-list';
import { getTodos } from './services/todo-service';
import {
  COMPLETION_STATUS,
  CompletionStatus,
  QUERY_KEY,
} from './constants/query-key';
import AddTodoForm from './components/add-todo-form';
import SelectCompletionStatus from './components/select-completion-status';

type Props = {
  searchParams: { status?: string };
};

const normalizeCompletionStatus = (
  status: string | undefined
): CompletionStatus => {
  const validValues = Object.values(COMPLETION_STATUS);
  return status && validValues.includes(status as CompletionStatus)
    ? (status as CompletionStatus)
    : COMPLETION_STATUS.ALL;
};

const Page = async ({ searchParams }: Props) => {
  const queryClient = new QueryClient();

  const status = normalizeCompletionStatus(searchParams.status);

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.TODOS, status],
    queryFn: async () => getTodos(status),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SelectCompletionStatus status={status} />
      <AddTodoForm />
      <TodoList status={status} />
    </HydrationBoundary>
  );
};

export default Page;
