import { Search } from 'lucide-react';
import React from 'react';

const SearchBar = () => {
    return (
           <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl shadow-sm focus-within:ring-2 focus-within:ring-blue-600/10 transition-all overflow-hidden">

      <div className="pl-5 text-slate-400">
        <Search className="w-5 h-5" />
      </div>

      <input
        type="text"
        placeholder="Search for ideas"
        className="flex-1 h-14 px-4 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
      />

      <button
        className="h-10 px-6 mr-2 rounded-xl bg-(--primary) text-white font-semibold transition-colors"
      >
        Search
      </button>
    </div>
    );
};

export default SearchBar;