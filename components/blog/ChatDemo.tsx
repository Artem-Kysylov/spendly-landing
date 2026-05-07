export default function ChatDemo() {
  return (
    <figure className="mb-8 w-full">
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
        style={{
          aspectRatio: '1 / 1',
          maxWidth: 'min(100%, 360px)',
        }}
      >
        <div className="flex h-full flex-col justify-center p-4 sm:p-6 bg-gradient-to-br from-background to-muted/20">
          <div className="flex justify-end mb-3 sm:mb-4">
            <div className="max-w-[92%] rounded-2xl rounded-br-md bg-primary px-3 py-2.5 text-primary-foreground shadow-sm sm:px-4 sm:py-3">
              <p className="text-xs font-medium leading-snug sm:text-sm">
                Spent $45 on groceries, $30 on gas, and $12 for Spotify
              </p>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[92%] rounded-2xl rounded-bl-md bg-muted px-3 py-2.5 text-foreground shadow-sm sm:px-4 sm:py-3">
              <p className="text-xs font-medium leading-snug sm:text-sm">
                Got it! I&apos;ve added 3 transactions: Groceries ($45), Transport ($30), and
                Subscriptions ($12).
              </p>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[min(100%,360px)] text-left text-sm text-muted-foreground">
        AI chat example: Natural language input gets instantly categorized.
      </figcaption>
    </figure>
  )
}
