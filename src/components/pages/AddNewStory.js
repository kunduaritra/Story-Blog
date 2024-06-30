import React, { useState } from "react";

const AddNewStory = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ title, content, category, image });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md m-4">
      <h2 className="text-2xl font-bold mb-4">নতুন গল্প যোগ করুন</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            শিরোনাম
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            বিষয়বস্তু
          </label>
          <textarea
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="10"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            শ্রেণী
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            চিত্র যোগ করুন
          </label>
          <input
            type="file"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            যোগ করুন
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewStory;
