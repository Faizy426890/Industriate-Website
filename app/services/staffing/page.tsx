import type { Metadata } from 'next';
import { Factory, Stethoscope, Wrench, Truck, Users, Layers } from 'lucide-react';
import { ServicePage } from '@/components/services/ServicePage';

export const metadata: Metadata = {
  title: 'Staffing Solutions',
  description:
    'Industrial workforce, skilled trades, healthcare staffing, and logistics — pre-vetted, certified, and deployment-ready.',
};

export default function StaffingPage() {
  return (
    <ServicePage
      eyebrow="Services · Staffing Solutions"
      pageName="Staffing Solutions"
      title="Workforce placement at enterprise scale — across four industries."
      description="We coordinate workforce placement and immigration support — without providing legal services. Every worker arrives pre-vetted, certified, and deployment-ready."
      heroImage="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=1600&q=80"
      intro={
        <>
          <p>
            INDUSTRITAS staffing is built around one principle: every worker we place arrives ready to
            work — credentials verified, documentation complete, and compliance accounted for from day one.
          </p>
          <p>
            We staff Industrial, Healthcare, Skilled Trades, and Logistics roles, drawing from local
            pipelines and attorney-coordinated international pathways when employer needs exceed domestic
            availability.
          </p>
        </>
      }
      capabilities={[
        {
          icon: <Factory size={18} />,
          title: 'Industrial Workforce',
          description:
            'Heavy industry, manufacturing, and plant operations staffing at scale. TWIC-credentialed talent for refineries and ports.',
        },
        {
          icon: <Wrench size={18} />,
          title: 'Skilled Trades',
          description:
            'Certified welders, electricians, pipefitters, and construction professionals ready for immediate deployment across sectors.',
        },
        {
          icon: <Stethoscope size={18} />,
          title: 'Healthcare Staffing',
          description:
            'Credentialed healthcare professionals placed with full compliance documentation and licensing verification in hand.',
        },
        {
          icon: <Truck size={18} />,
          title: 'Logistics & Distribution',
          description:
            'Warehouse operations, freight handling, and supply chain workforce solutions — built to scale with peak demand.',
        },
        {
          icon: <Users size={18} />,
          title: 'Volume Mobilization',
          description:
            'Multi-site, multi-shift mobilization for shutdowns, ramp-ups, peak-season demand, and continuity planning.',
        },
        {
          icon: <Layers size={18} />,
          title: 'Single-Vendor Integration',
          description:
            'One contract, one platform, one accountable partner — replacing fragmented vendor management entirely.',
        },
      ]}
      outcomes={[
        'Placements compress from weeks to days',
        '48-hour deployment for pre-vetted roles',
        'Compliance documentation delivered before day one',
        'Single point of accountability across the workforce lifecycle',
        'Continuity coverage for shutdowns and ramp events',
        'Audit-ready placement records on demand',
      ]}
    />
  );
}
