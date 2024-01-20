"use client";
import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";

const SettingsPage = () => {
  const user = useCurrentUser();
  return (
    <div className="bg-white p-10 rounded-xl">
      <form>
        {/* server */}
        {/* <button onClick={() => logout()}>Sign Out</button> */}
        {/* client */}
        <button onClick={() => signOut()}>Sign Out</button>
      </form>
    </div>
  );
};

export default SettingsPage;
