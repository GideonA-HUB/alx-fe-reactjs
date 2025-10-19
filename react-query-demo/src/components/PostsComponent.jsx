import React from "react";
import { useQuery } from "@tanstack/react-query";

// Fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <p className="text-gray-500">Loading posts...</p>;
  }

  if (isError) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  return (
    <div className="w-full max-w-4xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">All Posts</h2>
        <button
          onClick={() => refetch()}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Refresh Posts
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.slice(0, 10).map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsComponent;
