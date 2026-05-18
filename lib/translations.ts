export type Lang = 'en' | 'es';

const t = {
  en: {
    lang: 'en' as Lang,

    // ── Shared / common ────────────────────────────────────────────────────────
    shared: {
      hireWorkers: 'Hire workers',
      applyJob: 'Apply for a job',
      learnMore: 'Learn more',
      contactUs: 'Contact us',
      getStarted: 'Get started today',
      readDisclaimer: 'Read full disclaimer',
      home: 'Home',
      services: 'Services',
      switchLang: 'ES',
      switchLangFull: 'Español',
    },

    // ── Nav ────────────────────────────────────────────────────────────────────
    nav: {
      platform: 'Platform',
      services: 'Services',
      industries: 'Industries',
      audiences: 'Audiences',
      contact: 'Contact',
      // Platform sub
      howItWorks: 'How It Works',
      howItWorksDesc: 'The 4-pillar workforce ecosystem',
      process: 'Process',
      processDesc: '5-step deployment workflow',
      whyUs: 'Why Us',
      whyUsDesc: '5 competitive moats',
      // Services sub
      staffing: 'Staffing Solutions',
      staffingDesc: 'Industrial, trades, healthcare',
      immigration: 'Immigration Coordination',
      immigrationDesc: 'Attorney-coordinated pathways',
      certification: 'Certification & Compliance',
      certificationDesc: 'Pre-vetted, deployment-ready',
      healthcare: 'Healthcare Staffing',
      healthcareDesc: 'Credentialed professionals',
      // Industries sub
      industriesServed: 'Industries Served',
      industriesServedDesc: 'Industrial · Healthcare · Trades · Logistics',
      visaPathways: 'Visa Pathways',
      visaPathwaysDesc: 'EB-2 NIW · EB-3 · TN · EB-5',
      // Audiences sub
      forEmployers: 'For Employers',
      forEmployersDesc: 'Speed · Compliance · Risk reduction',
      forCandidates: 'For Candidates',
      forCandidatesDesc: 'Jobs · Career growth · Visa support',
    },

    // ── Header ─────────────────────────────────────────────────────────────────
    header: {
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      menu: 'Menu',
      navigate: 'Navigate',
      responsePromise: 'Response Promise',
      responsePromiseBody: 'We reply to new requests within',
      responsePromiseBold: '5–10 minutes',
      responsePromiseSuffix: 'during business hours.',
    },

    // ── Footer ─────────────────────────────────────────────────────────────────
    footer: {
      tagline: 'Staffing, certification, compliance, and immigration coordination. All in one place.',
      email: 'Email',
      phone: 'Phone',
      office: 'Office',
      disclaimerTitle: 'Legal & Service Disclaimer',
      disclaimerBody:
        'INDUSTRITAS is not a law firm and does not provide legal advice or legal services. Any immigration matter is handled by independent, U.S.-licensed immigration attorneys. Our role is limited to staffing services and non-legal administrative coordination.',
      allRights: 'All rights reserved.',
      taglineFooter: 'A Workforce Infrastructure Platform',
      // Footer nav column titles
      colPlatform: 'Platform',
      colServices: 'Services',
      colAudience: 'Audience',
      colLegal: 'Legal',
      // Footer nav links
      howItWorks: 'How It Works',
      process: 'Process',
      whyUs: 'Why Us',
      industries: 'Industries',
      staffing: 'Staffing Solutions',
      immigration: 'Immigration Coordination',
      certification: 'Certification & Compliance',
      healthcare: 'Healthcare Staffing',
      forEmployers: 'For Employers',
      forCandidates: 'For Candidates',
      visaPathways: 'Visa Pathways',
      contact: 'Contact',
      compliance: 'Compliance & Disclaimer',
      privacy: 'Privacy',
      terms: 'Terms',
    },

    // ── Hero ───────────────────────────────────────────────────────────────────
    hero: {
      badge: 'Workforce Infrastructure',
      headline1: 'The Elite Staffing',
      headline2: 'Ecosystem.',
      headline3: 'Healthcare & Industrial.',
      headline4: 'Built-In.',
      body: 'We connect great people with great employers. Hospitals find credentialed clinical staff. Plants and refineries find vetted operators, welders, and logistics crews. Hundreds of qualified candidates walk through our doors every day, and our on-site testing center keeps them ready to start.',
      stat1Val: '100+',
      stat1Label: 'Workers Daily',
      stat2Val: '48h',
      stat2Label: 'Deployment',
      stat3Val: '24/7',
      stat3Label: 'Support',
      stat4Val: '100%',
      stat4Label: 'Compliance',
    },

    // ── Logo Cloud ─────────────────────────────────────────────────────────────
    logoCloud: {
      trusted: 'Trusted by leading healthcare systems and industrial operators',
      partners: [
        { name: 'Pearson VUE', desc: 'Authorized Testing Center' },
        { name: 'TWIC', desc: 'Adjacent Talent Pipeline' },
        { name: 'Healthcare', desc: 'Clinical Staffing' },
        { name: 'Industrial', desc: 'Plant & Port Operations' },
        { name: 'Immigration', desc: 'EB-2 NIW & TN Visa' },
        { name: 'Compliance', desc: 'Built-In Credentialing' },
      ],
    },

    // ── Differentiators ────────────────────────────────────────────────────────
    differentiators: {
      eyebrow: 'Why Choose Us',
      title: 'Why employers pick Industritas first',
      description: 'Three things no other staffing firm can match, and won\'t be able to copy any time soon.',
      items: [
        {
          title: 'A built-in flow of talent',
          description:
            'Our office sits next to a busy TWIC center, so roughly a hundred credentialed workers walk by every day. Nurses, port operators, plant technicians, welders. That is a steady, dual-sector pipeline that other agencies simply cannot copy.',
        },
        {
          title: 'We test and certify on-site',
          description:
            "We don't just recruit, we certify. As an authorized Pearson VUE testing center, we host NCLEX and other board exams right inside our doors. Your new healthcare hire arrives compliant and ready to start, faster than any agency can promise.",
        },
        {
          title: 'A global hiring lane',
          description:
            'We specialize in EB-2 NIW and TN visa placements for healthcare professionals. We handle the moving parts so you gain long-term clinical talent without the administrative drag.',
        },
      ],
    },

    // ── Problem ────────────────────────────────────────────────────────────────
    problem: {
      eyebrow: 'The Challenge',
      title: 'Workforce gaps cost more than most teams expect',
      description:
        'Whether you run a hospital or a refinery, the workforce crunch hits the same way: delayed operations, compliance exposure, and rising costs from short-term fixes that never get permanent.',
      statLabel: 'of healthcare facilities report critical staffing shortages',
      painPoints: [
        {
          title: 'Talent is hard to find',
          description:
            'Skilled clinical staff and certified industrial workers are harder to hire, and harder to keep, than ever before.',
        },
        {
          title: 'Compliance risk',
          description:
            'Bad paperwork puts your facility or plant at real risk. Regulators, lawsuits, safety incidents. None of it is worth the savings.',
        },
        {
          title: 'Costs that keep growing',
          description:
            'Travel nurses and short-term contractors are useful, until they become your only option. Budgets break long before the problem does.',
        },
      ],
    },

    // ── Solution ───────────────────────────────────────────────────────────────
    solution: {
      eyebrow: 'The Solution',
      title: 'One ecosystem. Two industries.',
      titleAccent: 'Zero compromises.',
      body: 'Industritas is the only staffing firm that brings together on-site testing, a TWIC-adjacent talent flow, and visa-pathway expertise. One team. Healthcare and industrial, both supported from a single hub.',
      cta: 'Get started today',
      pillars: [
        {
          title: 'A built-in talent pool',
          description:
            'Daily access to 100+ credentialed workers across healthcare and industrial roles, sourced from our TWIC-adjacent location.',
        },
        {
          title: 'On-site certification',
          description:
            'Pearson VUE testing happens here, so healthcare candidates are board-ready before placement. No delays. No third parties.',
        },
        {
          title: 'Permanent placement paths',
          description:
            'EB-2 NIW and TN visa experience to bring on long-term, world-class clinical talent.',
        },
        {
          title: 'Industrial muscle',
          description:
            'Vetted operators, technicians, welders, and logistics workers ready to deploy to plants, ports, and refineries.',
        },
      ],
    },

    // ── Industries Preview ─────────────────────────────────────────────────────
    industriesPreview: {
      eyebrow: 'Industries We Serve',
      title: 'Built for the sectors that keep America running',
      description: 'From hospital floors to plant floors. We deliver compliant, credentialed workers to the industries that matter most.',
      learnMore: 'Learn more',
      industries: [
        {
          name: 'Healthcare',
          description:
            'Credentialed nurses, allied health pros, and clinical support staff. Full licensing verification and Pearson VUE testing on site.',
        },
        {
          name: 'Industrial',
          description:
            'Heavy manufacturing, refineries, ports, and plants. TWIC-certified and safety-trained, ready to start.',
        },
        {
          name: 'Skilled Trades',
          description:
            'Certified welders, electricians, pipefitters, and construction pros. Verified and ready to deploy.',
        },
        {
          name: 'Logistics',
          description:
            'Warehouse, freight, supply chain, and distribution-center crews at scale.',
        },
      ],
    },

    // ── How It Works ───────────────────────────────────────────────────────────
    howItWorks: {
      eyebrow: 'Our Process',
      title: 'From discovery to deployment',
      description: 'A simple four-step process that gets qualified, compliant workers to your facility faster than any traditional agency.',
      fullProcess: 'See the full process in detail',
      steps: [
        {
          n: '01',
          title: 'Discovery',
          description:
            'We learn about the role and the work. Clinical, plant floor, or both. Then we set expectations together.',
        },
        {
          n: '02',
          title: 'Sourcing',
          description:
            'We tap our TWIC-adjacent pipeline and global network to find credentialed candidates across healthcare and industrial roles.',
        },
        {
          n: '03',
          title: 'Credentialing',
          description:
            'Background checks, compliance verification, and for healthcare roles, on-site board exams at our Pearson VUE center.',
        },
        {
          n: '04',
          title: 'Placement',
          description:
            'Vetted, certified, ready-to-work people show up at your facility. Faster than a traditional agency can deliver.',
        },
      ],
    },

    // ── Audiences ──────────────────────────────────────────────────────────────
    audiences: {
      eyebrow: 'Built for both sides',
      title: 'One platform.',
      titleAccent: 'Two journeys.',
      body: 'Hiring? Reach out and we will bring the right people. Job hunting? Apply, and we will walk you through the steps.',
      employer: {
        tag: 'For Employers',
        title: 'Need to hire? Reach out and we move fast.',
        body: 'Tell us the role and the timeline. We bring qualified, compliant people to your door, often within 48 hours.',
        cta: 'Reach out to hire',
        learn: 'Learn more',
        benefits: [
          'Workers on site in as little as 48 hours',
          'Pre-vetted, certified, ready to start',
          'Compliance handled, so liability stays low',
          'One single partner instead of three or four vendors',
          'Scales across healthcare and industrial roles',
          'Global hiring support when you need it',
        ],
      },
      candidate: {
        tag: 'For Candidates',
        title: 'Looking for a job? Apply in a few minutes.',
        body: 'Tell us what kind of work you want and the certifications you have. We share open roles and walk you through every step.',
        cta: 'Apply for a job',
        learn: 'Learn more',
        benefits: [
          'Real jobs in healthcare, industrial, trades, and logistics',
          'Help with certifications and background paperwork',
          'Connections to U.S.-licensed immigration attorneys',
          'Visa-path support for EB-2, EB-3, TN, and EB-5',
          'Real career growth with serious employers',
          'A clear process, no run-around',
        ],
      },
    },

    // ── Testimonials ───────────────────────────────────────────────────────────
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'Trusted by industry leaders across America',
      description: "Don't take our word for it. Hear from the operators and healthcare systems that work with us every day.",
      quotes: [
        {
          quote:
            'INDUSTRITAS replaced four vendors with one platform. Compliance paperwork that used to take weeks now arrives the day before deployment.',
          name: 'VP of Operations',
          role: 'Gulf Coast Refinery Operator',
        },
        {
          quote:
            'The 48-hour deployment promise is real. We staffed a turnaround on short notice with TWIC-certified crews. No surprises. No compliance gaps.',
          name: 'Director, Workforce Planning',
          role: 'Industrial Construction',
        },
        {
          quote:
            "Their immigration coordination is the best we've worked with. Counsel handles all legal work. INDUSTRITAS keeps everything on schedule.",
          name: 'Chief People Officer',
          role: 'Multi-State Healthcare System',
        },
      ],
    },

    // ── CTA Section ────────────────────────────────────────────────────────────
    cta: {
      defaultEyebrow: 'Ready to get started?',
      defaultTitle: 'Build your workforce faster, safer, and smarter.',
      defaultDescription: 'From sourcing to compliance to global hiring, all in one place. We reply within 5 to 10 minutes.',
      defaultPrimary: 'Hire workers',
      defaultSecondary: 'Apply for a job',
      responsePromise: 'Response Promise',
      replyBody: 'We reply to inbound requests within',
      replyBold: '5 to 10 minutes',
      replySuffix: 'during business hours.',
      callDirect: 'Call us directly for urgent requests',
      sendMessage: 'Or send a quick message online',
    },

    // ── Sticky CTA ─────────────────────────────────────────────────────────────
    stickyCta: {
      label: 'Hire workers',
    },

    // ── Lead Form ──────────────────────────────────────────────────────────────
    leadForm: {
      iWantTo: 'I want to',
      intentLabels: {
        workforce: 'Hire workers',
        apply: 'Apply for a job',
        general: 'Send a message',
      },
      intentHeadlines: {
        workforce: 'Tell us who you need to hire.',
        apply: 'Tell us about you and the job you want.',
        general: 'How can we help?',
      },
      intentHelpers: {
        workforce: 'Share the role, the volume, and your timeline. A coordinator will reach out within minutes.',
        apply: 'Share your skills, certifications, and the kind of work you are looking for. We will get back with next steps.',
        general: 'Have a question or partnership idea? Drop a note and the right person will reply.',
      },
      fields: {
        companyName: 'Company name',
        fullName: 'Full name',
        contactName: 'Contact name',
        bestContact: 'Best contact name',
        email: 'Email',
        phone: 'Phone',
        industry: 'Industry',
        timeline: 'Timeline',
        roleNeed: 'Role or workforce need',
        roleApply: 'Role you are applying for',
        message: 'Message',
        yourCompany: 'Your company',
        yourFullName: 'Your full name',
        fullNamePh: 'Full name',
        rolePlaceholderApply: 'e.g. Welder, RN, forklift operator',
        rolePlaceholderHire: 'e.g. 12 TWIC-certified operators for refinery shutdown',
        messagePhApply: 'Tell us about your experience, certifications, and the kind of work you want.',
        messagePhHire: 'Tell us about the volume, locations, certifications, and anything else.',
        selectDefault: 'Select…',
      },
      industries: ['Industrial', 'Healthcare', 'Skilled Trades', 'Logistics', 'Other'],
      timelines: ['Immediate (within 48h)', 'Within 2 weeks', 'Within 1 month', '1 to 3 months', 'Just exploring'],
      replyNotice: 'We reply within',
      replyBold: '5 to 10 minutes',
      replySuffix: 'during business hours.',
      sending: 'Sending…',
      successTitle: 'Got it. Thank you!',
      successBody: 'A member of our team will reach out within 5 to 10 minutes during business hours.',
      sendAnother: 'Send another message',
      disclaimer: 'By sending this form you understand INDUSTRITAS is not a law firm and does not provide legal advice. Immigration filings are handled by independent, U.S.-licensed attorneys.',
    },

    // ── Pages ──────────────────────────────────────────────────────────────────

    industries: {
      eyebrow: 'Industries Served',
      title: 'Four verticals. One compliance-first operating model.',
      description: 'INDUSTRITAS deploys workforce solutions across four core industries. Each one has its own compliance rules, certifications, and talent profile. We handle them all from one platform.',
      crumb: 'Industries',
      verticalLabel: 'Vertical',
      requestWorkforce: 'Request {name} workforce',
      industries: [
        {
          id: 'industrial',
          name: 'Industrial',
          description:
            'Heavy manufacturing, refineries, ports, and plant operations. TWIC-certified workers, safety-trained, and deployment-ready for high-security environments.',
          capabilities: [
            'TWIC-credentialed industrial pipeline',
            'Safety-trained crews for refineries & ports',
            'Plant operations and turnaround staffing',
            'OSHA-aligned documentation',
          ],
        },
        {
          id: 'healthcare',
          name: 'Healthcare',
          description:
            'Credentialed nurses, allied health professionals, and support staff. Full compliance documentation and licensing verification included.',
          capabilities: [
            'Credentialed RNs, LPNs, and allied health',
            'Multi-state licensure verification',
            'Background, medical, and immunization checks',
            'Per diem, contract, and travel placements',
          ],
        },
        {
          id: 'trades',
          name: 'Skilled Trades',
          description:
            'Certified welders, electricians, pipefitters, and construction professionals. Trade certifications verified before placement.',
          capabilities: [
            'Welders, electricians, pipefitters, riggers',
            'Industrial construction and shutdown crews',
            'Trade certification verification',
            'Mobilization for multi-site projects',
          ],
        },
        {
          id: 'logistics',
          name: 'Logistics',
          description:
            'Warehouse operations, freight handling, supply chain staffing, and distribution center workforce solutions at scale.',
          capabilities: [
            'Warehouse and distribution-center staffing',
            'Freight handling and yard operations',
            'Peak-season volume scaling',
            'Multi-shift coverage and continuity planning',
          ],
        },
      ],
    },

    platform: {
      eyebrow: 'Platform',
      title: 'One workforce ecosystem. Four operating pillars.',
      description:
        'INDUSTRITAS is a fully integrated platform built to replace the fragmented stack of staffing agencies, certification vendors, compliance providers, and immigration coordinators that enterprise workforce teams normally manage in parallel.',
      crumb: 'Platform',
      hireWorkers: 'Hire workers',
      seeProcess: 'See the 5-step process',
      pillarsEyebrow: 'The Four Pillars',
      pillarsTitle: 'Built around the lifecycle of a compliant placement.',
      pillarsDesc: 'Each pillar is a real operational job. Nothing is bolted on. They share data, paperwork, and accountability inside one platform.',
      whyEyebrow: 'Why one platform',
      whyTitle: 'A single operating system for compliant workforce delivery.',
      whyDesc: 'When staffing, certification, compliance, and immigration share one source of truth, placements drop from weeks to days. And every worker arrives ready to start.',
      ctaEyebrow: 'Get on the platform',
      ctaTitle: 'Ready to replace your fragmented vendor stack?',
      ctaDesc: 'Tell us what you need. A coordinator replies within 5 to 10 minutes during business hours.',
      pillars: [
        {
          title: 'Staffing',
          description:
            'Industrial, healthcare, skilled-trades, and logistics talent. Sourced through local and global pipelines, screened against your needs.',
          points: ['Industrial workforce at scale', 'Credentialed healthcare staffing', 'Certified skilled trades', 'Logistics & distribution teams'],
        },
        {
          title: 'Certification',
          description:
            'Trade certifications, licensing checks, medical clearances, and background screening completed before any worker is placed.',
          points: ['Trade & licensure verification', 'Medical & drug screening', 'Background checks', 'TWIC and security credentials'],
        },
        {
          title: 'Compliance',
          description:
            'A compliance-first architecture that reduces employer liability rather than creating it. Every document is reviewed before deployment.',
          points: ['I-9 and right-to-work', 'OSHA-aligned safety records', 'Industry-specific certifications', 'Audit-ready documentation'],
        },
        {
          title: 'Immigration Coordination',
          description:
            'Attorney-coordinated visa pathways. INDUSTRITAS facilitates communication and documentation while licensed counsel handles all legal work.',
          points: ['EB-2 NIW · EB-3 · TN · EB-5', 'Attorney-employer-candidate coordination', 'Document and timeline management', 'Strictly non-legal facilitation'],
        },
      ],
      benefits: [
        {
          title: 'One contract',
          description: 'Replace three to five vendors with one accountable partner.',
        },
        {
          title: '48-hour deployment',
          description: 'Pre-vetted talent pools and streamlined coordination compress placement timelines.',
        },
        {
          title: 'Reduced liability',
          description: 'Compliance is built into placement, not added later. Every worker arrives audit-ready.',
        },
      ],
    },

    forEmployers: {
      eyebrow: 'For Employers',
      title: 'Need to hire? Reach out and we move fast.',
      description:
        'Stop juggling staffing agencies, certification vendors, compliance partners, and immigration counsel. Tell us the role and the timeline, and we deliver qualified people, often within 48 hours.',
      crumb: 'For Employers',
      reachOutToHire: 'Reach out to hire',
      whyUs: 'Why us',
      whatYouGet: 'What you get',
      whatYouGetTitle: 'The things workforce teams actually care about.',
      whoWeWork: 'Who we work with',
      whoWeWorkTitle: 'Built for serious operators in regulated industries.',
      whoWeWorkDesc: 'Workforce, operations, HR, and compliance leaders running high-stakes placements where speed and paperwork both matter.',
      reachOut: 'Reach out',
      reachOutTitle: 'Tell us what you need.',
      reachOutDesc: 'A coordinator will reach out within 5 to 10 minutes during business hours.',
      reachOutNote:
        'Have a complex multi-site mobilization, a visa-track hire, or unusual credentialing requirements? Drop it in the message field and we will route it to the right coordinator.',
      whoList: [
        'Plant and operations leaders in heavy industry',
        'Workforce planners running multi-site mobilizations',
        'Healthcare HR teams handling multi-state credentialing',
        'Construction and trades GCs running shutdowns and turnarounds',
        'Logistics leaders scaling distribution and freight crews',
      ],
      value: [
        {
          title: '48-hour deployment',
          description: 'A ready talent pool and a tight coordination team get people to your door fast.',
        },
        {
          title: 'Pre-vetted, certified',
          description: 'Every worker arrives with credentials verified and paperwork in order.',
        },
        {
          title: 'Less liability',
          description: 'Compliance is built into the process, not bolted on. That keeps risk down.',
        },
        {
          title: 'One partner, many industries',
          description: 'Industrial, healthcare, skilled trades, and logistics. All from one platform.',
        },
        {
          title: 'Fewer vendors',
          description: 'Replace three to five vendors with one accountable partner.',
        },
        {
          title: 'Global hiring support',
          description: 'Attorney-led visa pathways when you need international talent.',
        },
      ],
    },

    forCandidates: {
      eyebrow: 'For Candidates',
      title: 'Looking for a job? Apply in a few minutes.',
      description:
        'If you have skills in industrial, healthcare, skilled trades, or logistics, we connect you to serious employers, help with certifications, and coordinate visa pathways through licensed attorneys when needed.',
      crumb: 'For Candidates',
      applyJob: 'Apply for a job',
      visaPathways: 'Visa pathways',
      whyEyebrow: 'Why candidates pick us',
      whyTitle: 'A simple, clear path to your next job.',
      whyDesc: 'Most platforms talk in vague terms. We tell you exactly what we do, what we do not, and what to expect.',
      journeyEyebrow: 'Your Journey',
      journeyTitle: 'Five simple steps from hello to your first day.',
      applyNow: 'Apply now',
      applyNowTitle: 'Send your application.',
      applyNowDesc: 'Tell us about your skills, certifications, and target roles. If you are exploring visa pathways, mention it in the message field.',
      applyNowNote:
        'INDUSTRITAS does not provide immigration legal advice. If your application involves a visa pathway, we connect you with a U.S.-licensed immigration attorney who handles every legal part of your case.',
      stepLabel: 'Step',
      pillars: [
        {
          title: 'Real jobs with real employers',
          description: 'Open roles in industrial, healthcare, skilled trades, and logistics.',
        },
        {
          title: 'We help with certifications',
          description: 'Support through licensing, medical checks, and background processes.',
        },
        {
          title: 'Visa-path support',
          description: 'EB-2 NIW, EB-3, TN, and EB-5 pathways coordinated with licensed attorneys.',
        },
        {
          title: 'Career growth',
          description: 'Move up the ladder with serious employers in high-stakes industries.',
        },
        {
          title: 'No run-around',
          description: 'A clear, compliant, professionally managed process at every step.',
        },
        {
          title: 'No upfront fees',
          description: 'Standard placements are paid by the employer. Legal services are billed by counsel.',
        },
      ],
      steps: [
        { n: '01', title: 'Send your application', body: 'Tell us about your role, experience, certifications, and work authorization.' },
        { n: '02', title: 'Match with open roles', body: 'We surface roles that fit your skills, certifications, and target locations.' },
        { n: '03', title: 'Compliance and paperwork', body: 'Certifications, medical checks, and background screening, all handled inside the platform.' },
        { n: '04', title: 'Visa support (if you need it)', body: 'We connect you with licensed attorneys who handle every legal part of your case.' },
        { n: '05', title: 'Start the job', body: 'You onboard with the employer and get to work, with our support along the way.' },
      ],
    },

    whyUs: {
      eyebrow: 'Why Us',
      title: 'Five competitive moats. One workforce platform.',
      description: 'Why INDUSTRITAS is hard to copy. These are not just features. They are real advantages built into how we operate.',
      crumb: 'Why Us',
      moatLabel: 'Moat',
      vsEyebrow: 'vs. Traditional Staffing Agencies',
      vsTitle: 'What replacing your fragmented vendor stack actually changes.',
      vsDesc: 'Most agencies stop at sourcing. INDUSTRITAS owns the full workforce lifecycle, from intake to compliance to deployment to immigration coordination.',
      capabilityLabel: 'Capability',
      traditionalLabel: 'Traditional Staffing',
      industriatasLabel: 'INDUSTRITAS',
      hireWorkers: 'Hire workers',
      seeProcess: 'See the full process',
      moats: [
        {
          badge: 'Sourcing',
          title: 'TWIC-Driven Talent Funnel',
          description: 'We sit next to a TWIC office, so credentialed industrial workers flow through our doors every day. That pipeline is rare, and tough to copy.',
        },
        {
          badge: 'Integration',
          title: 'One-Stop Workforce Ecosystem',
          description: 'Staffing, certification, compliance, and immigration coordination under one roof. No other provider offers this level of integration at scale.',
        },
        {
          badge: 'Risk',
          title: 'Compliance-First Model',
          description: 'Built-in compliance architecture means every placement reduces employer liability rather than creating it. This is a structural risk-reduction tool, not just a service feature.',
        },
        {
          badge: 'Speed',
          title: 'Speed-to-Lead System',
          description: '48-hour deployment capability backed by pre-vetted talent pools and streamlined coordination workflows. Speed is a moat when it\'s systematic.',
        },
        {
          badge: 'Coverage',
          title: 'Multi-Industry Capability',
          description: 'Industrial, healthcare, skilled trades, and logistics. Diversified demand lowers concentration risk and grows the market we can serve.',
        },
      ],
      compare: [
        { label: 'Single integrated contract' },
        { label: 'Compliance bundled with placement' },
        { label: '48-hour deployment capability' },
        { label: 'Attorney-coordinated visa pathways' },
        { label: 'TWIC-credentialed industrial pipeline' },
        { label: 'Multi-industry coverage' },
      ],
    },

    process: {
      eyebrow: 'Process',
      title: 'Five steps. One operational backbone.',
      description: 'Here is exactly what to expect, from first contact to deployment. Clear steps, no run-around.',
      crumb: 'Process',
      workflowEyebrow: 'The Workflow',
      workflowTitle: 'From request to deployment, all in one place.',
      workflowDesc: 'Every step lives inside the platform. Fewer delays, no vendor handoffs, and every placement compliant from day one.',
      closingText:
        'This end-to-end process is what separates INDUSTRITAS from traditional staffing agencies.',
      closingBody:
        'Every step lives inside the platform. Fewer delays, no vendor handoffs, and every placement compliant from day one.',
      steps: [
        {
          n: '01',
          title: 'Employer Engagement',
          short: 'Define workforce needs',
          description: 'Define workforce needs, volume, timeline, and compliance requirements. Our team conducts a structured intake to map the full scope.',
          bullets: ['Volume and shift modeling', 'Compliance scope mapping', 'Timeline and ramp planning', 'Stakeholder alignment'],
        },
        {
          n: '02',
          title: 'Talent Matching',
          short: 'Local & global pipeline',
          description: 'We tap local and global pipelines to find the best-fit candidates. Pre-screened, and lined up with your needs.',
          bullets: ['Pre-screened talent pools', 'Domestic + international pipelines', 'Spec-aligned candidate slates', 'Cultural and operational fit'],
        },
        {
          n: '03',
          title: 'Compliance & Documentation',
          short: 'Certs, medical, background',
          description: 'Certifications verified, medical checks completed, background verification processed. Every candidate arrives deployment-ready.',
          bullets: ['Trade and licensure verification', 'Medical and drug screening', 'Background and right-to-work', 'Industry-specific credentials (e.g., TWIC)'],
        },
        {
          n: '04',
          title: 'Immigration Coordination',
          short: 'Attorneys handle legal work',
          description: 'Licensed attorneys handle all legal work. INDUSTRITAS keeps the paperwork and timelines moving between everyone, in a non-legal role.',
          bullets: ['Attorney, employer, candidate coordination', 'Documents and timeline management', 'Process guidance (non-legal)', 'EB-2 NIW, EB-3, TN, EB-5 pathways'],
        },
        {
          n: '05',
          title: 'Deployment',
          short: 'Worker placed and ready',
          description: 'Worker is placed, onboarded, and ready. Ongoing support available through the platform ecosystem.',
          bullets: ['Onboarding and orientation', 'On-site readiness checks', 'Ongoing platform support', 'Continuity and replacement workflows'],
        },
      ],
    },

    visaPathways: {
      eyebrow: 'Global Talent, Visa Pathways',
      title: 'Attorney-coordinated immigration support for employers and skilled professionals.',
      description:
        'We connect employers and skilled professionals with trusted, U.S.-licensed immigration attorneys to support employment-based visa pathways in a structured and compliant manner. All legal strategy and petition handling are carried out exclusively by licensed counsel.',
      crumb: 'Visa Pathways',
      pathwaysEyebrow: 'Pathways We Coordinate',
      pathwaysTitle: 'Four employment-based pathways. One coordination layer.',
      pathwaysDesc: 'Each pathway has unique documentation, timeline, and procedural requirements. INDUSTRITAS keeps everything aligned between candidate, employer, and attorney.',
      roleNote: 'Our role across all visa pathways:',
      roleBody:
        'We help streamline coordination between all parties, ensuring documentation and procedural requirements are managed efficiently. All legal filings, strategies, and case decisions are handled exclusively by qualified immigration counsel.',
      approvedEyebrow: 'Approved Verbiage',
      approvedTitle: 'The language that defines our role.',
      approvedDesc: 'Wording that keeps our role clear: we coordinate. We are not a legal services provider. Used across every immigration conversation.',
      coordinationNote: 'Coordination, not counsel',
      coordinationBody:
        'Legal strategy and petition handling are carried out exclusively by licensed immigration attorneys. INDUSTRITAS assists with administrative coordination, document preparation support, and general process guidance.',
      readyCta: 'Ready to coordinate a visa-track placement?',
      readyBody:
        'Tell us about the candidate, the role, and the target pathway. We connect employer, candidate, and licensed counsel, and keep paperwork and timelines on track.',
      coordinateBtn: 'Coordinate Visa Pathway',
      detailsLink: 'Immigration coordination details',
      alwaysSay: 'Always say',
      neverSay: 'Never say',
      pathways: [
        {
          code: 'EB-2 NIW',
          title: 'National Interest Waiver',
          description: 'For professionals with advanced degrees or exceptional ability whose work benefits the U.S. national interest. INDUSTRITAS facilitates the coordination between candidate and attorney.',
        },
        {
          code: 'EB-3',
          title: 'Skilled Workers & Professionals',
          description: 'For skilled workers, professionals, and other workers. INDUSTRITAS supports the process coordination while attorneys manage all legal filings.',
        },
        {
          code: 'TN',
          title: 'NAFTA / USMCA Professional',
          description: 'For Canadian and Mexican citizens in qualifying professional occupations. We coordinate documentation and employer-attorney communication.',
        },
        {
          code: 'EB-5',
          title: 'Immigrant Investor Program',
          description: 'For investors seeking permanent residency through qualifying capital investment. We facilitate access to qualified attorneys and assist with process coordination in a non-legal capacity.',
        },
      ],
      sayDo: [
        { allowed: true, value: 'We connect…' },
        { allowed: true, value: 'We coordinate…' },
        { allowed: true, value: 'We facilitate…' },
        { allowed: true, value: 'We support the process…' },
        { allowed: true, value: 'We assist with coordination…' },
        { allowed: false, value: 'We file petitions' },
        { allowed: false, value: 'Our experts handle your case' },
        { allowed: false, value: 'We provide immigration advice' },
        { allowed: false, value: 'We handle your immigration' },
        { allowed: false, value: 'We manage your case' },
      ],
    },

    compliance: {
      eyebrow: 'Compliance & Disclaimer',
      title: 'Legal & service disclaimer.',
      description:
        'This dedicated page is referenced from the footer of every page on the website. The language below protects INDUSTRITAS legally while maintaining credibility with both employer and candidate audiences.',
      crumb: 'Compliance & Disclaimer',
      disclaimerTitle: 'Legal & Service Disclaimer',
      disclaimerSub: 'This section appears as a standalone page and is referenced in the footer of every page on the website.',
      quote:
        'We are not a law firm and do not provide legal advice or legal services. Any immigration-related matters are handled exclusively by independent, U.S.-licensed immigration attorneys, either through partnered immigration law firms or separately engaged counsel. Our role is limited to staffing services and non-legal administrative coordination support.',
      para2:
        'Where immigration support is required, INDUSTRITAS facilitates access to qualified attorneys and assists with process coordination in a non-legal capacity. By using our services, you acknowledge that all legal advice and immigration filings are provided solely by licensed legal professionals engaged for that purpose.',
      privacyTitle: 'Privacy',
      privacyP1:
        'INDUSTRITAS collects only the information necessary to coordinate placements and administrative processes between employers, candidates, and licensed counsel. We do not sell personal information.',
      privacyP2:
        'Sensitive documentation related to immigration matters is shared exclusively with the licensed attorneys engaged for that case. Candidates and employers retain control over what information is shared and with whom.',
      privacyP3:
        'For specific privacy inquiries or data requests, contact us through the official channels listed on the contact page.',
      termsTitle: 'Terms of Service',
      termsP1:
        'Use of the INDUSTRITAS platform is subject to engagement terms agreed between the parties. Coordination services are non-legal in nature, and any legal services are provided by independently engaged U.S.-licensed counsel.',
      termsP2:
        'Candidates and employers are responsible for the accuracy of information provided through the platform. Coordination outcomes depend on independently verified credentials and attorney-led legal decisions.',
      termsNote:
        'This page contains general information and is not intended as legal advice. For legal advice, consult a licensed attorney.',
      principles: [
        {
          title: 'Not a Law Firm',
          description: 'INDUSTRITAS does not provide legal advice or legal services of any kind.',
        },
        {
          title: 'Attorneys Handle Legal Work',
          description: 'All immigration matters are handled exclusively by independent, U.S.-licensed immigration attorneys.',
        },
        {
          title: 'Coordination Only',
          description: 'Our role is limited to staffing services and non-legal administrative coordination support.',
        },
        {
          title: 'User Acknowledgment',
          description: 'By using our services, users acknowledge that all legal advice is provided solely by licensed professionals.',
        },
      ],
    },

    contact: {
      eyebrow: 'Contact',
      title: 'Talk to a real person, usually within minutes.',
      description:
        "Looking to hire workers? Reach out and we'll match the right talent to your role. Looking for a job? Apply and we'll walk you through the steps.",
      crumb: 'Contact',
      responseLabel: 'We reply within 5 to 10 minutes during business hours.',
      email: 'Email',
      phone: 'Phone',
      office: 'Office',
      whatHappens: 'What happens next',
      steps: [
        'Your message is routed to the right coordinator.',
        'We reply within 5 to 10 minutes during business hours.',
        'We confirm scope, timeline, and details with you.',
        'Talent matching and compliance paperwork begin.',
      ],
      disclaimer:
        'INDUSTRITAS is not a law firm and does not provide legal advice. Any immigration filing is handled by independent, U.S.-licensed attorneys.',
    },

    serviceOverview: 'Service Overview',
    serviceWhat: 'What {name} delivers',
    capabilities: 'Capabilities',
    capabilitiesTitle: 'Inside this service line.',
    capabilitiesDesc: 'Real deliverables. What we coordinate, verify, and stand behind.',
    outcomes: 'Outcomes',
    outcomesTitle: 'What success looks like.',
    outcomesDesc: 'Measurable, repeatable outcomes that translate directly to enterprise workforce metrics.',

    services: {
      staffing: {
        eyebrow: 'Services, Staffing Solutions',
        pageName: 'Staffing Solutions',
        title: 'Workforce placement at enterprise scale, across four industries.',
        description:
          'We coordinate workforce placement and immigration support, without providing legal services. Every worker arrives pre-vetted, certified, and ready to deploy.',
        ctaLabel: 'Hire workers',
        introP1:
          'INDUSTRITAS staffing is built around one principle: every worker we place arrives ready to work, with credentials verified, paperwork complete, and compliance handled from day one.',
        introP2:
          'We staff Industrial, Healthcare, Skilled Trades, and Logistics roles, drawing from local pipelines and attorney-coordinated international pathways when employer needs exceed domestic availability.',
        capabilities: [
          { title: 'Industrial Workforce', description: 'Heavy industry, manufacturing, and plant operations staffing at scale. TWIC-credentialed talent for refineries and ports.' },
          { title: 'Skilled Trades', description: 'Certified welders, electricians, pipefitters, and construction professionals ready for immediate deployment across sectors.' },
          { title: 'Healthcare Staffing', description: 'Credentialed healthcare professionals placed with full compliance documentation and licensing verification in hand.' },
          { title: 'Logistics & Distribution', description: 'Warehouse operations, freight handling, and supply chain workforce, built to scale with peak demand.' },
          { title: 'Volume Mobilization', description: 'Multi-site, multi-shift mobilization for shutdowns, ramp-ups, peak-season demand, and continuity planning.' },
          { title: 'Single-Vendor Integration', description: 'One contract, one platform, one accountable partner. Replaces fragmented vendor management entirely.' },
        ],
        outcomes: [
          'Placements compress from weeks to days',
          '48-hour deployment for pre-vetted roles',
          'Compliance documentation delivered before day one',
          'Single point of accountability across the workforce lifecycle',
          'Continuity coverage for shutdowns and ramp events',
          'Audit-ready placement records on demand',
        ],
      },
      immigration: {
        eyebrow: 'Services, Immigration Coordination',
        pageName: 'Immigration Coordination',
        title: 'Coordination, not counsel. Attorney-led visa pathway support.',
        description:
          'We connect employers and skilled professionals with trusted, U.S.-licensed immigration attorneys to support employment-based visa pathways in a structured and compliant manner.',
        ctaLabel: 'Coordinate Visa Pathway',
        introP1:
          'INDUSTRITAS facilitates the overall process by coordinating between candidates, employers, and legal counsel, so timelines, paperwork, and communication stay aligned.',
        introP2:
          'Legal strategy and petition handling are carried out exclusively by licensed immigration attorneys. We assist with administrative coordination, document preparation support, and general process guidance, strictly in a non-legal role.',
        calloutImportant: 'Important',
        calloutBody:
          'INDUSTRITAS is not a law firm and does not provide legal advice or legal services. All immigration filings are handled exclusively by independent, U.S.-licensed immigration attorneys.',
        capabilities: [
          { title: 'Pathway Coordination', description: 'EB-2 NIW, EB-3, TN, and EB-5 pathways. We coordinate between candidate, employer, and licensed counsel.' },
          { title: 'Tri-Party Communication', description: 'One point of contact for candidate, employer, and attorney. We never practice law.' },
          { title: 'Documentation Support', description: 'We help organize, track, and route documentation supporting attorney-led filings.' },
          { title: 'Timeline Management', description: 'Milestones, deadlines, and dependencies tracked transparently across all stakeholders.' },
          { title: 'Compliant Process Guidance', description: 'General process guidance only, never legal advice. Counsel handles every legal decision.' },
          { title: 'Attorney Network Access', description: 'Access to qualified, U.S.-licensed immigration attorneys for employment-based pathways.' },
        ],
        outcomes: [
          'Aligned candidate, employer, and counsel from day one',
          'Faster, more predictable immigration timelines',
          'Lower documentation rework and missed deadlines',
          'Clear separation of legal vs. coordination responsibilities',
          'Audit-ready coordination records',
          'Scalable visa-track placements without internal legal lift',
        ],
      },
      healthcare: {
        eyebrow: 'Services, Healthcare Staffing',
        pageName: 'Healthcare Staffing',
        title: 'Credentialed healthcare talent, ready with paperwork in hand.',
        description:
          'Credentialed nurses, allied health professionals, and support staff. Full compliance documentation and licensing verification included on every placement.',
        ctaLabel: 'Hire healthcare staff',
        introP1:
          'Healthcare staffing needs the same compliance-first approach as industrial work, but with denser credentialing, multi-state licensing concerns, and tighter deployment windows.',
        introP2:
          'INDUSTRITAS handles the credentialing layer end-to-end: licenses, immunizations, background checks, and onboarding documentation are completed before placement. Visa-track placements are coordinated with U.S.-licensed immigration attorneys.',
        capabilities: [
          { title: 'RNs, LPNs & Allied Health', description: 'Registered nurses, licensed practical nurses, and allied health professionals across specialties.' },
          { title: 'Per Diem, Contract, Travel', description: 'Flexible engagement models for short-term, long-term, and travel placements.' },
          { title: 'Multi-State Licensure', description: 'Checks across compact and non-compact states, including endorsement coordination.' },
          { title: 'Immunization & Medical', description: 'Immunization records, fit-testing, drug screening, and medical clearances.' },
          { title: 'International Pipelines', description: 'Visa-track placements coordinated with attorneys via EB-2, EB-3, and TN pathways where applicable.' },
          { title: 'Coverage & Continuity', description: 'Shift coverage, continuity planning, and replacement workflows built into the platform.' },
        ],
        outcomes: [
          'Faster credentialing-to-placement timelines',
          'Reduced compliance lift for hospital HR teams',
          'Multi-state licensure verified before placement',
          'Visa-track coordination handled end-to-end',
          'Continuity coverage for census surges',
          'Audit-ready credentialing records',
        ],
      },
      certification: {
        eyebrow: 'Services, Certification & Compliance',
        pageName: 'Certification & Compliance',
        title: 'Compliance built into placement, not bolted on after.',
        description:
          'Every worker is pre-vetted, certified, and deployment-ready. INDUSTRITAS reduces employer liability through built-in compliance architecture, not optional add-ons.',
        ctaLabel: 'Hire workers',
        introP1:
          'Certification and compliance are not separate purchases on the INDUSTRITAS platform. They are built into every placement. Paperwork is gathered, verified, and stored before a worker is offered a role.',
        introP2:
          'For employers, this means audit-ready records, lower liability exposure, and zero day-one surprises. For candidates, it means a transparent process that translates directly into faster placement.',
        capabilities: [
          { title: 'Trade & Licensure Verification', description: 'Verification of trade certifications, professional licenses, and renewal status across jurisdictions.' },
          { title: 'Medical & Drug Screening', description: 'Industry-aligned medical clearances, drug screening, and immunization records management.' },
          { title: 'Background Checks', description: 'Right-to-work, criminal, employment, and education verification, adapted to industry needs.' },
          { title: 'TWIC & Security Credentials', description: 'Coordination of TWIC and other security credentials for high-security industrial environments.' },
          { title: 'OSHA & Safety Records', description: 'Safety training documentation aligned to OSHA and site-specific environmental requirements.' },
          { title: 'Audit-Ready Documentation', description: 'Centralized, retrievable, audit-ready records for every placement on the platform.' },
        ],
        outcomes: [
          'Liability reduced through structural compliance',
          'Day-one deployment without document chasing',
          'Audit-ready records for every placement',
          'Industry-specific credentialing handled in-house',
          'Lower turnover from clearer documentation',
          'Zero gap between sourcing and compliance',
        ],
      },
    },
  },
  // ── SPANISH ──────────────────────────────────────────────────────────────────
  es: {} as Record<string, unknown>,
};

// Fill in Spanish translations
t.es = {
  lang: 'es' as Lang,

  shared: {
    hireWorkers: 'Contratar trabajadores',
    applyJob: 'Solicitar empleo',
    learnMore: 'Saber más',
    contactUs: 'Contáctenos',
    getStarted: 'Comenzar hoy',
    readDisclaimer: 'Leer aviso completo',
    home: 'Inicio',
    services: 'Servicios',
    switchLang: 'EN',
    switchLangFull: 'English',
  },

  nav: {
    platform: 'Plataforma',
    services: 'Servicios',
    industries: 'Industrias',
    audiences: 'Audiencias',
    contact: 'Contacto',
    howItWorks: 'Cómo Funciona',
    howItWorksDesc: 'El ecosistema laboral de 4 pilares',
    process: 'Proceso',
    processDesc: 'Flujo de trabajo de 5 pasos',
    whyUs: 'Por Qué Nosotros',
    whyUsDesc: '5 ventajas competitivas',
    staffing: 'Soluciones de Personal',
    staffingDesc: 'Industrial, oficios, salud',
    immigration: 'Coordinación de Inmigración',
    immigrationDesc: 'Vías coordinadas por abogados',
    certification: 'Certificación y Cumplimiento',
    certificationDesc: 'Pre-verificado, listo para operar',
    healthcare: 'Personal de Salud',
    healthcareDesc: 'Profesionales acreditados',
    industriesServed: 'Industrias que Servimos',
    industriesServedDesc: 'Industrial · Salud · Oficios · Logística',
    visaPathways: 'Vías de Visa',
    visaPathwaysDesc: 'EB-2 NIW · EB-3 · TN · EB-5',
    forEmployers: 'Para Empleadores',
    forEmployersDesc: 'Velocidad · Cumplimiento · Reducción de riesgo',
    forCandidates: 'Para Candidatos',
    forCandidatesDesc: 'Empleos · Crecimiento · Apoyo de visa',
  },

  header: {
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    menu: 'Menú',
    navigate: 'Navegar',
    responsePromise: 'Promesa de Respuesta',
    responsePromiseBody: 'Respondemos a las nuevas solicitudes en',
    responsePromiseBold: '5–10 minutos',
    responsePromiseSuffix: 'durante el horario comercial.',
  },

  footer: {
    tagline: 'Dotación de personal, certificación, cumplimiento e inmigración. Todo en un solo lugar.',
    email: 'Correo',
    phone: 'Teléfono',
    office: 'Oficina',
    disclaimerTitle: 'Aviso Legal y de Servicio',
    disclaimerBody:
      'INDUSTRITAS no es un bufete de abogados y no brinda asesoría legal ni servicios legales. Cualquier asunto de inmigración es manejado por abogados de inmigración independientes y con licencia en EE.UU. Nuestro rol se limita a servicios de dotación de personal y coordinación administrativa no legal.',
    allRights: 'Todos los derechos reservados.',
    taglineFooter: 'Una Plataforma de Infraestructura Laboral',
    colPlatform: 'Plataforma',
    colServices: 'Servicios',
    colAudience: 'Audiencia',
    colLegal: 'Legal',
    howItWorks: 'Cómo Funciona',
    process: 'Proceso',
    whyUs: 'Por Qué Nosotros',
    industries: 'Industrias',
    staffing: 'Soluciones de Personal',
    immigration: 'Coordinación de Inmigración',
    certification: 'Certificación y Cumplimiento',
    healthcare: 'Personal de Salud',
    forEmployers: 'Para Empleadores',
    forCandidates: 'Para Candidatos',
    visaPathways: 'Vías de Visa',
    contact: 'Contacto',
    compliance: 'Cumplimiento y Aviso',
    privacy: 'Privacidad',
    terms: 'Términos',
  },

  hero: {
    badge: 'Infraestructura Laboral',
    headline1: 'El Ecosistema Elite',
    headline2: 'de Personal.',
    headline3: 'Salud e Industrial.',
    headline4: 'Integrado.',
    body: 'Conectamos a grandes personas con grandes empleadores. Los hospitales encuentran personal clínico acreditado. Las plantas y refinerías encuentran operadores, soldadores y equipos de logística verificados. Cientos de candidatos calificados llegan a nuestras puertas cada día, y nuestro centro de pruebas en sitio los mantiene listos para comenzar.',
    stat1Val: '100+',
    stat1Label: 'Trabajadores Diarios',
    stat2Val: '48h',
    stat2Label: 'Despliegue',
    stat3Val: '24/7',
    stat3Label: 'Soporte',
    stat4Val: '100%',
    stat4Label: 'Cumplimiento',
  },

  logoCloud: {
    trusted: 'Confiado por los principales sistemas de salud y operadores industriales',
    partners: [
      { name: 'Pearson VUE', desc: 'Centro de Pruebas Autorizado' },
      { name: 'TWIC', desc: 'Canal de Talento Adyacente' },
      { name: 'Salud', desc: 'Personal Clínico' },
      { name: 'Industrial', desc: 'Operaciones de Planta y Puerto' },
      { name: 'Inmigración', desc: 'Visa EB-2 NIW y TN' },
      { name: 'Cumplimiento', desc: 'Acreditación Integrada' },
    ],
  },

  differentiators: {
    eyebrow: 'Por Qué Elegirnos',
    title: 'Por qué los empleadores eligen Industritas primero',
    description: 'Tres cosas que ninguna otra empresa de personal puede igualar, y que no podrán copiar pronto.',
    items: [
      {
        title: 'Un flujo integrado de talento',
        description:
          'Nuestra oficina está al lado de un centro TWIC activo, por lo que aproximadamente cien trabajadores acreditados pasan por allí cada día. Enfermeras, operadores portuarios, técnicos de planta, soldadores. Una canalización constante de dos sectores que otras agencias simplemente no pueden copiar.',
      },
      {
        title: 'Certificamos en nuestras instalaciones',
        description:
          'No solo reclutamos, certificamos. Como centro de pruebas Pearson VUE autorizado, realizamos el NCLEX y otros exámenes de colegiatura dentro de nuestras instalaciones. Su nueva contratación de salud llega en cumplimiento y lista para comenzar, más rápido de lo que cualquier agencia puede prometer.',
      },
      {
        title: 'Un canal de contratación global',
        description:
          'Nos especializamos en colocaciones con visa EB-2 NIW y TN para profesionales de la salud. Manejamos las piezas en movimiento para que usted obtenga talento clínico a largo plazo sin la carga administrativa.',
      },
    ],
  },

  problem: {
    eyebrow: 'El Desafío',
    title: 'Las brechas laborales cuestan más de lo que la mayoría espera',
    description:
      'Ya sea que dirija un hospital o una refinería, la escasez laboral golpea de la misma manera: operaciones retrasadas, exposición al cumplimiento y costos crecientes de soluciones a corto plazo que nunca se vuelven permanentes.',
    statLabel: 'de los centros de salud reportan escasez crítica de personal',
    painPoints: [
      {
        title: 'El talento es difícil de encontrar',
        description:
          'El personal clínico calificado y los trabajadores industriales certificados son más difíciles de contratar, y más difíciles de retener, que nunca.',
      },
      {
        title: 'Riesgo de cumplimiento',
        description:
          'La documentación deficiente pone su instalación o planta en riesgo real. Reguladores, demandas, incidentes de seguridad. Nada de eso vale el ahorro.',
      },
      {
        title: 'Costos que siguen creciendo',
        description:
          'Las enfermeras viajeras y los contratistas a corto plazo son útiles, hasta que se convierten en su única opción. Los presupuestos se rompen mucho antes que el problema.',
      },
    ],
  },

  solution: {
    eyebrow: 'La Solución',
    title: 'Un ecosistema. Dos industrias.',
    titleAccent: 'Cero compromisos.',
    body: 'Industritas es la única empresa de personal que reúne pruebas en sitio, un flujo de talento adyacente a TWIC y experiencia en vías de visa. Un equipo. Salud e industrial, ambos apoyados desde un solo centro.',
    cta: 'Comenzar hoy',
    pillars: [
      {
        title: 'Un grupo integrado de talento',
        description:
          'Acceso diario a más de 100 trabajadores acreditados en roles de salud e industrial, procedentes de nuestra ubicación adyacente a TWIC.',
      },
      {
        title: 'Certificación en sitio',
        description:
          'Las pruebas de Pearson VUE se realizan aquí, por lo que los candidatos de salud están listos para la junta antes de la colocación. Sin demoras. Sin terceros.',
      },
      {
        title: 'Vías de colocación permanente',
        description:
          'Experiencia con visas EB-2 NIW y TN para incorporar talento clínico de clase mundial a largo plazo.',
      },
      {
        title: 'Músculo industrial',
        description:
          'Operadores, técnicos, soldadores y trabajadores de logística verificados listos para desplegarse en plantas, puertos y refinerías.',
      },
    ],
  },

  industriesPreview: {
    eyebrow: 'Industrias que Servimos',
    title: 'Construido para los sectores que mantienen a América en funcionamiento',
    description: 'Desde pisos de hospital hasta pisos de planta. Entregamos trabajadores en cumplimiento y acreditados a las industrias que más importan.',
    learnMore: 'Saber más',
    industries: [
      {
        name: 'Salud',
        description:
          'Enfermeras acreditadas, profesionales de salud aliada y personal de apoyo clínico. Verificación completa de licencias y pruebas Pearson VUE en sitio.',
      },
      {
        name: 'Industrial',
        description:
          'Manufactura pesada, refinerías, puertos y plantas. Certificados con TWIC y entrenados en seguridad, listos para comenzar.',
      },
      {
        name: 'Oficios Calificados',
        description:
          'Soldadores, electricistas, tuberos y profesionales de la construcción certificados. Verificados y listos para desplegar.',
      },
      {
        name: 'Logística',
        description:
          'Equipos de almacén, carga, cadena de suministro y centros de distribución a escala.',
      },
    ],
  },

  howItWorks: {
    eyebrow: 'Nuestro Proceso',
    title: 'Del descubrimiento al despliegue',
    description: 'Un proceso simple de cuatro pasos que lleva trabajadores calificados y en cumplimiento a su instalación más rápido que cualquier agencia tradicional.',
    fullProcess: 'Ver el proceso completo en detalle',
    steps: [
      {
        n: '01',
        title: 'Descubrimiento',
        description:
          'Aprendemos sobre el rol y el trabajo. Clínico, piso de planta, o ambos. Luego establecemos expectativas juntos.',
      },
      {
        n: '02',
        title: 'Búsqueda',
        description:
          'Utilizamos nuestra canalización adyacente a TWIC y nuestra red global para encontrar candidatos acreditados en roles de salud e industrial.',
      },
      {
        n: '03',
        title: 'Acreditación',
        description:
          'Verificaciones de antecedentes, verificación de cumplimiento y, para roles de salud, exámenes de colegiatura en nuestro centro Pearson VUE.',
      },
      {
        n: '04',
        title: 'Colocación',
        description:
          'Personas verificadas, certificadas y listas para trabajar se presentan en su instalación. Más rápido de lo que una agencia tradicional puede entregar.',
      },
    ],
  },

  audiences: {
    eyebrow: 'Construido para ambos lados',
    title: 'Una plataforma.',
    titleAccent: 'Dos caminos.',
    body: '¿Contratando? Contáctenos y traeremos a las personas correctas. ¿Buscando trabajo? Aplique, y lo guiaremos en cada paso.',
    employer: {
      tag: 'Para Empleadores',
      title: '¿Necesita contratar? Contáctenos y nos movemos rápido.',
      body: 'Cuéntenos el rol y el plazo. Traemos personas calificadas y en cumplimiento a su puerta, a menudo en 48 horas.',
      cta: 'Contactar para contratar',
      learn: 'Saber más',
      benefits: [
        'Trabajadores en sitio en tan solo 48 horas',
        'Pre-verificados, certificados, listos para comenzar',
        'Cumplimiento manejado, para que la responsabilidad sea baja',
        'Un solo socio en lugar de tres o cuatro proveedores',
        'Escala en roles de salud e industrial',
        'Apoyo de contratación global cuando lo necesite',
      ],
    },
    candidate: {
      tag: 'Para Candidatos',
      title: '¿Buscando trabajo? Aplique en pocos minutos.',
      body: 'Cuéntenos qué tipo de trabajo desea y las certificaciones que tiene. Compartimos roles abiertos y lo guiamos en cada paso.',
      cta: 'Solicitar empleo',
      learn: 'Saber más',
      benefits: [
        'Empleos reales en salud, industrial, oficios y logística',
        'Ayuda con certificaciones y papeleo de antecedentes',
        'Conexiones con abogados de inmigración con licencia en EE.UU.',
        'Apoyo de visa para EB-2, EB-3, TN y EB-5',
        'Crecimiento profesional real con empleadores serios',
        'Un proceso claro, sin rodeos',
      ],
    },
  },

  testimonials: {
    eyebrow: 'Testimonios',
    title: 'De confianza para líderes de la industria en toda América',
    description: 'No tome nuestra palabra. Escuche a los operadores y sistemas de salud que trabajan con nosotros cada día.',
    quotes: [
      {
        quote:
          'INDUSTRITAS reemplazó cuatro proveedores con una plataforma. El papeleo de cumplimiento que solía tardar semanas ahora llega el día antes del despliegue.',
        name: 'VP de Operaciones',
        role: 'Operador de Refinería Costa del Golfo',
      },
      {
        quote:
          'La promesa de despliegue en 48 horas es real. Dotamos de personal una renovación con poco aviso con equipos certificados TWIC. Sin sorpresas. Sin brechas de cumplimiento.',
        name: 'Director, Planificación Laboral',
        role: 'Construcción Industrial',
      },
      {
        quote:
          'Su coordinación de inmigración es la mejor con la que hemos trabajado. El abogado maneja todo el trabajo legal. INDUSTRITAS mantiene todo en cronograma.',
        name: 'Director de Personal',
        role: 'Sistema de Salud Multiestatal',
      },
    ],
  },

  cta: {
    defaultEyebrow: '¿Listo para comenzar?',
    defaultTitle: 'Construya su fuerza laboral más rápido, seguro e inteligente.',
    defaultDescription: 'Desde búsqueda hasta cumplimiento e contratación global, todo en un lugar. Respondemos en 5 a 10 minutos.',
    defaultPrimary: 'Contratar trabajadores',
    defaultSecondary: 'Solicitar empleo',
    responsePromise: 'Promesa de Respuesta',
    replyBody: 'Respondemos a las solicitudes entrantes en',
    replyBold: '5 a 10 minutos',
    replySuffix: 'durante el horario comercial.',
    callDirect: 'Llámenos directamente para solicitudes urgentes',
    sendMessage: 'O envíe un mensaje rápido en línea',
  },

  stickyCta: {
    label: 'Contratar trabajadores',
  },

  leadForm: {
    iWantTo: 'Quiero',
    intentLabels: {
      workforce: 'Contratar trabajadores',
      apply: 'Solicitar empleo',
      general: 'Enviar un mensaje',
    },
    intentHeadlines: {
      workforce: 'Cuéntenos quién necesita contratar.',
      apply: 'Cuéntenos sobre usted y el trabajo que desea.',
      general: '¿Cómo podemos ayudar?',
    },
    intentHelpers: {
      workforce: 'Comparta el rol, el volumen y su plazo. Un coordinador se comunicará en minutos.',
      apply: 'Comparta sus habilidades, certificaciones y el tipo de trabajo que busca. Le responderemos con los próximos pasos.',
      general: '¿Tiene una pregunta o idea de asociación? Deje una nota y la persona correcta responderá.',
    },
    fields: {
      companyName: 'Nombre de empresa',
      fullName: 'Nombre completo',
      contactName: 'Nombre de contacto',
      bestContact: 'Mejor nombre de contacto',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      industry: 'Industria',
      timeline: 'Plazo',
      roleNeed: 'Rol o necesidad laboral',
      roleApply: 'Rol al que aplica',
      message: 'Mensaje',
      yourCompany: 'Su empresa',
      yourFullName: 'Su nombre completo',
      fullNamePh: 'Nombre completo',
      rolePlaceholderApply: 'ej. Soldador, Enfermera, operador de montacargas',
      rolePlaceholderHire: 'ej. 12 operadores certificados TWIC para cierre de refinería',
      messagePhApply: 'Cuéntenos sobre su experiencia, certificaciones y el tipo de trabajo que desea.',
      messagePhHire: 'Cuéntenos sobre el volumen, ubicaciones, certificaciones y cualquier otra cosa.',
      selectDefault: 'Seleccionar…',
    },
    industries: ['Industrial', 'Salud', 'Oficios Calificados', 'Logística', 'Otro'],
    timelines: ['Inmediato (dentro de 48h)', 'Dentro de 2 semanas', 'Dentro de 1 mes', '1 a 3 meses', 'Solo explorando'],
    replyNotice: 'Respondemos en',
    replyBold: '5 a 10 minutos',
    replySuffix: 'durante el horario comercial.',
    sending: 'Enviando…',
    successTitle: '¡Recibido. Gracias!',
    successBody: 'Un miembro de nuestro equipo se comunicará en 5 a 10 minutos durante el horario comercial.',
    sendAnother: 'Enviar otro mensaje',
    disclaimer: 'Al enviar este formulario usted entiende que INDUSTRITAS no es un bufete de abogados y no brinda asesoría legal. Las solicitudes de inmigración son manejadas por abogados independientes con licencia en EE.UU.',
  },

  industries: {
    eyebrow: 'Industrias que Servimos',
    title: 'Cuatro verticales. Un modelo operativo con cumplimiento primero.',
    description: 'INDUSTRITAS despliega soluciones laborales en cuatro industrias principales. Cada una tiene sus propias reglas de cumplimiento, certificaciones y perfil de talento. Las manejamos todas desde una sola plataforma.',
    crumb: 'Industrias',
    verticalLabel: 'Vertical',
    requestWorkforce: 'Solicitar personal de {name}',
    industries: [
      {
        id: 'industrial',
        name: 'Industrial',
        description:
          'Manufactura pesada, refinerías, puertos y operaciones de planta. Trabajadores certificados TWIC, entrenados en seguridad y listos para ambientes de alta seguridad.',
        capabilities: [
          'Canalización industrial certificada TWIC',
          'Equipos entrenados en seguridad para refinerías y puertos',
          'Dotación de personal para operaciones de planta y renovaciones',
          'Documentación alineada con OSHA',
        ],
      },
      {
        id: 'healthcare',
        name: 'Salud',
        description:
          'Enfermeras acreditadas, profesionales de salud aliada y personal de apoyo. Documentación completa de cumplimiento y verificación de licencias incluida.',
        capabilities: [
          'Enfermeras tituladas (RN), LPN y salud aliada acreditadas',
          'Verificación de licencias en múltiples estados',
          'Verificaciones de antecedentes, médicas y de vacunación',
          'Colocaciones por día, contrato y viaje',
        ],
      },
      {
        id: 'trades',
        name: 'Oficios Calificados',
        description:
          'Soldadores, electricistas, tuberos y profesionales de la construcción certificados. Certificaciones comerciales verificadas antes de la colocación.',
        capabilities: [
          'Soldadores, electricistas, tuberos, aparejadores',
          'Equipos de construcción industrial y cierre',
          'Verificación de certificaciones comerciales',
          'Movilización para proyectos en múltiples sitios',
        ],
      },
      {
        id: 'logistics',
        name: 'Logística',
        description:
          'Operaciones de almacén, manejo de carga, dotación de personal para cadena de suministro y soluciones laborales para centros de distribución a escala.',
        capabilities: [
          'Dotación para almacenes y centros de distribución',
          'Manejo de carga y operaciones de patio',
          'Escalado de volumen en temporada alta',
          'Cobertura de múltiples turnos y planificación de continuidad',
        ],
      },
    ],
  },

  platform: {
    eyebrow: 'Plataforma',
    title: 'Un ecosistema laboral. Cuatro pilares operativos.',
    description:
      'INDUSTRITAS es una plataforma totalmente integrada diseñada para reemplazar la pila fragmentada de agencias de personal, proveedores de certificación, proveedores de cumplimiento y coordinadores de inmigración que los equipos laborales empresariales normalmente administran en paralelo.',
    crumb: 'Plataforma',
    hireWorkers: 'Contratar trabajadores',
    seeProcess: 'Ver el proceso de 5 pasos',
    pillarsEyebrow: 'Los Cuatro Pilares',
    pillarsTitle: 'Construido alrededor del ciclo de vida de una colocación en cumplimiento.',
    pillarsDesc: 'Cada pilar es un trabajo operativo real. Nada está añadido. Comparten datos, papeleo y responsabilidad dentro de una sola plataforma.',
    whyEyebrow: 'Por qué una plataforma',
    whyTitle: 'Un sistema operativo único para la entrega de personal en cumplimiento.',
    whyDesc: 'Cuando dotación, certificación, cumplimiento e inmigración comparten una fuente de verdad, las colocaciones pasan de semanas a días. Y cada trabajador llega listo para comenzar.',
    ctaEyebrow: 'Únase a la plataforma',
    ctaTitle: '¿Listo para reemplazar su pila fragmentada de proveedores?',
    ctaDesc: 'Cuéntenos lo que necesita. Un coordinador responde en 5 a 10 minutos durante el horario comercial.',
    pillars: [
      {
        title: 'Dotación de Personal',
        description:
          'Talento industrial, de salud, oficios calificados y logística. Obtenido a través de canalizaciones locales y globales, seleccionado según sus necesidades.',
        points: ['Personal industrial a escala', 'Dotación de salud acreditada', 'Oficios calificados certificados', 'Equipos de logística y distribución'],
      },
      {
        title: 'Certificación',
        description:
          'Certificaciones comerciales, verificaciones de licencias, autorizaciones médicas y selección de antecedentes completadas antes de que se coloque cualquier trabajador.',
        points: ['Verificación comercial y de licencias', 'Exámenes médicos y de drogas', 'Verificaciones de antecedentes', 'Credenciales TWIC y de seguridad'],
      },
      {
        title: 'Cumplimiento',
        description:
          'Una arquitectura de cumplimiento primero que reduce la responsabilidad del empleador en lugar de crearla. Cada documento se revisa antes del despliegue.',
        points: ['I-9 y derecho al trabajo', 'Registros de seguridad alineados con OSHA', 'Certificaciones específicas de la industria', 'Documentación lista para auditoría'],
      },
      {
        title: 'Coordinación de Inmigración',
        description:
          'Vías de visa coordinadas por abogados. INDUSTRITAS facilita la comunicación y documentación mientras el abogado autorizado maneja todo el trabajo legal.',
        points: ['EB-2 NIW · EB-3 · TN · EB-5', 'Coordinación abogado-empleador-candidato', 'Gestión de documentos y plazos', 'Facilitación estrictamente no legal'],
      },
    ],
    benefits: [
      {
        title: 'Un contrato',
        description: 'Reemplaza de tres a cinco proveedores con un socio responsable.',
      },
      {
        title: 'Despliegue en 48 horas',
        description: 'Los grupos de talento pre-verificados y la coordinación optimizada comprimen los plazos de colocación.',
      },
      {
        title: 'Responsabilidad reducida',
        description: 'El cumplimiento está integrado en la colocación, no añadido después. Cada trabajador llega listo para auditoría.',
      },
    ],
  },

  forEmployers: {
    eyebrow: 'Para Empleadores',
    title: '¿Necesita contratar? Contáctenos y nos movemos rápido.',
    description:
      'Deje de manejar agencias de personal, proveedores de certificación, socios de cumplimiento y abogados de inmigración. Cuéntenos el rol y el plazo, y entregamos personas calificadas, a menudo en 48 horas.',
    crumb: 'Para Empleadores',
    reachOutToHire: 'Contactar para contratar',
    whyUs: 'Por qué nosotros',
    whatYouGet: 'Lo que obtiene',
    whatYouGetTitle: 'Las cosas que realmente le importan a los equipos laborales.',
    whoWeWork: 'Con quién trabajamos',
    whoWeWorkTitle: 'Diseñado para operadores serios en industrias reguladas.',
    whoWeWorkDesc: 'Líderes de personal, operaciones, RRHH y cumplimiento que manejan colocaciones de alto riesgo donde tanto la velocidad como el papeleo importan.',
    reachOut: 'Contáctenos',
    reachOutTitle: 'Cuéntenos lo que necesita.',
    reachOutDesc: 'Un coordinador se comunicará en 5 a 10 minutos durante el horario comercial.',
    reachOutNote:
      '¿Tiene una movilización compleja de múltiples sitios, una contratación con vía de visa o requisitos de acreditación inusuales? Inclúyalo en el campo de mensaje y lo redireccionaremos al coordinador correcto.',
    whoList: [
      'Líderes de planta y operaciones en industria pesada',
      'Planificadores laborales que manejan movilizaciones en múltiples sitios',
      'Equipos de RRHH de salud que manejan acreditación en múltiples estados',
      'Contratistas generales de construcción y oficios que manejan cierres y renovaciones',
      'Líderes de logística que escalan distribución y equipos de carga',
    ],
    value: [
      {
        title: 'Despliegue en 48 horas',
        description: 'Un grupo de talento listo y un equipo de coordinación ágil lleva personas a su puerta rápido.',
      },
      {
        title: 'Pre-verificados, certificados',
        description: 'Cada trabajador llega con credenciales verificadas y papeleo en orden.',
      },
      {
        title: 'Menos responsabilidad',
        description: 'El cumplimiento está integrado en el proceso, no añadido. Eso mantiene el riesgo bajo.',
      },
      {
        title: 'Un socio, muchas industrias',
        description: 'Industrial, salud, oficios calificados y logística. Todo desde una plataforma.',
      },
      {
        title: 'Menos proveedores',
        description: 'Reemplaza de tres a cinco proveedores con un socio responsable.',
      },
      {
        title: 'Apoyo de contratación global',
        description: 'Vías de visa lideradas por abogados cuando necesita talento internacional.',
      },
    ],
  },

  forCandidates: {
    eyebrow: 'Para Candidatos',
    title: '¿Buscando trabajo? Aplique en pocos minutos.',
    description:
      'Si tiene habilidades en industrial, salud, oficios calificados o logística, lo conectamos con empleadores serios, ayudamos con certificaciones y coordinamos vías de visa a través de abogados autorizados cuando sea necesario.',
    crumb: 'Para Candidatos',
    applyJob: 'Solicitar empleo',
    visaPathways: 'Vías de visa',
    whyEyebrow: 'Por qué los candidatos nos eligen',
    whyTitle: 'Un camino simple y claro hacia su próximo trabajo.',
    whyDesc: 'La mayoría de las plataformas hablan en términos vagos. Le decimos exactamente lo que hacemos, lo que no hacemos y qué esperar.',
    journeyEyebrow: 'Su Viaje',
    journeyTitle: 'Cinco simples pasos desde el hola hasta su primer día.',
    applyNow: 'Aplicar ahora',
    applyNowTitle: 'Envíe su solicitud.',
    applyNowDesc: 'Cuéntenos sobre sus habilidades, certificaciones y roles objetivo. Si está explorando vías de visa, menciónelo en el campo de mensaje.',
    applyNowNote:
      'INDUSTRITAS no brinda asesoría legal de inmigración. Si su solicitud involucra una vía de visa, lo conectamos con un abogado de inmigración con licencia en EE.UU. que maneja cada parte legal de su caso.',
    stepLabel: 'Paso',
    pillars: [
      {
        title: 'Empleos reales con empleadores reales',
        description: 'Roles abiertos en industrial, salud, oficios calificados y logística.',
      },
      {
        title: 'Ayudamos con certificaciones',
        description: 'Apoyo a través de licencias, exámenes médicos y procesos de antecedentes.',
      },
      {
        title: 'Apoyo de vía de visa',
        description: 'Vías EB-2 NIW, EB-3, TN y EB-5 coordinadas con abogados autorizados.',
      },
      {
        title: 'Crecimiento profesional',
        description: 'Avance en la escala con empleadores serios en industrias de alto riesgo.',
      },
      {
        title: 'Sin rodeos',
        description: 'Un proceso claro, en cumplimiento y gestionado profesionalmente en cada paso.',
      },
      {
        title: 'Sin tarifas anticipadas',
        description: 'Las colocaciones estándar son pagadas por el empleador. Los servicios legales son facturados por el abogado.',
      },
    ],
    steps: [
      { n: '01', title: 'Envíe su solicitud', body: 'Cuéntenos sobre su rol, experiencia, certificaciones y autorización de trabajo.' },
      { n: '02', title: 'Coincida con roles abiertos', body: 'Encontramos roles que se adaptan a sus habilidades, certificaciones y ubicaciones objetivo.' },
      { n: '03', title: 'Cumplimiento y papeleo', body: 'Certificaciones, exámenes médicos y selección de antecedentes, todo manejado dentro de la plataforma.' },
      { n: '04', title: 'Apoyo de visa (si lo necesita)', body: 'Lo conectamos con abogados autorizados que manejan cada parte legal de su caso.' },
      { n: '05', title: 'Comience el trabajo', body: 'Se incorpora con el empleador y comienza a trabajar, con nuestro apoyo en el camino.' },
    ],
  },

  whyUs: {
    eyebrow: 'Por Qué Nosotros',
    title: 'Cinco ventajas competitivas. Una plataforma laboral.',
    description: 'Por qué INDUSTRITAS es difícil de copiar. Estas no son solo características. Son ventajas reales integradas en cómo operamos.',
    crumb: 'Por Qué Nosotros',
    moatLabel: 'Ventaja',
    vsEyebrow: 'vs. Agencias de Personal Tradicionales',
    vsTitle: 'Lo que realmente cambia al reemplazar su pila fragmentada de proveedores.',
    vsDesc: 'La mayoría de las agencias se detienen en la búsqueda. INDUSTRITAS es dueña del ciclo de vida laboral completo, desde la incorporación hasta el cumplimiento, despliegue y coordinación de inmigración.',
    capabilityLabel: 'Capacidad',
    traditionalLabel: 'Personal Tradicional',
    industriatasLabel: 'INDUSTRITAS',
    hireWorkers: 'Contratar trabajadores',
    seeProcess: 'Ver el proceso completo',
    moats: [
      {
        badge: 'Búsqueda',
        title: 'Canal de Talento Impulsado por TWIC',
        description: 'Estamos al lado de una oficina TWIC, por lo que los trabajadores industriales acreditados fluyen por nuestras puertas cada día. Esa canalización es rara y difícil de copiar.',
      },
      {
        badge: 'Integración',
        title: 'Ecosistema Laboral Todo en Uno',
        description: 'Dotación, certificación, cumplimiento y coordinación de inmigración bajo un mismo techo. Ningún otro proveedor ofrece este nivel de integración a escala.',
      },
      {
        badge: 'Riesgo',
        title: 'Modelo de Cumplimiento Primero',
        description: 'La arquitectura de cumplimiento integrada significa que cada colocación reduce la responsabilidad del empleador en lugar de crearla. Esta es una herramienta estructural de reducción de riesgo, no solo una característica de servicio.',
      },
      {
        badge: 'Velocidad',
        title: 'Sistema de Velocidad de Respuesta',
        description: 'Capacidad de despliegue en 48 horas respaldada por grupos de talento pre-verificados y flujos de coordinación optimizados. La velocidad es una ventaja cuando es sistemática.',
      },
      {
        badge: 'Cobertura',
        title: 'Capacidad Multiindustria',
        description: 'Industrial, salud, oficios calificados y logística. La demanda diversificada reduce el riesgo de concentración y amplía el mercado que podemos atender.',
      },
    ],
    compare: [
      { label: 'Contrato integrado único' },
      { label: 'Cumplimiento integrado con la colocación' },
      { label: 'Capacidad de despliegue en 48 horas' },
      { label: 'Vías de visa coordinadas por abogados' },
      { label: 'Canalización industrial certificada TWIC' },
      { label: 'Cobertura multiindustria' },
    ],
  },

  process: {
    eyebrow: 'Proceso',
    title: 'Cinco pasos. Una columna vertebral operativa.',
    description: 'Aquí está exactamente lo que esperar, desde el primer contacto hasta el despliegue. Pasos claros, sin rodeos.',
    crumb: 'Proceso',
    workflowEyebrow: 'El Flujo de Trabajo',
    workflowTitle: 'De la solicitud al despliegue, todo en un lugar.',
    workflowDesc: 'Cada paso vive dentro de la plataforma. Menos demoras, sin transferencias de proveedores y cada colocación en cumplimiento desde el primer día.',
    closingText:
      'Este proceso de extremo a extremo es lo que separa a INDUSTRITAS de las agencias de personal tradicionales.',
    closingBody:
      'Cada paso vive dentro de la plataforma. Menos demoras, sin transferencias de proveedores y cada colocación en cumplimiento desde el primer día.',
    steps: [
      {
        n: '01',
        title: 'Compromiso con el Empleador',
        short: 'Definir necesidades laborales',
        description: 'Definir necesidades laborales, volumen, plazos y requisitos de cumplimiento. Nuestro equipo realiza una incorporación estructurada para mapear el alcance completo.',
        bullets: ['Modelado de volumen y turnos', 'Mapeo del alcance de cumplimiento', 'Planificación de plazos y rampa', 'Alineación de partes interesadas'],
      },
      {
        n: '02',
        title: 'Coincidencia de Talento',
        short: 'Canalización local y global',
        description: 'Aprovechamos canalizaciones locales y globales para encontrar los candidatos más adecuados. Pre-seleccionados y alineados con sus necesidades.',
        bullets: ['Grupos de talento pre-seleccionados', 'Canalizaciones domésticas + internacionales', 'Listas de candidatos alineadas con las especificaciones', 'Ajuste cultural y operativo'],
      },
      {
        n: '03',
        title: 'Cumplimiento y Documentación',
        short: 'Certs, médico, antecedentes',
        description: 'Certificaciones verificadas, exámenes médicos completados, verificación de antecedentes procesada. Cada candidato llega listo para despliegue.',
        bullets: ['Verificación comercial y de licencias', 'Exámenes médicos y de drogas', 'Antecedentes y derecho al trabajo', 'Credenciales específicas de la industria (ej. TWIC)'],
      },
      {
        n: '04',
        title: 'Coordinación de Inmigración',
        short: 'Abogados manejan el trabajo legal',
        description: 'Los abogados autorizados manejan todo el trabajo legal. INDUSTRITAS mantiene el papeleo y los plazos en movimiento entre todos, en un rol no legal.',
        bullets: ['Coordinación abogado, empleador, candidato', 'Gestión de documentos y plazos', 'Orientación del proceso (no legal)', 'Vías EB-2 NIW, EB-3, TN, EB-5'],
      },
      {
        n: '05',
        title: 'Despliegue',
        short: 'Trabajador colocado y listo',
        description: 'El trabajador está colocado, incorporado y listo. Apoyo continuo disponible a través del ecosistema de la plataforma.',
        bullets: ['Incorporación y orientación', 'Verificaciones de preparación en sitio', 'Apoyo continuo de la plataforma', 'Flujos de trabajo de continuidad y reemplazo'],
      },
    ],
  },

  visaPathways: {
    eyebrow: 'Talento Global, Vías de Visa',
    title: 'Apoyo de inmigración coordinado por abogados para empleadores y profesionales calificados.',
    description:
      'Conectamos a empleadores y profesionales calificados con abogados de inmigración de confianza y con licencia en EE.UU. para apoyar vías de visa basadas en empleo de manera estructurada y en cumplimiento. Toda la estrategia legal y el manejo de solicitudes son realizados exclusivamente por abogados autorizados.',
    crumb: 'Vías de Visa',
    pathwaysEyebrow: 'Vías que Coordinamos',
    pathwaysTitle: 'Cuatro vías basadas en empleo. Una capa de coordinación.',
    pathwaysDesc: 'Cada vía tiene requisitos únicos de documentación, plazo y procedimiento. INDUSTRITAS mantiene todo alineado entre candidato, empleador y abogado.',
    roleNote: 'Nuestro rol en todas las vías de visa:',
    roleBody:
      'Ayudamos a optimizar la coordinación entre todas las partes, asegurando que los requisitos de documentación y procedimiento se gestionen eficientemente. Todos los registros legales, estrategias y decisiones de caso son manejados exclusivamente por abogados de inmigración calificados.',
    approvedEyebrow: 'Terminología Aprobada',
    approvedTitle: 'El lenguaje que define nuestro rol.',
    approvedDesc: 'Redacción que mantiene claro nuestro rol: coordinamos. No somos un proveedor de servicios legales. Usado en cada conversación de inmigración.',
    coordinationNote: 'Coordinación, no asesoría',
    coordinationBody:
      'La estrategia legal y el manejo de solicitudes son realizados exclusivamente por abogados de inmigración autorizados. INDUSTRITAS asiste con coordinación administrativa, apoyo en preparación de documentos y orientación general del proceso.',
    readyCta: '¿Listo para coordinar una colocación con vía de visa?',
    readyBody:
      'Cuéntenos sobre el candidato, el rol y la vía objetivo. Conectamos empleador, candidato y abogado autorizado, y mantenemos el papeleo y los plazos en curso.',
    coordinateBtn: 'Coordinar Vía de Visa',
    detailsLink: 'Detalles de coordinación de inmigración',
    alwaysSay: 'Siempre decir',
    neverSay: 'Nunca decir',
    pathways: [
      {
        code: 'EB-2 NIW',
        title: 'Exención de Interés Nacional',
        description: 'Para profesionales con grados avanzados o habilidad excepcional cuyo trabajo beneficia el interés nacional de EE.UU. INDUSTRITAS facilita la coordinación entre candidato y abogado.',
      },
      {
        code: 'EB-3',
        title: 'Trabajadores Calificados y Profesionales',
        description: 'Para trabajadores calificados, profesionales y otros trabajadores. INDUSTRITAS apoya la coordinación del proceso mientras los abogados manejan todos los registros legales.',
      },
      {
        code: 'TN',
        title: 'Profesional NAFTA / USMCA',
        description: 'Para ciudadanos canadienses y mexicanos en ocupaciones profesionales calificadas. Coordinamos la documentación y la comunicación empleador-abogado.',
      },
      {
        code: 'EB-5',
        title: 'Programa de Inversionista Inmigrante',
        description: 'Para inversionistas que buscan residencia permanente a través de inversión de capital calificada. Facilitamos el acceso a abogados calificados y asistimos con la coordinación del proceso en capacidad no legal.',
      },
    ],
    sayDo: [
      { allowed: true, value: 'Conectamos…' },
      { allowed: true, value: 'Coordinamos…' },
      { allowed: true, value: 'Facilitamos…' },
      { allowed: true, value: 'Apoyamos el proceso…' },
      { allowed: true, value: 'Asistimos con la coordinación…' },
      { allowed: false, value: 'Presentamos peticiones' },
      { allowed: false, value: 'Nuestros expertos manejan su caso' },
      { allowed: false, value: 'Brindamos asesoría de inmigración' },
      { allowed: false, value: 'Manejamos su inmigración' },
      { allowed: false, value: 'Gestionamos su caso' },
    ],
  },

  compliance: {
    eyebrow: 'Cumplimiento y Aviso',
    title: 'Aviso legal y de servicio.',
    description:
      'Esta página dedicada se referencia desde el pie de página de todas las páginas del sitio web. El lenguaje a continuación protege a INDUSTRITAS legalmente mientras mantiene la credibilidad con las audiencias de empleadores y candidatos.',
    crumb: 'Cumplimiento y Aviso',
    disclaimerTitle: 'Aviso Legal y de Servicio',
    disclaimerSub: 'Esta sección aparece como una página independiente y se referencia en el pie de página de cada página del sitio web.',
    quote:
      'No somos un bufete de abogados y no brindamos asesoría legal ni servicios legales. Cualquier asunto relacionado con inmigración es manejado exclusivamente por abogados de inmigración independientes y con licencia en EE.UU., ya sea a través de bufetes de abogados de inmigración asociados o abogados contratados por separado. Nuestro rol se limita a servicios de dotación de personal y apoyo de coordinación administrativa no legal.',
    para2:
      'Cuando se requiere apoyo de inmigración, INDUSTRITAS facilita el acceso a abogados calificados y asiste con la coordinación del proceso en capacidad no legal. Al usar nuestros servicios, usted reconoce que toda asesoría legal y registros de inmigración son proporcionados únicamente por profesionales legales autorizados contratados para ese propósito.',
    privacyTitle: 'Privacidad',
    privacyP1:
      'INDUSTRITAS recopila solo la información necesaria para coordinar colocaciones y procesos administrativos entre empleadores, candidatos y abogados autorizados. No vendemos información personal.',
    privacyP2:
      'La documentación sensible relacionada con asuntos de inmigración se comparte exclusivamente con los abogados autorizados contratados para ese caso. Los candidatos y empleadores conservan el control sobre qué información se comparte y con quién.',
    privacyP3:
      'Para consultas específicas de privacidad o solicitudes de datos, contáctenos a través de los canales oficiales indicados en la página de contacto.',
    termsTitle: 'Términos de Servicio',
    termsP1:
      'El uso de la plataforma INDUSTRITAS está sujeto a los términos de compromiso acordados entre las partes. Los servicios de coordinación son de naturaleza no legal, y cualquier servicio legal es proporcionado por abogados con licencia en EE.UU. contratados independientemente.',
    termsP2:
      'Los candidatos y empleadores son responsables de la exactitud de la información proporcionada a través de la plataforma. Los resultados de coordinación dependen de credenciales verificadas independientemente y decisiones legales lideradas por abogados.',
    termsNote:
      'Esta página contiene información general y no pretende ser asesoría legal. Para asesoría legal, consulte a un abogado autorizado.',
    principles: [
      {
        title: 'No es un Bufete de Abogados',
        description: 'INDUSTRITAS no brinda asesoría legal ni servicios legales de ningún tipo.',
      },
      {
        title: 'Los Abogados Manejan el Trabajo Legal',
        description: 'Todos los asuntos de inmigración son manejados exclusivamente por abogados de inmigración independientes y con licencia en EE.UU.',
      },
      {
        title: 'Solo Coordinación',
        description: 'Nuestro rol se limita a servicios de dotación de personal y apoyo de coordinación administrativa no legal.',
      },
      {
        title: 'Reconocimiento del Usuario',
        description: 'Al usar nuestros servicios, los usuarios reconocen que toda asesoría legal es proporcionada únicamente por profesionales autorizados.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Hable con una persona real, generalmente en minutos.',
    description:
      '¿Busca contratar trabajadores? Contáctenos y encontraremos el talento adecuado para su rol. ¿Busca trabajo? Aplique y lo guiaremos en cada paso.',
    crumb: 'Contacto',
    responseLabel: 'Respondemos en 5 a 10 minutos durante el horario comercial.',
    email: 'Correo',
    phone: 'Teléfono',
    office: 'Oficina',
    whatHappens: 'Qué sucede después',
    steps: [
      'Su mensaje es dirigido al coordinador correcto.',
      'Respondemos en 5 a 10 minutos durante el horario comercial.',
      'Confirmamos el alcance, el plazo y los detalles con usted.',
      'Comienza la coincidencia de talento y el papeleo de cumplimiento.',
    ],
    disclaimer:
      'INDUSTRITAS no es un bufete de abogados y no brinda asesoría legal. Cualquier solicitud de inmigración es manejada por abogados independientes con licencia en EE.UU.',
  },

  serviceOverview: 'Resumen del Servicio',
  serviceWhat: 'Lo que {name} entrega',
  capabilities: 'Capacidades',
  capabilitiesTitle: 'Dentro de esta línea de servicio.',
  capabilitiesDesc: 'Entregables reales. Lo que coordinamos, verificamos y respaldamos.',
  outcomes: 'Resultados',
  outcomesTitle: 'Cómo se ve el éxito.',
  outcomesDesc: 'Resultados medibles y repetibles que se traducen directamente en métricas laborales empresariales.',

  services: {
    staffing: {
      eyebrow: 'Servicios, Soluciones de Personal',
      pageName: 'Soluciones de Personal',
      title: 'Colocación laboral a escala empresarial, en cuatro industrias.',
      description:
        'Coordinamos colocación laboral y apoyo de inmigración, sin proporcionar servicios legales. Cada trabajador llega pre-verificado, certificado y listo para desplegar.',
      ctaLabel: 'Contratar trabajadores',
      introP1:
        'La dotación de personal de INDUSTRITAS se construye alrededor de un principio: cada trabajador que colocamos llega listo para trabajar, con credenciales verificadas, papeleo completo y cumplimiento manejado desde el primer día.',
      introP2:
        'Dotamos de personal para roles Industriales, de Salud, Oficios Calificados y Logística, extrayendo de canalizaciones locales y vías internacionales coordinadas por abogados cuando las necesidades del empleador superan la disponibilidad doméstica.',
      capabilities: [
        { title: 'Personal Industrial', description: 'Dotación de personal de industria pesada, manufactura y operaciones de planta a escala. Talento certificado TWIC para refinerías y puertos.' },
        { title: 'Oficios Calificados', description: 'Soldadores, electricistas, tuberos y profesionales de construcción certificados listos para despliegue inmediato en todos los sectores.' },
        { title: 'Personal de Salud', description: 'Profesionales de salud acreditados colocados con documentación completa de cumplimiento y verificación de licencias en mano.' },
        { title: 'Logística y Distribución', description: 'Operaciones de almacén, manejo de carga y personal de cadena de suministro, construido para escalar con la demanda máxima.' },
        { title: 'Movilización de Volumen', description: 'Movilización en múltiples sitios y múltiples turnos para cierres, rampas, demanda de temporada alta y planificación de continuidad.' },
        { title: 'Integración de Proveedor Único', description: 'Un contrato, una plataforma, un socio responsable. Reemplaza completamente la gestión fragmentada de proveedores.' },
      ],
      outcomes: [
        'Las colocaciones se comprimen de semanas a días',
        'Despliegue en 48 horas para roles pre-verificados',
        'Documentación de cumplimiento entregada antes del primer día',
        'Punto único de responsabilidad en todo el ciclo de vida laboral',
        'Cobertura de continuidad para cierres y eventos de rampa',
        'Registros de colocación listos para auditoría a pedido',
      ],
    },
    immigration: {
      eyebrow: 'Servicios, Coordinación de Inmigración',
      pageName: 'Coordinación de Inmigración',
      title: 'Coordinación, no asesoría. Apoyo de vía de visa liderado por abogados.',
      description:
        'Conectamos a empleadores y profesionales calificados con abogados de inmigración de confianza y con licencia en EE.UU. para apoyar vías de visa basadas en empleo de manera estructurada y en cumplimiento.',
      ctaLabel: 'Coordinar Vía de Visa',
      introP1:
        'INDUSTRITAS facilita el proceso general coordinando entre candidatos, empleadores y abogados, para que los plazos, el papeleo y la comunicación se mantengan alineados.',
      introP2:
        'La estrategia legal y el manejo de solicitudes son realizados exclusivamente por abogados de inmigración autorizados. Asistimos con coordinación administrativa, apoyo en preparación de documentos y orientación general del proceso, estrictamente en un rol no legal.',
      calloutImportant: 'Importante',
      calloutBody:
        'INDUSTRITAS no es un bufete de abogados y no brinda asesoría legal ni servicios legales. Todos los registros de inmigración son manejados exclusivamente por abogados de inmigración independientes y con licencia en EE.UU.',
      capabilities: [
        { title: 'Coordinación de Vías', description: 'Vías EB-2 NIW, EB-3, TN y EB-5. Coordinamos entre candidato, empleador y abogado autorizado.' },
        { title: 'Comunicación Tripartita', description: 'Un punto de contacto para candidato, empleador y abogado. Nunca practicamos la ley.' },
        { title: 'Apoyo en Documentación', description: 'Ayudamos a organizar, rastrear y dirigir documentación que apoya los registros liderados por abogados.' },
        { title: 'Gestión de Plazos', description: 'Hitos, fechas límite y dependencias rastreadas de manera transparente en todas las partes interesadas.' },
        { title: 'Orientación de Proceso en Cumplimiento', description: 'Solo orientación general del proceso, nunca asesoría legal. El abogado maneja cada decisión legal.' },
        { title: 'Acceso a Red de Abogados', description: 'Acceso a abogados de inmigración calificados y con licencia en EE.UU. para vías basadas en empleo.' },
      ],
      outcomes: [
        'Candidato, empleador y abogado alineados desde el primer día',
        'Plazos de inmigración más rápidos y predecibles',
        'Menor retrabajo de documentación y plazos perdidos',
        'Clara separación de responsabilidades legales vs. de coordinación',
        'Registros de coordinación listos para auditoría',
        'Colocaciones con vía de visa escalables sin esfuerzo legal interno',
      ],
    },
    healthcare: {
      eyebrow: 'Servicios, Personal de Salud',
      pageName: 'Personal de Salud',
      title: 'Talento de salud acreditado, listo con papeleo en mano.',
      description:
        'Enfermeras acreditadas, profesionales de salud aliada y personal de apoyo. Documentación completa de cumplimiento y verificación de licencias incluida en cada colocación.',
      ctaLabel: 'Contratar personal de salud',
      introP1:
        'La dotación de personal de salud necesita el mismo enfoque de cumplimiento primero que el trabajo industrial, pero con acreditación más densa, preocupaciones de licencias en múltiples estados y ventanas de despliegue más ajustadas.',
      introP2:
        'INDUSTRITAS maneja la capa de acreditación de extremo a extremo: licencias, vacunaciones, verificaciones de antecedentes y documentación de incorporación se completan antes de la colocación. Las colocaciones con vía de visa se coordinan con abogados de inmigración con licencia en EE.UU.',
      capabilities: [
        { title: 'Enfermeras Tituladas, LPN y Salud Aliada', description: 'Enfermeras tituladas, enfermeras prácticas autorizadas y profesionales de salud aliada en todas las especialidades.' },
        { title: 'Por Día, Contrato, Viaje', description: 'Modelos de compromiso flexibles para colocaciones a corto, largo plazo y de viaje.' },
        { title: 'Licencias en Múltiples Estados', description: 'Verificaciones en estados compactos y no compactos, incluyendo coordinación de endoso.' },
        { title: 'Vacunación y Médico', description: 'Registros de vacunación, pruebas de ajuste, exámenes de drogas y autorizaciones médicas.' },
        { title: 'Canalizaciones Internacionales', description: 'Colocaciones con vía de visa coordinadas con abogados a través de vías EB-2, EB-3 y TN donde aplique.' },
        { title: 'Cobertura y Continuidad', description: 'Cobertura de turnos, planificación de continuidad y flujos de trabajo de reemplazo integrados en la plataforma.' },
      ],
      outcomes: [
        'Plazos más rápidos de acreditación a colocación',
        'Menor carga de cumplimiento para equipos de RRHH hospitalarios',
        'Licencias en múltiples estados verificadas antes de la colocación',
        'Coordinación de vía de visa manejada de extremo a extremo',
        'Cobertura de continuidad para aumentos de censo',
        'Registros de acreditación listos para auditoría',
      ],
    },
    certification: {
      eyebrow: 'Servicios, Certificación y Cumplimiento',
      pageName: 'Certificación y Cumplimiento',
      title: 'Cumplimiento integrado en la colocación, no añadido después.',
      description:
        'Cada trabajador está pre-verificado, certificado y listo para despliegue. INDUSTRITAS reduce la responsabilidad del empleador a través de arquitectura de cumplimiento integrada, no complementos opcionales.',
      ctaLabel: 'Contratar trabajadores',
      introP1:
        'La certificación y el cumplimiento no son compras separadas en la plataforma INDUSTRITAS. Están integrados en cada colocación. El papeleo se recopila, verifica y almacena antes de que se ofrezca un rol a un trabajador.',
      introP2:
        'Para los empleadores, esto significa registros listos para auditoría, menor exposición a responsabilidad y cero sorpresas el primer día. Para los candidatos, significa un proceso transparente que se traduce directamente en colocaciones más rápidas.',
      capabilities: [
        { title: 'Verificación Comercial y de Licencias', description: 'Verificación de certificaciones comerciales, licencias profesionales y estado de renovación en todas las jurisdicciones.' },
        { title: 'Examen Médico y de Drogas', description: 'Autorizaciones médicas alineadas con la industria, exámenes de drogas y gestión de registros de vacunación.' },
        { title: 'Verificaciones de Antecedentes', description: 'Verificación de derecho al trabajo, antecedentes penales, empleo y educación, adaptada a las necesidades de la industria.' },
        { title: 'Credenciales TWIC y de Seguridad', description: 'Coordinación de TWIC y otras credenciales de seguridad para ambientes industriales de alta seguridad.' },
        { title: 'Registros OSHA y de Seguridad', description: 'Documentación de capacitación en seguridad alineada con OSHA y requisitos ambientales específicos del sitio.' },
        { title: 'Documentación Lista para Auditoría', description: 'Registros centralizados, recuperables y listos para auditoría para cada colocación en la plataforma.' },
      ],
      outcomes: [
        'Responsabilidad reducida a través del cumplimiento estructural',
        'Despliegue el primer día sin perseguir documentos',
        'Registros listos para auditoría para cada colocación',
        'Acreditación específica de la industria manejada internamente',
        'Menor rotación por documentación más clara',
        'Cero brecha entre búsqueda y cumplimiento',
      ],
    },
  },
};

export const translations = t as { en: typeof t.en; es: typeof t.en };
export type Translations = typeof t.en;
