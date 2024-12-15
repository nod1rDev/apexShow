import {
  ReactNode,
  Suspense,
} from 'react';

import { PageLoading } from './PageLoading';

interface SuspenseWrapperProps {
  children: ReactNode;
}

export const SuspenseWrapper = ({ children }: SuspenseWrapperProps) => {
  return (
    <Suspense fallback={<PageLoading />}>
      {children}
    </Suspense>
  );
}; 