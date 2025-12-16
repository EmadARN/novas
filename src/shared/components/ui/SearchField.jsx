"use client";

import { Search } from "lucide-react";

export default function SearchBox({
  value,
  onChange,
  onSearch,
  onClear,
  placeholder = "جستجو...",
}) {
  return (
    <div className="relative w-1/3  mx-auto">
      <div className="relative bg-gradient-to-r from-purple-50/95 via-white/90 to-blue-50/95 backdrop-blur-xl border border-purple-200/70 rounded-3xl shadow-lg overflow-hidden">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="  w-full pl-12 pr-20 py-4 text-base
                    bg-transparent text-purple-800 placeholder-purple-400
                    focus:outline-none focus:placeholder-purple-300
                    transition-all duration-300 z-20 relative"
        />

        <button
          onClick={onSearch}
          className="absolute cursor-pointer right-10 inset-y-0 flex items-center text-gray-400 hover:text-blue-600"
        >
          <Search className="w-5 h-5 cursor-pointer" />
        </button>
      </div>
    </div>
  );
}

//how to use

// import { SearchBox, useSearch } from '@/components/search';

// const {
//   value,
//   setValue,
//   submit,
//   clear,
//   activeValue
// } = useSearch({ queryKey: 'search' });

{
  /* <SearchBox
  value={value}
  onChange={setValue}
  onSearch={submit}
  onClear={clear}
  placeholder="جستجوی دوره، مهارت یا استاد..."
/> */
}
