"use client";

import {
  BadgeInfo,
  CircleDollarSign,
  Users,
} from "lucide-react";

import {
  Card,
  Chip,
} from "@heroui/react";
import Image from "next/image";
import Comments from "@/components/main/Comments";
import Problems from "@/components/main/Problems";



export default function IdeaDetailsPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-6">
        {/* hero section */}
        <Card className="overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="grid md:grid-cols-2">
            {/* left */}
            <div className="space-y-5">
              <div className="">
                <Chip color="warning" variant="flat">
                  category
                </Chip>
              </div>

              <div>
                <h1 className="text-3xl md:text-5xl font-bold">title</h1>

                <p className="mt-4">description</p>
              </div>

              {/* info cards */}
              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-2 text-white/60">
                    <CircleDollarSign className="h-4 w-4" />
                    <span className="text-sm">Budget</span>
                  </div>

                  <p className="mt-2 font-semibold">estimateBudget</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-2 text-white/60">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">Audience</span>
                  </div>

                  <p className="mt-2 font-semibold">targetAudience</p>
                </div>
              </div>
            </div>

            {/* right image */}
            <div className="relative min-h-75">
              <Image
                src={""}
                alt={""}
                fill
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-slate-200 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <BadgeInfo className="h-4 w-4" />
                  Tags
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* content */}
        <div className="space-y-6">
          {/* left content */}
          <Problems />

          {/* comments */}
          <Comments />
        </div>
      </div>
    </div>
  );
}
