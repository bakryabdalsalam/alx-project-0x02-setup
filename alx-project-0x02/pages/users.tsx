import { useEffect, useState } from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

export default function Users() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    // Fetch user data from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>
        setUsers(
          data.map((user: any) => ({
            name: user.name,
            email: user.email,
            address: user.address,
          }))
        )
      );
  }, []);

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
