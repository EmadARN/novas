"use client";

import React from "react";
import TableHeader from "./components/TableHeader";
import TableFilters from "./components/TableFilter";
import TableBody from "./components/TableBody";
import TableFooter from "./components/TableFooter";
import useUserTable from "./hooks/useUserTable";

const UserTable = ({
  tableHead = [],
  tableData = [],
  title = "مدیریت داده‌ها",
  description = "",
  filterField = "title",
}) => {
  const {
    searchTerm,
    setSearchTerm,
    filter,
    setFilter,
    filterOptions,
    filteredData,
    totals,
  } = useUserTable({
    tableData,
    tableHead,
    filterField,
  });

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <TableHeader
        title={title}
        description={description}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* Filters */}
      <TableFilters
        options={filterOptions}
        active={filter}
        onChange={setFilter}
      />

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[var(--primary)] text-white">
              <tr>
                <th className="p-4 text-right text-sm font-semibold">ردیف</th>
                {tableHead.map((h, i) => (
                  <th key={i} className="p-4 text-right text-sm font-semibold">
                    {h.columnName}
                  </th>
                ))}
              </tr>
            </thead>

            <TableBody data={filteredData} tableHead={tableHead} />
          </table>
        </div>
      </div>

      {/* Footer */}
      <TableFooter
        filteredCount={filteredData.length}
        totalCount={tableData.length}
        tableHead={tableHead}
        totals={totals}
      />
    </div>
  );
};

export default UserTable;
