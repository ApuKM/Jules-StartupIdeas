import Image from "next/image";
import { Button, Chip } from "@heroui/react";

import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Verified } from "lucide-react";
import ProfileCard from "@/components/main/ProfileCard";

export default async function DashboardPage() {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  // console.log(token);

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  // console.log(session);
  const user = session?.user;

  if (!session?.user || !token) {
    redirect("/login");
  }

  // console.log(session.user.email)

  async function getUserIdeas() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/ideas/user/${session?.user?.email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (!res.ok) {
        console.error("Fetch failed:", res.status);
        return [];
      }

      const myIdeas = await res.json();
      // console.log(myIdeas);
      return myIdeas;
    } catch (error) {
      console.log("Error", error);
      return [];
    }
  }
  const userIdeas = await getUserIdeas();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8 space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          My <span className="text-(--primary)">Ideas</span>
        </h1>
        <p className="text-slate-500 font-medium">
          Manage and review all your submitted ideas in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Profile Card */}
        <ProfileCard user={user}/>

        {/* Ideas Section */}
        <div className="lg:col-span-2">
          {userIdeas?.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                <svg
                  className="h-8 w-8 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-slate-800">
                No ideas yet
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Start creating ideas and they will appear here.
              </p>

              <div className="mt-6">
                <Link href="/ideas">
                  <Button className="rounded-full px-5 bg-(--primary)">
                    Browse Ideas
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5">
              {userIdeas?.map((myIdea) => (
                <div
                  key={myIdea?._id}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300  hover:shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row gap-0">
                    <div className="sm:w-44 w-full h-44 bg-slate-100 overflow-hidden">
                      <Image
                        src={myIdea?.imageURL}
                        alt={myIdea?.ideaTitle}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-semibold text-slate-800 leading-tight">
                              {myIdea?.ideaTitle}
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">
                              {new Date(myIdea?.createdAt).toDateString()}
                            </p>
                          </div>

                          <Chip color="success" size="sm" variant="flat">
                            Active
                          </Chip>
                        </div>
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-sm text-slate-500">
                          Submitted idea
                        </span>
                        <Link href={`/ideas/${myIdea._id}`}>
                          <span className="text-sm font-medium text-slate-700">
                            View details
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
