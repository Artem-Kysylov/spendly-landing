import en from '@/locales/en.json'

export default function TermsPage() {
  const content = en.terms
  const lastUpdated = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date())
  const effectiveDate = lastUpdated

  return (
    <section className='mt-[60px] mb-[120px]' id='terms-and-conditions'>
      <div className='landing__container'>
        <div className='flex flex-col items-center gap-2 mb-[20px]'>
          <h1 className='text-[40px] font-semibold text-foreground text-center'>{content.title}</h1>
          <p className='text-[14px] text-muted-foreground'>
            {content.lastUpdatedEffective
              .replace('{last}', lastUpdated)
              .replace('{effective}', effectiveDate)}
          </p>
        </div>

        <div className='space-y-6 [&>div]:space-y-4 [&>div>p]:mb-[30px]'>
          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{content.sections.acceptance.title}</h2>
            <p className='text-[16px] text-foreground'>{content.sections.acceptance.body}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{content.sections.eligibility.title}</h2>
            <p className='text-[16px] text-foreground'>{content.sections.eligibility.body}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{content.sections.description.title}</h2>
            <p className='text-[16px] text-foreground'>{content.sections.description.body}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{content.sections.accounts.title}</h2>
            <h3 className='text-[18px] font-semibold text-foreground'>{content.sections.accounts.waitlist.title}</h3>
            <p className='text-[16px] text-foreground'>{content.sections.accounts.waitlist.body}</p>
            <h3 className='text-[18px] font-semibold text-foreground mt-4'>{content.sections.accounts.legacy.title}</h3>
            <p className='text-[16px] text-foreground'>{content.sections.accounts.legacy.body}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{content.sections.payments.title}</h2>
            <h3 className='text-[18px] font-semibold text-foreground'>{content.sections.payments.noWeb.title}</h3>
            <p className='text-[16px] text-foreground'>{content.sections.payments.noWeb.body}</p>
            <h3 className='text-[18px] font-semibold text-foreground mt-4'>{content.sections.payments.futureIos.title}</h3>
            <p className='text-[16px] text-foreground'>{content.sections.payments.futureIos.body}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{content.sections.aiUse.title}</h2>
            <p className='text-[16px] text-foreground'>{content.sections.aiUse.body}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{content.sections.userContent.title}</h2>
            <p className='text-[16px] text-foreground'>{content.sections.userContent.body}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{content.sections.storage.title}</h2>
            <p className='text-[16px] text-foreground'>{content.sections.storage.body}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{content.sections.acceptableUse.title}</h2>
            <ul className='list-disc pl-5 text-[16px] text-foreground'>
              {content.sections.acceptableUse.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{content.sections.availability.title}</h2>
            <p className='text-[16px] text-foreground'>{content.sections.availability.body}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{content.sections.thirdParty.title}</h2>
            <p className='text-[16px] text-foreground'>{content.sections.thirdParty.body}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{content.sections.termination.title}</h2>
            <p className='text-[16px] text-foreground'>{content.sections.termination.body}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{content.sections.liability.title}</h2>
            <p className='text-[16px] text-foreground'>{content.sections.liability.body}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{content.sections.disclaimer.title}</h2>
            <p className='text-[16px] text-foreground'>{content.sections.disclaimer.body}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{content.sections.law.title}</h2>
            <p className='text-[16px] text-foreground'>{content.sections.law.body}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{content.sections.changes.title}</h2>
            <p className='text-[16px] text-foreground'>{content.sections.changes.body}</p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground'>{content.sections.contact.title}</h2>
            <p className='text-[16px] text-foreground'>{content.sections.contact.body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
