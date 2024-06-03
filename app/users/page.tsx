//4-9-Showing Loading UIs

import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface UsersPagePropstype {
  searchParams: {
    sortOrder: string;
  };
}

const UsersPage = ({ searchParams: { sortOrder } }: UsersPagePropstype) => {
  return (
    <>
      <h1>Users {sortOrder}</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <p>{new Date().toLocaleTimeString()}</p>
      {/*1-On this page, we can wrap this user table inside a suspense
      component and show a fallback UI while this component is being 
      rendered while we are waiting for this component to fetch the data.*/}
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
