import React, { useContext, useState, useEffect } from "react";
import StoryCard from "./StoryCard";
import { Link } from "react-router-dom";
import ThemeContext from "../utils/ThemeContext";

const BodyLayout = () => {
  const { isDark } = useContext(ThemeContext);
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
    <>
      <div className="flex flex-col md:flex-row h-[75vh]">
        {/* Right Announcements Section */}
        <div className="hidden md:block w-1/4 bg-solid p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4 text-white">
            সাম্প্রতিক ঘোষণা
          </h2>
          <ul>
            <li className="mb-2 border border-white p-2 rounded-lg shadow-sm">
              <p className="text-white text-sm my-2">তারিখ: জুন ২২ জুন, ২০২৪</p>
              <img src="https://scontent.frdp4-1.fna.fbcdn.net/v/t39.30808-6/448927210_839076011532942_1040362379109472042_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rBvKXYZoLFYQ7kNvgFq5I2E&_nc_ht=scontent.frdp4-1.fna&oh=00_AYAEKdV0CEG6wSEb5KiCKaZtaHs8RA5alDXRUOUZxM6DXg&oe=6684DB88" />
              <p className="text-sm text-white my-2">
                আপনারা যারা কথাচর্চার পোস্ট দেখে থাকেন তারা নিশ্চয়ই লক্ষ্য
                করেছেন যে এই মাসের দ্বিতীয় রোববার অর্থাৎ ৯ই জুন কথাচর্চার
                অধিবেশন বসেনি।
              </p>
            </li>
            <li className="mb-2 border border-white p-2 rounded-lg">
              <p className="text-white text-sm my-2">তারিখ: ১২ মে, ২০২৪</p>
              <img src="https://scontent.frdp4-2.fna.fbcdn.net/v/t39.30808-6/442471355_812561240851086_4576771646523796981_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SzKl6WvCgPsQ7kNvgEIkfb3&_nc_ht=scontent.frdp4-2.fna&oh=00_AYDbNIZPS1lLTL9Rk8Xh0xOfdfNTOQFy8JoTUvwGT9-1Xw&oe=6684C8B4" />
              <p className="text-sm text-white my-2">
                অবশ্যই ছাতা নিয়ে আসবেন। বেরোবার সময় যদি না লাগেও। আজকেই। বিকেল
                চারটেয়।
              </p>
            </li>
            {/* <li className="mb-2">ঘোষণা 3</li> */}
          </ul>
        </div>
        {/* Middle Content Section */}
        <div
          className={`w-full md:w-full overflow-y-auto ${
            isDark ? "bg-slate-800" : "bg-secondary"
          } p-4 md:3/4`}
        >
          <h2
            className={`${
              isDark ? " text-gray-100" : ""
            } text-lg font-semibold mb-4`}
          >
            সাপ্তাহিক গল্প
          </h2>
          {storyList.length > 0 &&
            storyList.map((story) => (
              <Link key={story.id} to={`/story/${story.id}`}>
                <StoryCard {...story} />
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default BodyLayout;
