
import FeaturedCard from "./FeaturedCard";
import { getFeaturedIdeas } from "@/lib/data";
import Link from "next/link";

const FeaturedCourses = async () => {
  const featuredIdeas = await getFeaturedIdeas();
  // console.log(featuredIdeas);

  return (
    <section className="mt-12 md:mt-18 py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center mb-6">
          <h2 className="text-(--primary) inline-flex p-2 rounded-md bg-white font-bold uppercase tracking-wide text-sm">
            Top Ideas
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-zinc-800">
            Featured Courses
          </h3>
          <p className="text-slate-600 max-w-xl mx-auto text-center">
            A curated collection of standout startup ideas with strong potential
            to shape the future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {featuredIdeas?.map((fIdea) => (
            <FeaturedCard key={fIdea?._id} fIdea={fIdea} />
          ))}
        </div>
        <div className="flex justify-end mt-6 text-(--primary) hover:underline-offset-1">
          <Link href={"/ideas"}>View All...</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
