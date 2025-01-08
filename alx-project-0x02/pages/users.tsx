import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function Users({ users }: UsersPageProps) {
  return (
    <div>
      <h1>Users</h1>
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          email={user.email}
          address={user.address}
        />
      ))}
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const users = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: user.address,
  }));

  return {
    props: {
      users,
    },
  };
}
