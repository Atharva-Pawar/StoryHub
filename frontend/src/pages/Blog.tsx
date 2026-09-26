import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useBlog } from "../hooks";
import { BlogPage, BlogPageSkeleton } from "../components";
import { Button } from "../components/ui";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog, error } = useBlog({ id: id || "" });

  if (loading) {
    return <BlogPageSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center px-4">
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
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h2 className="mt-4 text-2xl font-semibold text-[var(--color-text-primary)]">Failed to load blog</h2>
          <p className="mt-2 text-[var(--color-text-secondary)]">{error}</p>
          <div className="mt-6 flex gap-3 justify-center">
            <Button variant="primary" onClick={() => window.location.reload()}>
              Try Again
            </Button>
            <Link to="/blogs">
              <Button variant="secondary">Back to Stories</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">Blog not found</h2>
          <p className="mt-2 text-[var(--color-text-secondary)]">The blog you're looking for doesn't exist or has been removed.</p>
          <Link to="/blogs" className="mt-6 inline-block">
            <Button variant="secondary">Back to Stories</Button>
          </Link>
        </div>
      </div>
    );
  }

  return <BlogPage blog={blog} />;
};

export default Blog;