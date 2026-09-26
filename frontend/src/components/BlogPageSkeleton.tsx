export function BlogPageSkeleton() {
  return (
    <div className="min-h-screen pt-16 pb-16 px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Article */}
          <article className="lg:col-span-8">
            <header className="mb-8">
              <div className="h-12 w-3/4 bg-[var(--color-bg-tertiary)] rounded mb-4" />
              <div className="h-8 w-1/2 bg-[var(--color-bg-tertiary)] rounded mb-2" />
              <div className="flex flex-wrap items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-bg-tertiary)]" />
                <div className="h-4 w-24 bg-[var(--color-bg-tertiary)] rounded" />
                <div className="h-4 w-4 bg-[var(--color-bg-tertiary)] rounded" />
                <div className="h-4 w-20 bg-[var(--color-bg-tertiary)] rounded" />
                <div className="h-4 w-4 bg-[var(--color-bg-tertiary)] rounded" />
                <div className="h-4 w-16 bg-[var(--color-bg-tertiary)] rounded" />
              </div>
            </header>

            <div className="space-y-4">
              <div className="h-6 w-full bg-[var(--color-bg-tertiary)] rounded" />
              <div className="h-6 w-full bg-[var(--color-bg-tertiary)] rounded" />
              <div className="h-6 w-5/6 bg-[var(--color-bg-tertiary)] rounded" />
              <div className="h-32 w-full bg-[var(--color-bg-tertiary)] rounded-lg" />
              <div className="h-6 w-full bg-[var(--color-bg-tertiary)] rounded" />
              <div className="h-6 w-full bg-[var(--color-bg-tertiary)] rounded" />
              <div className="h-6 w-4/5 bg-[var(--color-bg-tertiary)] rounded" />
              <div className="h-32 w-full bg-[var(--color-bg-tertiary)] rounded-lg" />
              <div className="h-6 w-full bg-[var(--color-bg-tertiary)] rounded" />
              <div className="h-6 w-3/4 bg-[var(--color-bg-tertiary)] rounded" />
            </div>
          </article>

          {/* Author Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-bg-tertiary)]" />
                  <div className="flex-1">
                    <div className="h-5 w-24 bg-[var(--color-bg-tertiary)] rounded mb-2" />
                    <div className="h-4 w-full bg-[var(--color-bg-tertiary)] rounded mb-2" />
                    <div className="h-4 w-3/4 bg-[var(--color-bg-tertiary)] rounded" />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default BlogPageSkeleton;