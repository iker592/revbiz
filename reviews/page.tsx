import React from 'react';
import ReviewSystem from '../app/reviews/_components/review-system';

export default function ReviewsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Review Page</h1>
      <ReviewSystem />
    </div>
  );
}
