import type { Blog } from "../hooks";
import { Avatar } from "./ui";
import { format } from "date-fns";

function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return format(date, "MMMM d, yyyy");
  } catch {
    return dateStr;
  }
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

interface BlogPageProps {
  blog: Blog;
}

export function BlogPage({ blog }: BlogPageProps) {
  const readTime = calculateReadingTime(blog.content);
  const formattedDate = formatDate(blog.publishedDate || "");

  return (
    <div className="min-h-screen pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Article */}
          <article className="lg:col-span-8 animate-fade-in">
            <header className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] leading-tight mb-6 text-balance">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]">
                <div className="flex items-center gap-2">
                  <Avatar name={blog.author?.name || "Anonymous"} size="sm" />
                  <span className="font-medium text-[var(--color-text-secondary)]">
                    {blog.author?.name || "Anonymous"}
                  </span>
                </div>
                <span aria-hidden="true">·</span>
                <time dateTime={blog.publishedDate || ""}>{formattedDate}</time>
                <span aria-hidden="true">·</span>
                <span>{readTime} min read</span>
              </div>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="whitespace-pre-wrap">{blog.content}</div>
            </div>
          </article>

          {/* Author Sidebar */}
          <aside className="lg:col-span-4 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="sticky top-24">
              <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Avatar name={blog.author?.name || "Anonymous"} size="xl" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                      {blog.author?.name || "Anonymous"}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      Writer and developer sharing thoughts on technology, design, and life.
                    </p>
                    <button className="mt-4 text-sm font-medium text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] transition-colors">
                      Follow
                    </button>
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

export default BlogPage;