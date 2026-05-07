import en from '@/locales/en.json'

export default function PrivacyPolicyPage() {
  const content = en.privacy
  const lastUpdated = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date())

  return (
    <section className='mt-[60px] mb-[120px]' id='privacy-policy'>
      <div className='landing__container'>
        <div className='flex flex-col items-center gap-2 mb-[20px]'>
          <h1 className='text-[40px] font-semibold text-foreground text-center'>{content.title}</h1>
          <p className='text-[14px] text-muted-foreground'>
            {content.lastUpdated.replace('{date}', lastUpdated)}
          </p>
        </div>

        <div className='space-y-6 [&>div]:space-y-4 [&>div>p]:mb-[30px]'>
          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-8'>{content.sections.information.title}</h2>
            <h3 className='text-[18px] font-semibold text-foreground mb-1'>{content.sections.information.youProvide.title}</h3>
            <p className='text-[16px] text-foreground'>
              {content.sections.information.youProvide.body}
            </p>
            <h3 className='text-[18px] font-semibold text-foreground mt-4 mb-1'>{content.sections.information.auto.title}</h3>
            <p className='text-[16px] text-foreground'>
              {content.sections.information.auto.body}
            </p>
            <h3 className='text-[18px] font-semibold text-foreground mt-4 mb-1'>{content.sections.information.ai.title}</h3>
            <p className='text-[16px] text-foreground'>
              {content.sections.information.ai.body}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{content.sections.use.title}</h2>
            <p className='text-[16px] text-foreground'>
              {content.sections.use.body}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{content.sections.storage.title}</h2>
            <p className='text-[16px] text-foreground'>
              {content.sections.storage.body}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{content.sections.aiPrivacy.title}</h2>
            <p className='text-[16px] text-foreground'>
              {content.sections.aiPrivacy.body}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{content.sections.cookies.title}</h2>
            <p className='text-[16px] text-foreground'>
              {content.sections.cookies.body}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{content.sections.share.title}</h2>
            <p className='text-[16px] text-foreground'>
              {content.sections.share.body}
            </p>
            <h3 className='text-[18px] font-semibold text-foreground mt-4 mb-1'>{content.sections.share.payments.title}</h3>
            <p className='text-[16px] text-foreground'>
              {content.sections.share.payments.body}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{content.sections.retention.title}</h2>
            <p className='text-[16px] text-foreground'>
              {content.sections.retention.body}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{content.sections.rights.title}</h2>
            <p className='text-[16px] text-foreground'>
              {content.sections.rights.body}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{content.sections.children.title}</h2>
            <p className='text-[16px] text-foreground'>
              {content.sections.children.body}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{content.sections.changes.title}</h2>
            <p className='text-[16px] text-foreground'>
              {content.sections.changes.body}
            </p>
          </div>

          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-[22px] font-semibold text-foreground mb-2'>{content.sections.contact.title}</h2>
            <p className='text-[16px] text-foreground'>
              {content.sections.contact.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
