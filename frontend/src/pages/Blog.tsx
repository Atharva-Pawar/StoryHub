import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { BlogPage, BlogPageSkeleton } from "../components";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return <BlogPageSkeleton />;
  }

  if (!blog) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">Blog not found</h2>
          <p className="mt-2 text-[var(--color-text-secondary)]">The blog you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return <BlogPage blog={blog} />;
};

export default Blog;