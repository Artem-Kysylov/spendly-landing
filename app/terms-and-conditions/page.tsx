import React from 'react'

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  const effectiveDate = lastUpdated

  return (
    <section className='mt-[60px] mb-[120px]' id='terms-and-conditions'>
      <div className='landing__container'>
        <div className='flex flex-col items-center gap-2 mb-[20px]'>
          <h1 className='text-[40px] font-semibold text-foreground text-center'>Terms & Conditions — Spendly</h1>
          <p className='text-[14px] text-muted-foreground'>Last updated: {lastUpdated} · Effective date: {effectiveDate}</p>
        </div>

        <div className='space-y-6 [&>div]:space-y-4 [&>div>p]:mb-[30px]'>
          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>1. Acceptance of Terms</h2>
            <p className='text-[16px] text-foreground'>By accessing or using Spendly (“the Service”), you agree to these Terms. If you do not agree, do not use the Service. Spendly is operated by TabXport OÜ (or your actual company name, may be updated).</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>2. Eligibility</h2>
            <p className='text-[16px] text-foreground'>You must be at least 16 years old to use Spendly. By using the Service, you confirm that you meet this requirement.</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>3. Description of the Service</h2>
            <p className='text-[16px] text-foreground'>Spendly is a personal finance management app. You can add expenses and income, create budgets and categories, receive insights and analytics, access optional AI features, and sync data across devices. Spendly does not connect to banks and does not provide official financial advice.</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>4. User Accounts</h2>
            <h3 className='text-[18px] font-semibold text-foreground'>4.1 Registration</h3>
            <p className='text-[16px] text-foreground'>Create an account using email/password or Google OAuth. Provide accurate information and keep it up to date.</p>
            <h3 className='text-[18px] font-semibold text-foreground'>4.2 Account Security</h3>
            <p className='text-[16px] text-foreground'>You are responsible for confidentiality of credentials and all activity under your account. Notify us immediately of unauthorized access.</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>5. Subscription & Payments</h2>
            <h3 className='text-[18px] font-semibold text-foreground'>5.1 Pricing</h3>
            <p className='text-[16px] text-foreground'>Spendly offers a Pro subscription billed at $7/month. Pro may include unlimited budgets, advanced analytics, AI insights, priority updates, and extra customization.</p>
            <h3 className='text-[18px] font-semibold text-foreground'>5.2 Billing</h3>
            <p className='text-[16px] text-foreground'>Subscriptions renew automatically unless canceled before the next cycle.</p>
            <h3 className='text-[18px] font-semibold text-foreground'>5.3 Refunds</h3>
            <p className='text-[16px] text-foreground'>No refunds for partial or unused periods unless required by law.</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>6. Use of AI Features</h2>
            <p className='text-[16px] text-foreground'>AI-powered functions (insights, categorization, chat) are informational only. AI may produce incorrect or incomplete information; outputs are not financial, legal, or tax advice. You are responsible for decisions based on AI content.</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>7. User Content</h2>
            <p className='text-[16px] text-foreground'>You retain ownership of data you add (expenses, income, budgets, categories). You grant Spendly a limited, non‑exclusive license to process your data solely to provide the Service.</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>8. Data Storage & Security</h2>
            <p className='text-[16px] text-foreground'>Spendly uses Supabase for storage with encryption in transit and at rest. No system is perfectly secure; we cannot guarantee absolute protection from unauthorized access. See our Privacy Policy for details.</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>9. Acceptable Use</h2>
            <ul className='list-disc pl-5 text-[16px] text-foreground'>
              <li>Do not misuse the Service for illegal purposes</li>
              <li>Do not attempt to access other users’ data</li>
              <li>Do not reverse‑engineer or interfere with servers/APIs</li>
              <li>Do not use automated tools (scrapers/bots) without permission</li>
            </ul>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>10. Availability & Updates</h2>
            <p className='text-[16px] text-foreground'>We may update, modify, or discontinue parts of the Service at any time (features, pricing, interface, AI functionality). We are not liable for downtime or interruptions.</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>11. Third‑Party Services</h2>
            <p className='text-[16px] text-foreground'>Spendly uses third parties including Supabase (auth & DB), Google OAuth (optional login), and AI providers (OpenAI or others). Your use is subject to their terms.</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>12. Termination</h2>
            <p className='text-[16px] text-foreground'>We may suspend or terminate your account for violations, suspected fraud/abuse, or risks to others. You may delete your account at any time from settings.</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>13. Limitation of Liability</h2>
            <p className='text-[16px] text-foreground'>Spendly is provided “AS IS” without warranties. To the maximum extent permitted by law, Spendly is not liable for lost profits, inaccurate AI outputs, data loss, errors, or interruptions.</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>14. Disclaimer</h2>
            <p className='text-[16px] text-foreground'>Spendly does not provide financial, legal, accounting, or tax advice. All insights and analytics are informational only.</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>15. Governing Law</h2>
            <p className='text-[16px] text-foreground'>These Terms are governed by the laws of the jurisdiction where your company is registered (e.g., Estonia). This may be updated later.</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>16. Changes to Terms</h2>
            <p className='text-[16px] text-foreground'>We may update these Terms at any time. If changes are significant, we may notify users via email or in‑app notification. Continued use after changes means acceptance.</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>17. Contact Us</h2>
            <p className='text-[16px] text-foreground'>Questions about these Terms: support@spendly.app</p>
          </div>
        </div>
      </div>
    </section>
  )
}