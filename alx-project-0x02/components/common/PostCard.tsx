import { PostProps } from "@/interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
      <small className="text-gray-500">User ID: {userId}</small>
    </div>
  );
}
