import { useState } from "react";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <>
    <Header />
    <main>
    <div>
      <h1>Home Page</h1>
      <button onClick={() => setIsModalOpen(true)}>Add New Post</button>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handlePostSubmit}
      />
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
    </main>
    </>
  );
}
