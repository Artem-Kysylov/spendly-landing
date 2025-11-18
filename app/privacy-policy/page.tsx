// app/privacy-policy/page.tsx
import React from 'react'

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <section className='mt-[60px] mb-[120px]' id='privacy-policy'>
      <div className='landing__container'>
        <div className='flex flex-col items-center gap-2 mb-[20px]'>
          <h1 className='text-[40px] font-semibold text-foreground text-center'>Spendly — Privacy Policy</h1>
          <p className='text-[14px] text-muted-foreground'>Last updated: {lastUpdated}</p>
        </div>

        <div className='space-y-6 [&>div]:space-y-4 [&>div>p]:mb-[30px]'>
          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-8'>Information We Collect</h2>
            <h3 className='text-[18px] font-semibold text-foreground mb-1'>Information You Provide to Us</h3>
            <p className='text-[16px] text-foreground'>
              We collect your email (including Google OAuth), hashed password, and any financial data you enter manually such as budgets, categories, goals, transaction amounts, and notes.
            </p>
            <h3 className='text-[18px] font-semibold text-foreground mt-4 mb-1'>Automatically Collected Data</h3>
            <p className='text-[16px] text-foreground'>
              We may collect device info, IP address, usage logs, cookies/local storage data, and anonymous analytics (e.g., privacy-focused tools like Plausible or Umami).
            </p>
            <h3 className='text-[18px] font-semibold text-foreground mt-4 mb-1'>AI-Generated or AI-Processed Data</h3>
            <p className='text-[16px] text-foreground'>
              If you use AI features, we process text you provide to the assistant and automatically generated categories or insights. We do not use your data to train third-party AI models.
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>How We Use Your Information</h2>
            <p className='text-[16px] text-foreground'>
              We use your information to create and manage your account, store financial data securely, provide budgeting and tracking features, generate AI assistance and insights, personalize your experience, maintain and improve the Service, ensure security, and comply with legal obligations. We do not sell your personal data to third parties.
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>How Your Information Is Stored</h2>
            <p className='text-[16px] text-foreground'>
              Your data is stored via Supabase with HTTPS during transfer and encrypted storage for sensitive information. Passwords are hashed using industry‑standard algorithms and cannot be recovered in readable form.
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>AI Processing and Data Privacy</h2>
            <p className='text-[16px] text-foreground'>
              When you use AI features, data you submit may be sent to trusted AI providers and is used only to generate the requested output. Data is not stored by these providers for training purposes, and we avoid retaining AI logs with sensitive information.
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>Cookies and Similar Technologies</h2>
            <p className='text-[16px] text-foreground'>
              We use cookies and local storage to maintain sessions, remember login state, improve performance, and analyze overall usage patterns. Disabling cookies may affect functionality.
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>When We Share Information</h2>
            <p className='text-[16px] text-foreground'>
              We share data only with service providers (hosting, analytics, authentication), AI processing providers when you request AI features, and legal authorities when required. We do not share your financial information for advertising purposes.
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>Data Retention</h2>
            <p className='text-[16px] text-foreground'>
              We keep your data while your account is active. Upon deletion, all personal and financial data in Supabase is permanently removed, session and authentication tokens are revoked, and AI inputs are not retained after processing.
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>Your Rights</h2>
            <p className='text-[16px] text-foreground'>
              Depending on your location, you may have rights to access, correct, delete, export, or restrict processing of your data. Contact us to exercise these rights.
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>Children’s Privacy</h2>
            <p className='text-[16px] text-foreground'>
              Spendly is not intended for children under 16, and we do not knowingly collect information from children.
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>Changes to This Privacy Policy</h2>
            <p className='text-[16px] text-foreground'>
              We may update this Privacy Policy. The “Last Updated” date reflects the latest version. Continued use of the Service constitutes acceptance of changes.
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>Contact Us</h2>
            <p className='text-[16px] text-foreground'>
              For questions about this Privacy Policy or your data, contact us at: support@spendly.app
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}