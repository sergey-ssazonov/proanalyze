import { LandingPage } from '@/src/screen/landing';
import { use } from 'react';

export default function Test({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  console.log('params', id);
  return <LandingPage />;
}
