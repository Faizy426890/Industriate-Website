'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2, Clock3 } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

type Intent = 'workforce' | 'apply' | 'general';

export function LeadForm({
  defaultIntent = 'workforce',
  variant = 'card',
}: {
  defaultIntent?: Intent;
  variant?: 'card' | 'plain';
}) {
  const { t } = useLanguage();
  const lf = t.leadForm;
  const [intent, setIntent] = useState<Intent>(defaultIntent);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 900);
  }

  const wrapperBase =
    variant === 'card'
      ? 'rounded-2xl border border-[var(--color-ink-200)] bg-white shadow-card p-5 sm:p-7 lg:p-8'
      : '';

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={wrapperBase}
      >
        <div className="flex items-start gap-4">
          <div className="flex-none w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 grid place-items-center text-emerald-700">
            <Check size={18} />
          </div>
          <div>
            <h3 className="text-[18px] font-semibold text-[var(--color-ink-900)]">{lf.successTitle}</h3>
            <p className="mt-1.5 text-[14px] text-[var(--color-ink-600)] leading-relaxed">
              {lf.successBody}
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-5 text-[13.5px] font-semibold text-[var(--color-ink-900)] underline underline-offset-4 decoration-[var(--color-ink-300)] hover:decoration-[var(--color-ink-900)] transition-colors"
            >
              {lf.sendAnother}
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={wrapperBase}>
      <div className="mb-5">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-ink-500)]">
          {lf.iWantTo}
        </p>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {(['workforce', 'apply', 'general'] as Intent[]).map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => setIntent(opt)}
              className={`text-[12.5px] font-semibold tracking-wide px-3.5 py-2 rounded-full transition-all duration-300 ${
                intent === opt
                  ? 'bg-[var(--color-navy-900)] text-white shadow-md'
                  : 'bg-[var(--color-ink-100)] text-[var(--color-ink-700)] hover:bg-[var(--color-ink-200)]'
              }`}
            >
              {lf.intentLabels[opt]}
            </button>
          ))}
        </div>
        <h3 className="mt-5 text-[18px] sm:text-[20px] font-semibold text-[var(--color-ink-900)]">
          {lf.intentHeadlines[intent]}
        </h3>
        <p className="mt-1.5 text-[13.5px] text-[var(--color-ink-600)] leading-relaxed">
          {lf.intentHelpers[intent]}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          label={intent === 'apply' ? lf.fields.fullName : lf.fields.companyName}
          name="company"
          placeholder={intent === 'apply' ? lf.fields.yourFullName : lf.fields.yourCompany}
          required
        />
        <Field
          label={intent === 'apply' ? lf.fields.bestContact : lf.fields.contactName}
          name="name"
          placeholder={lf.fields.fullNamePh}
          required
        />
        <Field label={lf.fields.email} name="email" type="email" placeholder="you@example.com" required />
        <Field label={lf.fields.phone} name="phone" type="tel" placeholder="(555) 010-2240" />

        <Select label={lf.fields.industry} name="industry" options={lf.industries} selectDefault={lf.fields.selectDefault} />
        <Select label={lf.fields.timeline} name="timeline" options={lf.timelines} selectDefault={lf.fields.selectDefault} />

        <div className="sm:col-span-2">
          <Field
            label={intent === 'apply' ? lf.fields.roleApply : lf.fields.roleNeed}
            name="role"
            placeholder={intent === 'apply' ? lf.fields.rolePlaceholderApply : lf.fields.rolePlaceholderHire}
          />
        </div>
        <div className="sm:col-span-2">
          <TextArea
            label={lf.fields.message}
            name="message"
            placeholder={intent === 'apply' ? lf.fields.messagePhApply : lf.fields.messagePhHire}
            rows={4}
          />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-[12.5px] text-[var(--color-ink-500)]">
        <Clock3 size={13} className="text-[var(--color-accent-600)]" />
        <span>
          {lf.replyNotice}{' '}
          <span className="font-semibold text-[var(--color-ink-800)]">{lf.replyBold}</span> {lf.replySuffix}
        </span>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-[var(--color-navy-900)] text-white text-[14.5px] font-semibold px-5 py-3.5 rounded-lg hover:bg-[var(--color-navy-700)] transition-all duration-300 disabled:opacity-70"
      >
        {status === 'sending' ? <Loader2 size={15} className="animate-spin" /> : null}
        {status === 'sending' ? lf.sending : lf.intentLabels[intent]}
      </button>

      <p className="mt-3 text-[11.5px] text-[var(--color-ink-500)] leading-relaxed">
        {lf.disclaimer}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[12px] font-semibold tracking-[0.04em] uppercase text-[var(--color-ink-600)] mb-1.5">
        {label}
        {required && <span className="text-[var(--color-accent-600)] ml-0.5">*</span>}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white border border-[var(--color-ink-200)] rounded-lg px-3.5 py-2.5 text-[14px] text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-400)] hover:border-[var(--color-ink-300)] focus:border-[var(--color-navy-700)] transition-colors"
      />
    </label>
  );
}

function Select({ label, name, options, selectDefault }: { label: string; name: string; options: readonly string[]; selectDefault: string }) {
  return (
    <label className="block">
      <span className="block text-[12px] font-semibold tracking-[0.04em] uppercase text-[var(--color-ink-600)] mb-1.5">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="w-full bg-white border border-[var(--color-ink-200)] rounded-lg px-3.5 py-2.5 text-[14px] text-[var(--color-ink-900)] hover:border-[var(--color-ink-300)] focus:border-[var(--color-navy-700)] transition-colors appearance-none"
      >
        <option value="" disabled>{selectDefault}</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function TextArea({ label, name, rows = 4, placeholder }: { label: string; name: string; rows?: number; placeholder?: string }) {
  return (
    <label className="block">
      <span className="block text-[12px] font-semibold tracking-[0.04em] uppercase text-[var(--color-ink-600)] mb-1.5">
        {label}
      </span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="w-full bg-white border border-[var(--color-ink-200)] rounded-lg px-3.5 py-2.5 text-[14px] text-[var(--color-ink-900)] placeholder:text-[var(--color-ink-400)] hover:border-[var(--color-ink-300)] focus:border-[var(--color-navy-700)] transition-colors resize-y"
      />
    </label>
  );
}
