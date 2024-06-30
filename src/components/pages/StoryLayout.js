import { Link } from "react-router-dom";
import StoryCard from "./StoryCard";

const StoryLayout = () => {
  return (
    <div className="p-4 m-5">
      <h1 className="font-bold text-xl">গল্পগুচ্ছ</h1>
      <div className="mt-5">
        <ul>
          <li>
            <Link to="/story/001">
              <StoryCard />
            </Link>
            <Link to="/story/001">
              <StoryCard />
            </Link>
            <Link to="/story/001">
              <StoryCard />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StoryLayout;
