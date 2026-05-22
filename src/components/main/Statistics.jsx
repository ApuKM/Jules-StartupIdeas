import { Card } from "@heroui/react";
import { FaLightbulb } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineTrendingUp } from "react-icons/md";

const stats = [
  {
    id: 1,
    icon: <FaLightbulb className="w-6 h-6" />,
    value: "5,000+",
    label: "Ideas Shared",
  },
  {
    id: 2,
    icon: <BsChatDots className="w-6 h-6" />,
    value: "12,000+",
    label: "Community Comments",
  },
  {
    id: 3,
    icon: <HiOutlineUsers className="w-6 h-6" />,
    value: "3,500+",
    label: "Active Creators",
  },
  {
    id: 4,
    icon: <MdOutlineTrendingUp className="w-6 h-6" />,
    value: "250+",
    label: "Trending Ideas",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-slate-50 py-12 mt-12 md:mt-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-zinc-800">
          Growing Creative Community
        </h2>

        <p className="text-zinc-600 mt-4 text-sm sm:text-base">
          Thousands of innovators are sharing and improving ideas every day
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-6">
        {stats.map((stat) => (
          <Card
            key={stat.id}
            className="rounded-3xl border border-zinc-200/70 bg-white p-6 text-center shadow-sm hover:shadow-xl transition duration-300"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-(--primary)">
              {stat.icon}
            </div>

            <h3 className="text-2xl font-bold text-zinc-800">
              {stat.value}
            </h3>

            <p className="text-sm text-zinc-600 mt-1">
              {stat.label}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;