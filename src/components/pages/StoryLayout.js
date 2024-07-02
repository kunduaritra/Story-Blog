import { Link } from "react-router-dom";
import StoryCard from "./StoryCard";
import { useState, useEffect } from "react";

const StoryLayout = () => {
  const [storyList, setStoryList] = useState([]);

  useEffect(() => {
    fetchStory();
  }, []);
  const fetchStory = async () => {
    try {
      const res = await fetch(
        "https://kotha-chorcha-default-rtdb.firebaseio.com/story.json"
      );
      const resJson = await res.json();
      const stories = Object.keys(resJson).map((key) => ({
        id: key,
        ...resJson[key],
      }));
      setStoryList(stories);
      console.log(stories);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="p-4 m-5">
      <h1 className="font-bold text-xl">গল্পগুচ্ছ</h1>
      <div className="mt-5">
        <ul>
          {storyList.length > 0 &&
            storyList.map((story) => (
              <li>
                <Link key={story.id} to={`/story/${story.id}`}>
                  <StoryCard {...story} />
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default StoryLayout;
