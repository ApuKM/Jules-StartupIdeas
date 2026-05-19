import IdeaCard from "@/components/main/IdeaCard";
import IdeasHeader from "@/components/main/IdeasHeader";
import { Button } from "@heroui/react";
import { Brain } from "lucide-react";
import React from "react";

const IdeasPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <IdeasHeader />
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-900">
            <Brain className="w-6 h-6" />
            All The Ideas You Can Have
          </h2>
          <Button variant="flat" className="rounded-full font-bold">
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <IdeaCard />
          <IdeaCard />
          <IdeaCard />
        </div>
      </main>
    </div>
  );
};

export default IdeasPage;
