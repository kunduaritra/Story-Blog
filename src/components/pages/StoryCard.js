import { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";

const StoryCard = (props) => {
  const { isDark } = useContext(ThemeContext);
  const { title, publishDate, content, author } = props;
  console.log();

  return (
    <div
      className={`${
        isDark ? "bg-[#3c5276]" : "bg-orange-100"
      } p-4 rounded-md mb-2 drop-shadow-lg`}
    >
      <div
        className={`${isDark ? "text-gray-950" : ""} font-bold text-xl mb-2`}
      >
        গল্প: {title}
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 font-bold">লেখক: {author}</span>
        <span className="text-gray-700">প্রকাশিত: {publishDate}</span>
      </div>
      <div className="text-justify">{content.slice(0, 150)}</div>
    </div>
  );
};

export default StoryCard;
