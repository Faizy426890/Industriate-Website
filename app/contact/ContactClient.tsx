'use client';

import { useSearchParams } from 'next/navigation';
import { LeadForm } from '@/components/site/LeadForm';

export function ContactClient() {
  const params = useSearchParams();
  const intent = params.get('intent');
  const valid = intent === 'workforce' || intent === 'apply' || intent === 'general';
  const defaultIntent = valid ? (intent as 'workforce' | 'apply' | 'general') : 'workforce';

  return <LeadForm defaultIntent={defaultIntent} />;
}
