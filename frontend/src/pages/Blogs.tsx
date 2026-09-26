import { useBlogs } from "../hooks";
import { BlogCard, BlogCardSkeleton } from "../components";

const Blogs = () => {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
        {[...Array(5)].map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <svg
            className="mx-auto h-16 w-16 text-[var(--color-text-muted)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          <h2 className="mt-4 text-xl font-semibold text-[var(--color-text-primary)]">No stories yet</h2>
          <p className="mt-2 text-[var(--color-text-secondary)]">
            Be the first to write a story on this platform.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          authorName={blog.author?.name || "Anonymous"}
          title={blog.title}
          content={blog.content}
          publishedDate={blog.publishedDate || new Date().toISOString()}
        />
      ))}
    </div>
  );
};

export default Blogs;