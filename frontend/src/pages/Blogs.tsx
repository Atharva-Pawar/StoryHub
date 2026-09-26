import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import BlogCardSkeleton from "../components/BlogCard.Skeleton";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return <div>
      <BlogCardSkeleton />
    </div>;
  }

  return (
    <>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate="2nd feb 2026"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
