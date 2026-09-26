import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import BlogPage from "../components/BlogPage";
import Loading from "../components/Loading";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading) {
    return <div>
      <Loading />
    </div>;
  }

  return (
    <>
      <BlogPage blog={blog!} />
    </>
  );
};

export default Blog;
