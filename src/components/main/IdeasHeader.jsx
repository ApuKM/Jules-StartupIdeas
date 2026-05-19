import SearchBar from "./SearchBar";

const IdeasHeader = () => {
  return (
    <header className="bg-white border-b border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Discover {" "}
          <span className="text-(--primary)">
            Innovative
          </span>{" "}
          Startup Ideas
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Explore creative and impactful startup ideas shared by entrepreneurs, developers, and innovators.
        </p>

        <div className="max-w-2xl mx-auto pt-4">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default IdeasHeader;
