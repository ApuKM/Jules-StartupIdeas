import { Verified } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProfileCard = ({user}) => {
  return (
    <div>
      <div className="lg:col-span-1">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/60 p-6">
          <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-r from-indigo-500 via-blue-500 to-blue-800" />

          <div className="relative pt-10">
            <div className="w-24 h-24 rounded-full ring-4 ring-white shadow-xl overflow-hidden bg-slate-100">
              <Image
                src={user?.image}
                alt="profile"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mt-5">
              {user?.name}
            </h2>
            <p className="text-sm text-slate-600 mt-1 wrap-break-word">
              {user?.email}
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-(--primary)">
                <Verified className="w-4 h-4" />
                Verified account
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                Creator
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
