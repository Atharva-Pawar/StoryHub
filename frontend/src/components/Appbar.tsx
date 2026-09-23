import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

const Appbar = () => {
  return (
    <div>
      <div className="border-b flex justify-between p-4">
        <Link to={`/blogs`}>
          <div className="flex flex-col justify-center cursor-pointer">
            Medium
          </div>
        </Link>
        <div className="flex flex-col justify-center">
          <Avatar name="Atharva" />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
