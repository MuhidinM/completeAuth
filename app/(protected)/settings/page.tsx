"use client";
import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";

const SettingsPage = () => {
  const user = useCurrentUser();
  return (
    <div className="bg-white p-10 rounded-xl">
      <form>
        <button onClick={() => signOut()}>Sign Out</button>
      </form>
    </div>
  );
};

export default SettingsPage;
