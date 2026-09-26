export function BlogCardSkeleton() {
  return (
    <article className="animate-pulse">
      <div className="p-6 bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-xl">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[var(--color-bg-tertiary)] flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-4 w-24 bg-[var(--color-bg-tertiary)] rounded" />
              <div className="h-4 w-4 bg-[var(--color-bg-tertiary)] rounded" />
              <div className="h-4 w-28 bg-[var(--color-bg-tertiary)] rounded" />
              <div className="h-4 w-4 bg-[var(--color-bg-tertiary)] rounded" />
              <div className="h-4 w-20 bg-[var(--color-bg-tertiary)] rounded" />
            </div>
            <div className="h-6 w-3/4 bg-[var(--color-bg-tertiary)] rounded mb-2" />
            <div className="h-6 w-1/2 bg-[var(--color-bg-tertiary)] rounded mb-4" />
            <div className="h-4 w-full bg-[var(--color-bg-tertiary)] rounded mb-2" />
            <div className="h-4 w-full bg-[var(--color-bg-tertiary)] rounded mb-2" />
            <div className="h-4 w-5/6 bg-[var(--color-bg-tertiary)] rounded" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogCardSkeleton;