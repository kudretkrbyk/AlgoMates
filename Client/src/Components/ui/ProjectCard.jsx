import React from "react";

const BlogCard = () => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white">
      <img
        className="w-full h-48 object-cover"
        src="https://dmwebsoft.com/wp-content/uploads/2024/09/AI-Current-Technologies-that-Will-Shape-the-Future-of-Web-Development-DM-WebSoft-LLP.webp" // Buraya görsel URL'si
        alt="Card visual"
      />
      <div className="p-4">
        <p className="text-sm text-blue-600 font-medium">Enterprise</p>
        <h2 className="text-xl font-semibold mt-2">
          The key new features and changes in Tailwind CSS
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Don’t be scared of the truth because we need to restart the human
          foundation in truth And I love you like Kanye loves Kanye I love Rick
          Owens bed design but the back is too high for the beams and angle of
          the ceiling I also wanted to point out.
        </p>
        <div className="flex items-center mt-4">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src="https://randomuser.me/api/portraits/men/32.jpg" // Avatar URL'si
            alt="Avatar"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">Ryan Samuel</p>
            <p className="text-xs text-gray-500">10 September 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;