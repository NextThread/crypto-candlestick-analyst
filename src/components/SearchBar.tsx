
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search any cryptocurrency..."
          className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default SearchBar;
