import React from 'react';
import { ReactNode } from 'react';
import PageWrapper from '../../components/wrapper/page-wrapper';

export default function ReviewsLayout({ children }: { children: ReactNode }) {
  return (
    <PageWrapper>
      <div className="flex flex-col min-h-screen w-full">
        {children}
      </div>
    </PageWrapper>
  );
}
