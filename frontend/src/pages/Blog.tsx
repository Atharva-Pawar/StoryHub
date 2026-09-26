import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import BlogPage from "../components/BlogPage";
import BlogPageSkeleton from "../components/BlogPageSkeleton";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading) {
    return <div>
      <BlogPageSkeleton />
    </div>;
  }

  return (
    <>
      <BlogPage blog={blog!} />
    </>
  );
};

export default Blog;
