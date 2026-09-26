import { Link } from "react-router-dom";
import { Avatar } from "./ui";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate?: string;
  readingTime?: number;
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "Unknown date";
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function BlogCard({
  id,
  authorName,
  title,
  content,
  publishedDate,
  readingTime,
}: BlogCardProps) {
  const readTime = readingTime || calculateReadingTime(content);
  const excerpt = content.slice(0, 180).trimEnd() + (content.length > 180 ? "…" : "");
  const formattedDate = formatDate(publishedDate);

  return (
    <article className="group">
      <Link
        to={`/blog/${id}`}
        className="block p-6 bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-xl hover:bg-[var(--color-bg-card-hover)] hover:border-[var(--color-border-secondary)] transition-all duration-200 ease-in-out"
      >
        <div className="flex items-start gap-4">
          <Avatar name={authorName} size="md" className="flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)] mb-3">
              <span className="font-medium text-[var(--color-text-secondary)]">{authorName}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={publishedDate || ""}>{formattedDate}</time>
              <span aria-hidden="true">·</span>
              <span>{readTime} min read</span>
            </div>

            <h2 className="text-xl font-semibold text-[var(--color-text-primary)] leading-snug mb-2 group-hover:text-[var(--color-accent-primary)] transition-colors duration-200 line-clamp-2">
              {title}
            </h2>

            <p className="text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">
              {excerpt}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default BlogCard;