const TableFooter = ({ filteredCount, totalCount, tableHead, totals }) => {
  return (
    <div className="mt-4 flex flex-col sm:flex-row sm:justify-between gap-4 text-sm text-[var(--accent)] font-medium">
      <span>
        {filteredCount} از {totalCount} ردیف
      </span>

      <div className="flex items-center gap-4">
        {tableHead.map(
          (h) =>
            ["integer", "float"].includes(h.type) && (
              <span key={h.name} className="text-gray-800">
                {h.columnName}:{" "}
                <strong>{(totals[h.name] ?? 0).toLocaleString("fa-IR")}</strong>
              </span>
            )
        )}

        <button className="hover:text-gray-900 transition">دانلود Excel</button>
      </div>
    </div>
  );
};

export default TableFooter;
