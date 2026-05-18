import type { Metadata } from 'next';
import { ContactContent } from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact · Talk to our team',
  description:
    'Get in touch with INDUSTRITAS. We reply within 5 to 10 minutes during business hours. Hire workers, apply for a job, or send a general message.',
};

export default function ContactPage() {
  return <ContactContent />;
}
