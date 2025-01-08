import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";


export default function About() {
  return (
    <>
    <Header />
    <main>
      <h1>About Page</h1>
      <Button size="small" shape="rounded-sm" label="Small Button" />
      <Button size="medium" shape="rounded-md" label="Medium Button" />
      <Button size="large" shape="rounded-full" label="Large Button" />
    </main>
    </>
  );
}
