import { UserInfo } from "@/components/user-info";
import { CurrentUser } from "@/lib/auth";
import React from "react";

const Server = async () => {
  const user = await CurrentUser();
  return <UserInfo label="💻 Server Component" user={user} />;
};

export default Server;
