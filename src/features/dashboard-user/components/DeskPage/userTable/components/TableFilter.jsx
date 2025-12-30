const TableFilters = ({ options, active, onChange }) => (
  <div className="flex overflow-x-auto gap-2 mb-6">
    {options.map((option) => {
      const isActive = active === option;
      return (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-4 py-2 rounded-xl text-xs border transition
            ${
              isActive
                ? "bg-[var(--primary)] text-white"
                : "bg-white border-gray-200 hover:border-gray-400"
            }`}
        >
          {option === "all" ? "همه" : option}
        </button>
      );
    })}
  </div>
);

export default TableFilters;
