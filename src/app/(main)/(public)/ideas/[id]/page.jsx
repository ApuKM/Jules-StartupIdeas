import { BadgeInfo, CircleDollarSign, Users } from "lucide-react";

import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import Comments from "@/components/main/Comments";
import Problems from "@/components/main/Problems";
import { getIdeaById } from "@/lib/data";

export default async function IdeaDetailsPage({ params }) {
  const { id } = await params;
  const idea = await getIdeaById(id);
  console.log(idea);
  const {
    imageURL,
    category,
    ideaTitle,
    shortDescription,
    targetAudience,
    estimatedBudget,
    detailedDescription,
    tags,
    problemStatement,
    proposedSolution,
  } = idea;

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-6">
        {/* hero section */}
        <Card className="overflow-hidden border border-white/10 bg-white backdrop-blur-md">
          <div className="grid md:grid-cols-2">
            {/* left */}
            <div className="space-y-5 flex flex-col">
              <div className="">
                <Chip color="warning" variant="flat">
                  {category}
                </Chip>
              </div>

              <div className="">
                <h1 className="text-3xl md:text-5xl font-bold">{ideaTitle}</h1>

                <p className="mt-4">{shortDescription}</p>
              </div>

              {/* info cards */}
              <div className="mt-auto flex flex-wrap gap-4">
                <div className="rounded-2xl border border-white/10 bg-(--primary)/10 p-4">
                  <div className="flex items-center gap-2">
                    <CircleDollarSign className="h-4 w-4" />
                    <span className="text-sm">Budget</span>
                  </div>

                  <p className="mt-2 font-semibold">{estimatedBudget}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-(--primary)/10 p-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">Audience</span>
                  </div>

                  <p className="mt-2 font-semibold">{targetAudience}</p>
                </div>
              </div>
            </div>

            {/* right image */}
            <div className="relative min-h-75">
              <Image
                src={
                  imageURL ||
                  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600"
                }
                alt={ideaTitle}
                fill
                className="h-full w-full object-cover rounded-md"
              />

              {/* <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-blue-100/70 p-4 backdrop-blur-md">
                <div className="flex items-center gap-2 text-sm text-(--primary)">
                  <BadgeInfo className="h-4 w-4" />
                  {tags.join(" ")}
                </div>
              </div> */}
            </div>
          </div>
        </Card>

        {/* content */}
        <div className="space-y-6">
          {/* left content */}
          <Problems
            problemStatement={problemStatement}
            proposedSolution={proposedSolution}
            detailedDescription={detailedDescription}
          />

          {/* comments */}
          <Comments />
        </div>
      </div>
    </div>
  );
}
