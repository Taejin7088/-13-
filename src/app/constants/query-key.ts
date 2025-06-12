export const QUERY_KEY = {
  TODOS: 'TODOS',
};

export const COMPLETION_STATUS = {
  COMPLETED: 'COMPLETED',
  INCOMPLETE: 'INCOMPLETE',
  ALL: 'ALL',
} as const;
export type CompletionStatus =
  (typeof COMPLETION_STATUS)[keyof typeof COMPLETION_STATUS];
