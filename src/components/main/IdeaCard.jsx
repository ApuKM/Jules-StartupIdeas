import { Chip } from "@heroui/react";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const IdeaCard = () => {
  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden aspect-16/10">
        <Image
          alt="Idea Image"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          src={
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600"
          }
          fill
        />
        <div className="absolute top-4 right-4">
          <Chip
            variant="soft"
            className="font-bold text-slate-900 shadow-lg shadow-blue-600/20"
          >
            category
          </Chip>
        </div>
      </div>
      <div className="p-8 flex flex-col grow space-y-4">
        <div className="space-y-2">
          <Link href={""}>
            <h3 className="text-xl font-bold leading-tight line-clamp-2 text-slate-900 hover:text-(--primary) transition-colors">
              Title
            </h3>
          </Link>
          <p className="text-sm text-slate-500 font-medium flex items-center gap-1">
            By <span className="text-slate-900">instructor</span>
          </p>
        </div>

        <div className="flex flex-col gap-4 text-xs text-slate-500 font-bold">
          <span className="flex items-center gap-1">
            <MdOutlineDescription className="w-4 h-4" /> short description
          </span>
          <span className="flex items-center gap-1">
            <IoPeopleOutline className="w-4 h-4"/> target audience
          </span>
        </div>

        <div className="pt-6 mt-auto border-t border-slate-100 flex justify-between items-center">
          <span className="text-xl text-slate-900 flex items-center">
            <RiMoneyDollarCircleLine />
            Estimated budget
          </span>
          <Link href={""}>
            <Button className="font-semibold rounded-xl px-6 bg-(--primary)">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;
