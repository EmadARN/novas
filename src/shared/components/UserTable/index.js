"use client";

import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Search } from "lucide-react";

const UserTable = ({
  tableHead = [],
  tableData = [],
  title = "مدیریت داده‌ها",
  description = "مروری بر داده‌های کاربر",
  filterField = "title",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // گرفتن مقدار تو در تو با پشتیبانی از __
  const getNestedValue = (obj, path) =>
    path?.split("__").reduce((acc, key) => acc?.[key], obj);

  //  گزینه‌های فیلتر
  const filterOptions = useMemo(() => {
    return [
      "all",
      ...new Set(tableData.map((item) => getNestedValue(item, filterField))),
    ];
  }, [tableData, filterField]);

  //  فیلتر داده‌ها
  const filteredData = useMemo(() => {
    return tableData.filter(
      (item) =>
        (filter === "all" || getNestedValue(item, filterField) === filter) &&
        Object.values(item).some((value) =>
          value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  }, [tableData, filter, searchTerm, filterField]);

  //  محاسبه مجموع ستون‌های عددی
  const totals = useMemo(() => {
    return tableHead.reduce((acc, head) => {
      if (["integer", "float"].includes(head.type) && head.name) {
        acc[head.name] = filteredData.reduce(
          (sum, item) =>
            sum + (parseFloat(getNestedValue(item, head.name)) || 0),
          0
        );
      }
      return acc;
    }, {});
  }, [tableHead, filteredData]);

  return (
    <div className="w-full">
      {/*  Header */}
      <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-100 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-[var(--primary)]">
              {title}
            </h3>
            <p className="text-[var(--accent)] text-sm mt-1">{description}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[var(--accent)]" />
              <input
                className="w-full h-10 pl-10 pr-3 rounded-xl border border-gray-200
                           bg-gray-50 text-sm placeholder:text-[var(--accent)]
                           focus:border-gray-600 focus:ring-1 focus:ring-gray-600/20 transition-colors"
                placeholder="جستجو..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/*  Filters */}
      <div className="flex overflow-x-auto gap-2 mb-6 pb-1">
        {filterOptions.map((option) => (
          <button
            key={option || "unknown"}
            className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap flex items-center gap-1 cursor-pointer
                        transition-colors duration-200 ${
                          filter === option
                            ? "bg-[var(--primary)] text-white border border-gray-900"
                            : "text-gray-700 border border-gray-200 hover:border-gray-500 bg-white hover:bg-gray-50"
                        }`}
            onClick={() => setFilter(option)}
          >
            {option === "all" ? "همه" : option}
          </button>
        ))}
      </div>

      {/*  Table */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Header */}
            <thead>
              <tr className="bg-[var(--primary)]">
                <th className="p-4 text-right">
                  <p className="text-sm font-semibold text-white">ردیف</p>
                </th>
                {tableHead.map((head, i) => (
                  <th key={i} className="p-4 text-right">
                    <p className="text-sm font-semibold text-white">
                      {head.columnName}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={item.id || index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="p-4 font-medium text-gray-800">{index + 1}</td>
                  {tableHead.map((head, j) => {
                    const value = head.name
                      ? getNestedValue(item, head.name)
                      : null;

                    if (head.type === "image") {
                      return (
                        <td key={j} className="p-4">
                          {value ? (
                            <img
                              src={value}
                              alt="image"
                              className="w-10 h-10 object-cover rounded-lg border border-gray-200"
                            />
                          ) : (
                            <span className="text-gray-500 text-sm">—</span>
                          )}
                        </td>
                      );
                    }

                    if (head.type === "button" || head.type === "iconButton") {
                      return (
                        <td key={j} className="p-4">
                          <button
                            className="rounded-lg bg-gray-900 text-white py-2 px-4 text-sm border border-gray-900
                                       hover:bg-gray-800 transition-colors duration-200"
                            onClick={() => head.onClick(item)}
                          >
                            {head.type === "button"
                              ? head.buttonName
                              : head.buttonIcon}
                          </button>
                        </td>
                      );
                    }

                    return (
                      <td key={j} className="p-4">
                        <p className="text-sm text-gray-900">
                          {head.format
                            ? head.format(value)
                            : head.type === "float"
                            ? mounted
                              ? (value ?? 0).toLocaleString("fa-IR")
                              : value ?? 0
                            : value ?? "—"}
                        </p>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>

            {/* Footer */}
            <tfoot className="bg-gray-50">
              <tr>
                <td className="p-4 font-semibold text-gray-800 border-t border-gray-200">
                  {filteredData.length} ردیف
                </td>
                {tableHead.map((head, i) => (
                  <td key={i} className="p-4 border-t border-gray-200">
                    {["integer", "float"].includes(head.type) && (
                      <p className="font-semibold text-gray-800">
                        {mounted
                          ? totals[head.name]?.toLocaleString("fa-IR") ?? 0
                          : totals[head.name] ?? 0}
                      </p>
                    )}
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 text-sm text-[var(--accent)] flex justify-between font-medium">
        <span>
          {filteredData.length} از {tableData.length} ردیف
        </span>
        <button className="text-[var(--accent) cursor-pointer hover:text-purple-700">
          دانلود Excel
        </button>
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
