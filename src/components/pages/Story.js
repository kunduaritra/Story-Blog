import React, { useContext, useState } from "react";
import ThemeContext from "../utils/ThemeContext";
import { useParams } from "react-router-dom";
import useStoryInfo from "../utils/useStoryInfo";

const Story = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { isDark } = useContext(ThemeContext);
  const storyId = useParams();
  const storyInfo = useStoryInfo(storyId);
  console.log(storyInfo);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  if (storyInfo === null) {
    return <h1>Loading Story</h1>;
  }

  return (
    <div
      className={`p-6 ${
        isDark ? "bg-slate-800" : "bg-secondary"
      } drop-shadow-md rounded-md mb-2`}
    >
      <div
        className={`font-bold text-3xl mb-2 text-center ${
          isDark ? "text-white" : ""
        }`}
      >
        {storyInfo.title}
      </div>
      <div className="flex justify-between mb-2 mx-52 text-lg">
        <span
          className={`${isDark ? "text-gray-200" : "text-gray-700"} font-bold`}
        >
          লেখক: {storyInfo.author}
        </span>
        <span
          className={`${isDark ? "text-gray-200" : "text-gray-700"} font-bold`}
        >
          প্রকাশিত: {storyInfo.publishDate}
        </span>
      </div>

      {/* Story Content */}
      <div className="flex items-center">
        <div
          className={`${
            isDark ? "text-gray-200 border-gray-200" : "border-black"
          } text-justify sm:px-14 mt-5 sm:leading-10 leading-8 text-xl w-full border rounded-3xl`}
        >
          {storyInfo.content}
        </div>
      </div>

      {/* Comment Section */}
      <div className="mt-4">
        <h2 className="font-bold text-lg mb-2">Comments</h2>
        <div className="mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded p-2 w-full mb-2"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddComment}
          >
            Add Comment
          </button>
        </div>
        <div>
          {comments.length === 0 && (
            <p className="text-gray-500">No comments yet.</p>
          )}
          {comments.map((comment, index) => (
            <div
              key={index}
              className="bg-white p-2 rounded mb-2 border border-gray-200"
            >
              {comment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
