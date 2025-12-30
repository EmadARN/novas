import { Search } from "lucide-react";

const TableSearch = ({ value, onChange }) => (
  <div className="relative w-full sm:w-64">
    <Search className="absolute left-3 top-2/5 -translate-y-1/2 w-4 h-4 text-[var(--accent)]" />
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="جستجو..."
      className="w-full h-10 pl-10 pr-3 rounded-xl border bg-gray-50 text-sm"
    />
  </div>
);

export default TableSearch;
