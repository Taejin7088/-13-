'use client';

import { COMPLETION_STATUS, CompletionStatus } from '../constants/query-key';
import { useRouter } from 'next/navigation';

type Props = {
  status: CompletionStatus;
};

const SelectCompletionStatus = ({ status }: Props) => {
  const { ALL, COMPLETED, INCOMPLETE } = COMPLETION_STATUS;
  const router = useRouter();

  const handleSelect = (status: CompletionStatus) => {
    router.replace(`?status=${status}`);
  };

  return (
    <div
      role='radiogroup'
      aria-label='투두 필터'
      className='flex flex-wrap gap-2 justify-center sm:justify-start'
    >
      <label className='flex items-center gap-1'>
        <input
          type='radio'
          name='completionStatus'
          value={ALL}
          checked={status === ALL}
          onChange={() => handleSelect(ALL)}
        />
        전체보기
      </label>

      <label className='flex items-center gap-1'>
        <input
          type='radio'
          name='completionStatus'
          value={COMPLETED}
          checked={status === COMPLETED}
          onChange={() => handleSelect(COMPLETED)}
        />
        완료된 투두보기
      </label>

      <label className='flex items-center gap-1'>
        <input
          type='radio'
          name='completionStatus'
          value={INCOMPLETE}
          checked={status === INCOMPLETE}
          onChange={() => handleSelect(INCOMPLETE)}
        />
        미완료된 투두보기
      </label>
    </div>
  );
};

export default SelectCompletionStatus;
