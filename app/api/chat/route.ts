import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY =
  process.env.GEMINI_API_KEY || 'AQ.Ab8RN6J6SfQ3MzmbqZaIQZB9jvCFWb3WFkDqiSTAXob7uenHiA';

// Try these combinations in order: [apiVersion, modelName]
const GEMINI_TARGETS: [string, string][] = [
  ['v1beta', 'gemini-2.5-flash-preview-05-20'],
  ['v1beta', 'gemini-2.5-flash'],
  ['v1beta', 'gemini-2.0-flash-lite'],
  ['v1beta', 'gemini-2.0-flash-exp'],
  ['v1',     'gemini-1.5-flash'],
  ['v1',     'gemini-1.5-pro'],
  ['v1',     'gemini-1.0-pro'],
];

const COMPANY_SYSTEM_PROMPT = `
You are the INDUSTRITAS AI Assistant — a knowledgeable, professional, and friendly AI chatbot for INDUSTRITAS Staffing, LLC.

ABOUT INDUSTRITAS:
- Full name: INDUSTRITAS Staffing, LLC
- Positioning: "Not a staffing agency. A Workforce Infrastructure Platform."
- Tagline: "A Workforce Infrastructure Platform"
- Location: 1717 Turning Basin Drive, Suite 195, Houston, TX, USA 77029
- Email: contact@industritas.com
- Phone: +1 (555) 010-2240
- Website: www.industritas.com
- Response Promise: We reply within 5–10 minutes during business hours
- Key stats: 100+ workers daily, 48-hour deployment, 24/7 support, 100% compliance

WHAT MAKES INDUSTRITAS UNIQUE (5 Competitive Moats):
1. TWIC-Driven Talent Funnel: Office sits next to a TWIC center — 100+ credentialed workers walk through daily. Rare, hard to copy.
2. One-Stop Workforce Ecosystem: Staffing, certification, compliance, and immigration coordination under one roof.
3. Compliance-First Model: Every placement reduces employer liability.
4. Speed-to-Lead System: 48-hour deployment backed by pre-vetted talent pools.
5. Multi-Industry Capability: Industrial, healthcare, skilled trades, and logistics.

SERVICES:
1. Staffing Solutions — Industrial, trades, and healthcare talent sourced through local and global pipelines.
2. Immigration Coordination (NOT legal services) — Attorney-coordinated EB-2 NIW, EB-3, TN, EB-5 visa pathways. INDUSTRITAS is NOT a law firm.
3. Certification & Compliance — Authorized Pearson VUE Testing Center (NCLEX on-site), TWIC, OSHA, background screening, I-9 verification.
4. Healthcare Staffing — Credentialed RNs, LPNs, allied health, multi-state licensure, per diem/contract/travel placements.

INDUSTRIES SERVED:
- Healthcare: Credentialed nurses, allied health, clinical support staff.
- Industrial: Heavy manufacturing, refineries, ports, plants. TWIC-certified.
- Skilled Trades: Welders, electricians, pipefitters, riggers. Trade certs verified.
- Logistics: Warehouse, freight, supply chain, distribution centers.

VISA PATHWAYS (Coordination only — NOT legal services):
- EB-2 NIW: National Interest Waiver — professionals with advanced degrees.
- EB-3: Skilled Workers & Professionals.
- TN: NAFTA/USMCA — Canadian and Mexican citizens in qualifying occupations.
- EB-5: Immigrant Investor Program.

OUR 5-STEP PROCESS:
1. Employer Engagement — define needs, volume, timeline, compliance scope.
2. Talent Matching — local + global pipelines, pre-screened candidates.
3. Compliance & Documentation — certs verified, medical, background, TWIC.
4. Immigration Coordination — licensed attorneys handle legal work; INDUSTRITAS manages admin.
5. Deployment — worker placed, onboarded, ready. Ongoing platform support.

FOR EMPLOYERS:
- 48-hour deployment capability
- Pre-vetted, certified workers — paperwork already in order
- Reduced liability — compliance built into every placement
- One partner for industrial, healthcare, skilled trades, and logistics
- Replace 3–5 vendors with one accountable partner
- Attorney-led visa pathways for international talent

FOR CANDIDATES:
- Real jobs in industrial, healthcare, skilled trades, and logistics
- Certification & compliance help (medical, background, TWIC)
- Visa pathway coordination with licensed attorneys
- No upfront fees for standard placements
- Career growth with serious employers

LEGAL DISCLAIMER: INDUSTRITAS is NOT a law firm and does NOT provide legal advice. Immigration matters are handled by independent, U.S.-licensed attorneys.

CONTACT:
- Email: contact@industritas.com
- Phone: +1 (555) 010-2240
- Address: 1717 Turning Basin Drive, Suite 195, Houston, TX 77029
- Website: www.industritas.com
- Response: 5–10 minutes during business hours

YOUR BEHAVIOR:
- Be warm, professional, and concise
- For immigration questions, always clarify INDUSTRITAS is NOT a law firm
- Support both English and Spanish
- When users want to hire or apply, direct them to contact@industritas.com or the /contact page
- Always end with a helpful follow-up question or offer to assist further
- Keep responses clear and not too long
`;

async function callGemini(apiVersion: string, model: string, messages: { role: string; content: string }[]) {
  const geminiMessages = messages.map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  // v1 doesn't support system_instruction, prepend it as a user turn instead
  const contents =
    apiVersion === 'v1'
      ? [
          { role: 'user', parts: [{ text: `SYSTEM CONTEXT:\n${COMPANY_SYSTEM_PROMPT}\n\nNow answer the user's question.` }] },
          { role: 'model', parts: [{ text: 'Understood. I am the INDUSTRITAS AI Assistant and I will help based on the context provided.' }] },
          ...geminiMessages,
        ]
      : geminiMessages;

  const body: Record<string, unknown> = {
    contents,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 800,
      topP: 0.9,
    },
  };

  if (apiVersion === 'v1beta') {
    body.system_instruction = { parts: [{ text: COMPANY_SYSTEM_PROMPT }] };
  }

  const res = await fetch(
    `https://generativelanguage.googleapis.com/${apiVersion}/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15000),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(`${res.status}: ${JSON.stringify(data?.error?.message || data?.error || data)}`);
  }

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('Empty response');
  return text;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    let lastError = '';

    for (const [apiVersion, model] of GEMINI_TARGETS) {
      try {
        const text = await callGemini(apiVersion, model, messages);
        console.log(`✓ Responded using ${apiVersion}/${model}`);
        return NextResponse.json({ message: text });
      } catch (err) {
        lastError = (err as Error).message;
        console.warn(`✗ ${apiVersion}/${model} failed:`, lastError);
      }
    }

    console.error('All Gemini targets failed. Last error:', lastError);
    return NextResponse.json({
      message:
        "I'm having trouble connecting right now. Please reach us directly:\n\n📧 **contact@industritas.com**\n📞 **+1 (555) 010-2240**\n\nWe reply within 5–10 minutes during business hours!",
    });
  } catch (err) {
    console.error('Chat API error:', err);
    return NextResponse.json({
      message:
        "Something went wrong. Please contact us at **contact@industritas.com** or call **+1 (555) 010-2240**.",
    });
  }
}
