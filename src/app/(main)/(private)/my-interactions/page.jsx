import { auth } from "@/lib/auth";
import { getCommentsByUserEmail, getIdeaById } from "@/lib/data";
import { Button } from "@heroui/react";
import { Chip } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyInteractionsPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  // console.log(token);

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  // console.log(session);
  const user = session?.user;

  if (!user || !token) {
    redirect("/login");
  }
  const userComments = await getCommentsByUserEmail(user?.email, token);

  const commentsWithIdeas = await Promise.all(
    userComments.map(async (comment) => {
      const idea = await getIdeaById(comment?.ideaId, token);

      return {
        ...comment,
        idea,
      };
    }),
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8 space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          My <span className="text-(--primary)">Interactions</span>
        </h1>
        <p className="text-slate-500 font-medium">
          Manage and review all your comments.
        </p>
      </div>
      <div className="">
        {commentsWithIdeas?.length === 0 ? (
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
              No comments yet
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Comment and they will appear here.
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
            {commentsWithIdeas?.map((c) => (
              <div
                key={c?._id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <h2 className="text-center text-slate-800 text-lg">
                  {c?.idea?.ideaTitle}
                </h2>
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="w-25 h-25 bg-slate-100 overflow-hidden rounded-full">
                    <Image
                      src={c?.idea?.imageURL}
                      alt={c?.idea?.ideaTitle}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-800 leading-tight">
                            {c?.comment}
                          </h3>

                          <p className="mt-2 text-sm text-slate-600">
                            {ct?.idea?.title}
                          </p>

                          <p className="mt-2 text-sm text-slate-600">
                            {new Date(c?.createdAt).toDateString()}
                          </p>
                        </div>

                        <Chip color="success" size="sm" variant="flat">
                          Active
                        </Chip>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm text-slate-500">Submitted</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyInteractionsPage;
