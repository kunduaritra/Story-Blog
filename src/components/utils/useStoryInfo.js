import React, { useEffect, useState } from "react";

const useStoryInfo = (storyId) => {
  const [storyData, setStoryData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("storyId in hook", storyId);
    try {
      const res = await fetch(
        `https://kotha-chorcha-default-rtdb.firebaseio.com/story/${storyId.storyId}.json`,
        {
          method: "GET",
        }
      );
      const resJson = await res.json();
      if (!res.ok) {
        throw new Error("Not Fetched!");
      } else {
        setStoryData(resJson);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return storyData;
};

export default useStoryInfo;
