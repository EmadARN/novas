"use client";

import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Search } from "lucide-react";

/* ================= utils ================= */

// گرفتن مقدار تو در تو با __
const getNestedValue = (obj, path) =>
  path?.split("__").reduce((acc, key) => acc?.[key], obj);

/* ================= component ================= */

const UserTable = ({
  tableHead = [],
  tableData = [],
  title = "مدیریت داده‌ها",
  description = "مروری بر داده‌های کاربر",
  filterField = "title",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  /* ================= filters ================= */

  const filterOptions = useMemo(() => {
    const values = tableData.map((item) => getNestedValue(item, filterField));
    return ["all", ...new Set(values.filter(Boolean))];
  }, [tableData, filterField]);

  const filteredData = useMemo(() => {
    const search = searchTerm.toLowerCase();

    return tableData.filter((item) => {
      const filterMatch =
        filter === "all" || getNestedValue(item, filterField) === filter;

      const searchMatch = Object.values(item).some((val) =>
        val?.toString().toLowerCase().includes(search)
      );

      return filterMatch && searchMatch;
    });
  }, [tableData, filter, filterField, searchTerm]);

  /* ================= totals ================= */

  const totals = useMemo(() => {
    return tableHead.reduce((acc, head) => {
      if (!["integer", "float"].includes(head.type) || !head.name) return acc;

      acc[head.name] = filteredData.reduce(
        (sum, row) => sum + (parseFloat(getNestedValue(row, head.name)) || 0),
        0
      );

      return acc;
    }, {});
  }, [filteredData, tableHead]);

  /* ================= render ================= */

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-100 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="جستجو..."
              className="
                w-full h-10 pl-10 pr-3 rounded-xl border border-gray-200
                bg-gray-50 text-sm placeholder:text-gray-500
                focus:border-gray-600 focus:ring-1 focus:ring-gray-600/20
                transition
              "
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex overflow-x-auto gap-2 mb-6">
        {filterOptions.map((option) => {
          const active = filter === option;
          return (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`
                px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap
                border transition
                ${
                  active
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-500"
                }
              `}
            >
              {option === "all" ? "همه" : option}
            </button>
          );
        })}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-900">
                <th className="p-4 text-right text-sm font-semibold text-white">
                  ردیف
                </th>
                {tableHead.map((h, i) => (
                  <th
                    key={i}
                    className="p-4 text-right text-sm font-semibold text-white"
                  >
                    {h.columnName}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredData.map((row, index) => (
                <tr
                  key={row.id ?? index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium text-gray-800">{index + 1}</td>

                  {tableHead.map((head, j) => {
                    const value = head.name
                      ? getNestedValue(row, head.name)
                      : null;

                    if (head.type === "image") {
                      return (
                        <td key={j} className="p-4">
                          {value ? (
                            <img
                              src={value}
                              alt=""
                              className="w-10 h-10 rounded-lg object-cover border"
                            />
                          ) : (
                            "—"
                          )}
                        </td>
                      );
                    }

                    if (["button", "iconButton"].includes(head.type)) {
                      return (
                        <td key={j} className="p-4">
                          <button
                            onClick={() => head.onClick(row)}
                            className="
                              bg-gray-900 text-white rounded-lg
                              px-4 py-2 text-sm border border-gray-900
                              hover:bg-gray-800 transition
                            "
                          >
                            {head.type === "button"
                              ? head.buttonName
                              : head.buttonIcon}
                          </button>
                        </td>
                      );
                    }

                    return (
                      <td key={j} className="p-4 text-sm text-gray-900">
                        {head.format
                          ? head.format(value)
                          : head.type === "float"
                          ? (value ?? 0).toLocaleString("fa-IR")
                          : value ?? "—"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>

            <tfoot className="bg-gray-50">
              <tr>
                <td className="p-4 font-semibold border-t">
                  {filteredData.length} ردیف
                </td>
                {tableHead.map((h, i) => (
                  <td key={i} className="p-4 border-t">
                    {["integer", "float"].includes(h.type) && (
                      <span className="font-semibold">
                        {mounted
                          ? totals[h.name]?.toLocaleString("fa-IR") ?? 0
                          : totals[h.name] ?? 0}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-sm text-gray-700 flex justify-between font-medium">
        <span>
          {filteredData.length} از {tableData.length} ردیف
        </span>
        <button className="hover:text-gray-900">دانلود Excel</button>
      </div>
    </div>
  );
};

UserTable.propTypes = {
  tableHead: PropTypes.array.isRequired,
  tableData: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  filterField: PropTypes.string,
};

export default UserTable;
