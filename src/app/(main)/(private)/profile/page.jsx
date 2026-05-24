import ProfileCard from "@/components/main/ProfileCard";
import { ProfileModal } from "@/components/main/ProfileModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    query: {
      disableCookieCache: true,
    },
    headers: await headers(),
  });
  const user = session?.user;
  // console.log(session.user)
  return (
    <div className="min-h-[60vh] mt-12 md:mt-18 space-y-5">
      <ProfileCard user={user} />
      <ProfileModal user={user} />
    </div>
  );
};

export default ProfilePage;
