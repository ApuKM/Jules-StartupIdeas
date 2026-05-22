import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import { FloatingCard } from "./FloatingCard";
import Link from "next/link";

export default function Testmonial() {
  return (
    <section className=" bg-slate-50 overflow-hidden py-12 mt-12 md:mt-18">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-(--primary) inline-flex p-2 rounded-md bg-white font-bold uppercase tracking-wide text-sm">
          IdeaVault Community
        </h2>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-zinc-800">
          An Idea Is Like A Virous
          <span className="block text-3xl md:text-4xl text-zinc-600 font-normal mt-2">
            See some contagious people
          </span>
        </h1>

        <p className="mt-6 text-zinc-600 max-w-xl mx-auto text-base">
          Discover startup ideas, improve them with community comments, and find
          inspiration for your next big project.
        </p>

        {/* <div className="mt-8 flex gap-4 justify-center">
          <Link href={"/ideas"}>
            <Button size="md" className="bg-(--primary) text-white ">
              Explore Ideas
              <ArrowRight />
            </Button>
          </Link>
          <Link href={"/add-idea"}>
          <Button variant="outline" size="md">
            Submit Idea
          </Button>
          </Link>
        </div> */}

        {/* Floating testimonial cards */}
        <div className="relative mt-20 min-h-60">
          {/* Left cluster */}
          <div className="absolute left-0 sm:left-10 top-10">
            <FloatingCard src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" />
          </div>

          <div className="absolute left-16 sm:left-40 top-0">
            <FloatingCard src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
          </div>

          {/* Center */}
          <div className="absolute left-1/2 top-16 -translate-x-1/2">
            <FloatingCard src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97" />
          </div>

          {/* Right cluster */}
          <div className="absolute right-16 sm:right-40 top-0">
            <FloatingCard src="https://images.unsplash.com/photo-1701615004837-40d8573b6652" />
          </div>

          <div className="absolute right-0 sm:right-10 top-16">
            <FloatingCard src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5" />
          </div>
        </div>
      </div>
    </section>
  );
}
