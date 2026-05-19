"use client";

import {
  Button,
  Input,
  TextArea,
  Select,
  SelectTrigger,
  SelectValue,
  SelectIndicator,
  SelectPopover,
  ListBox,
  ListBoxItem,
} from "@heroui/react";

import { BookPlus, Image, List } from "lucide-react";

const CATEGORIES = [
  "Tech",
  "AI",
  "Health",
  "Education",
  "Gaming",
  "Social Media",
  "Food & Beverage",
  "Travel",
  "Agriculture",
  "Real Estate",
  "Transportation",
  "Fashion",
];

const AddIdeaForm = () => {
  return (
    <div>
      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2 space-y-2">
            <label
              htmlFor="title"
              className="text-sm font-bold text-slate-700 ml-1"
            >
              Idea Title
            </label>
            <Input
              id="title"
              required
              placeholder="e.g. Next.js 15 Masterclass"
              className="w-full h-14 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label
              htmlFor="short-description"
              className="text-sm font-bold text-slate-700 ml-1"
            >
              Short Description
            </label>
            <Input
              id="short-description"
              required
              placeholder="An idea is like a virus..."
              className="w-full h-14 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label
              htmlFor="description"
              className="text-sm font-bold text-slate-700 ml-1"
            >
              Description
            </label>
            <TextArea
              id="description"
              required
              placeholder="What will students learn in this course?"
              className="w-full h-32 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none resize-none"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="imageUrl"
              className="text-sm font-bold text-slate-700 ml-1"
            >
              Image URL
            </label>
            <Input
              id="imageUrl"
              required
              type="url"
              placeholder="https://images.unsplash.com/..."
              className="w-full h-14 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="category"
              className="text-sm font-bold text-slate-700 ml-1"
            >
              Category
            </label>
            <Select
              id="category"
              required
              placeholder="Select a category"
              className="w-full"
            >
              <SelectTrigger className="h-14 border-2 border-slate-200 hover:border-blue-600/50 data-[focus-within=true]:border-blue-600 rounded-2xl bg-white transition-all duration-300 flex items-center px-4 shadow-none outline-none group">
                <div className="flex items-center gap-3 w-full">
                  <List className="w-4 h-4 text-slate-400 group-data-[focus-within=true]:text-blue-600 transition-colors" />
                  <SelectValue className="font-medium text-slate-600" />
                </div>
                <SelectIndicator className="ml-auto">
                  <div className="text-slate-400 group-data-[focus-within=true]:text-blue-600 transition-colors">
                    <List className="w-4 h-4" />
                  </div>
                </SelectIndicator>
              </SelectTrigger>
              <SelectPopover className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-2 mt-2">
                <ListBox>
                  {CATEGORIES.map((cat) => (
                    <ListBoxItem
                      key={cat}
                      id={cat}
                      className="px-4 py-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl cursor-pointer transition-colors font-medium"
                    >
                      {cat}
                    </ListBoxItem>
                  ))}
                </ListBox>
              </SelectPopover>
            </Select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="price"
              className="text-sm font-bold text-slate-700 ml-1"
            >
              Estimated Budget ($)
            </label>
            <Input
              id="price"
              type="number"
              placeholder="0.00"
              className="w-full h-14 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="tags"
              className="text-sm font-bold text-slate-700 ml-1"
            >
              Tags
            </label>
            <Input
              id="tags"
              type="text"
              placeholder="e.g. 12h 30m"
              className="w-full h-14 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="target-aud"
              className="text-sm font-bold text-slate-700 ml-1"
            >
              Target Audience
            </label>
            <Input
              id="target-aud"
              type="text"
              placeholder="Students, fresh graduates"
              className="w-full h-14 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="problem-statement"
              className="text-sm font-bold text-slate-700 ml-1"
            >
              Problem Statement
            </label>
            <Input
              id="problem-statement"
              type="text"
              placeholder="Many entrepreneurs struggle...."
              className="w-full h-14 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label
              htmlFor="proposed-solution"
              className="text-sm font-bold text-slate-700 ml-1"
            >
              Proposed Solution
            </label>
            <Input
              id="proposed-solution"
              type="text"
              placeholder="Provide an all-in-one startup"
              className="w-full h-14 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
            />
          </div>
        </div>

        <div className="pt-4 flex gap-4">
          <Button
            variant="ghost"
            size="lg"
            className="flex-1 font-bold rounded-2xl h-14"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            size="lg"
            className="flex-2 bg-(--primary) font-medium rounded-2xl h-14 shadow-xl shadow-blue-600/20"
          >
            Share Idea
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddIdeaForm;
