import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

const Appbar = () => {
  return (
    <>
      <div className="border-b flex justify-between px-10 py-4">
        <Link
          to={`/blogs`}
          className="flex flex-col justify-center cursor-pointer"
        >
          Medium
        </Link>
        <div>
          <Link to={`/publish`}>
            <button
              type="button"
              className="text-white mr-4 cursor-pointer bg-green-700 box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none"
            >
              New
            </button>
          </Link>

          <Avatar name="Atharva" />
        </div>
      </div>
    </>
  );
};

export default Appbar;
