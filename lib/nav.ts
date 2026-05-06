export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  links: NavLink[];
};

export const PRIMARY_NAV: NavGroup[] = [
  {
    label: 'Platform',
    href: '/platform',
    links: [
      { label: 'How It Works', href: '/platform', description: 'The 4-pillar workforce ecosystem' },
      { label: 'Process', href: '/process', description: '5-step deployment workflow' },
      { label: 'Why Us', href: '/why-us', description: '5 competitive moats' },
    ],
  },
  {
    label: 'Services',
    links: [
      { label: 'Staffing Solutions', href: '/services/staffing', description: 'Industrial, trades, healthcare' },
      { label: 'Immigration Coordination', href: '/services/immigration', description: 'Attorney-coordinated pathways' },
      { label: 'Certification & Compliance', href: '/services/certification', description: 'Pre-vetted, deployment-ready' },
      { label: 'Healthcare Staffing', href: '/services/healthcare', description: 'Credentialed professionals' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    links: [
      { label: 'Industries Served', href: '/industries', description: 'Industrial · Healthcare · Trades · Logistics' },
      { label: 'Visa Pathways', href: '/visa-pathways', description: 'EB-2 NIW · EB-3 · TN · EB-5' },
    ],
  },
  {
    label: 'Audiences',
    links: [
      { label: 'For Employers', href: '/for-employers', description: 'Speed · Compliance · Risk reduction' },
      { label: 'For Candidates', href: '/for-candidates', description: 'Jobs · Career growth · Visa support' },
    ],
  },
];

export const FOOTER_NAV: { title: string; links: NavLink[] }[] = [
  {
    title: 'Platform',
    links: [
      { label: 'How It Works', href: '/platform' },
      { label: 'Process', href: '/process' },
      { label: 'Why Us', href: '/why-us' },
      { label: 'Industries', href: '/industries' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Staffing Solutions', href: '/services/staffing' },
      { label: 'Immigration Coordination', href: '/services/immigration' },
      { label: 'Certification & Compliance', href: '/services/certification' },
      { label: 'Healthcare Staffing', href: '/services/healthcare' },
    ],
  },
  {
    title: 'Audience',
    links: [
      { label: 'For Employers', href: '/for-employers' },
      { label: 'For Candidates', href: '/for-candidates' },
      { label: 'Visa Pathways', href: '/visa-pathways' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Compliance & Disclaimer', href: '/compliance' },
      { label: 'Privacy', href: '/compliance#privacy' },
      { label: 'Terms', href: '/compliance#terms' },
    ],
  },
];

export const COMPANY = {
  name: 'INDUSTRITAS Staffing, LLC',
  short: 'INDUSTRITAS',
  tagline: 'A Workforce Infrastructure Platform',
  positioning: 'Not a staffing agency. A workforce infrastructure platform.',
  responsePromise: 'We respond within 5–10 minutes.',
  email: 'contact@industritas.com',
  phone: '+1 (555) 010-2240',
  address: 'Houston, TX · Operating across the United States',
};
