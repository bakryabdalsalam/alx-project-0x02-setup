import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

export default function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    // Fetch posts from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) =>
        setPosts(
          data.map((post: any) => ({
            title: post.title,
            content: post.body,
            userId: post.userId,
          }))
        )
      );
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          content={post.content}
          userId={post.userId}
        />
      ))}
    </div>
  );
}
