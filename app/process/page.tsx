import type { Metadata } from 'next';
import { ProcessContent } from './ProcessContent';

export const metadata: Metadata = {
  title: 'Process · The 5-Step Deployment Workflow',
  description:
    'From first contact to deployment. The INDUSTRITAS 5-step process: engagement, matching, compliance, immigration coordination, deployment.',
};

export default function ProcessPage() {
  return <ProcessContent />;
}
