import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "10px", backgroundColor: "#f8f9fa" }}>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  );
}
