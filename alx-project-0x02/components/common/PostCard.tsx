import { PostProps } from "@/interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px 0",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ marginBottom: "8px" }}>{title}</h2>
      <p>{content}</p>
      <small>User ID: {userId}</small>
    </div>
  );
}
