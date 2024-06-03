//4-11-Handling Unexpected Errors
import React from "react";
import Link from "next/link";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserTablePropsType {
  sortOrder: string;
}
//1-Now to simulate an unexpected error, I want to put an "x" in the 
//address of our endpoint.so we have an invalid endpoint.Now if we go 
//to the users page, we get the details of the error, the
//error message, and where the error has happened.this only comes up in
//development mode.In build mode we get this generic error page saying a
//server side exception has occurred.

//For customizing that here in the "app folder",we add another special 
//file that is "the error.tsx file".



const UserTable = async ({ sortOrder }: UserTablePropsType) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
