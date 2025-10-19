import React from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">Dynamic Post Page</h2>
      <p className="text-gray-600">You’re viewing post with ID: {id}</p>
    </div>
  );
}

export default Post;
