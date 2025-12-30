import TableSearch from "./TableSearch";

const TableHeader = ({
  title,
  description,
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-100 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-[var(--primary)]">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-[var(--accent)] mt-1">
              {description}
            </p>
          )}
        </div>

        <TableSearch
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
};

export default TableHeader;
