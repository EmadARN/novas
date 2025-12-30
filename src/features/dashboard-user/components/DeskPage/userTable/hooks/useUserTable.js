import { useMemo, useState } from "react";

export const getNestedValue = (obj, path) =>
  path?.split("__").reduce((acc, key) => acc?.[key], obj);

const useUserTable = ({ tableData, tableHead, filterField }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const filterOptions = useMemo(() => {
    const values = tableData.map((item) =>
      getNestedValue(item, filterField)
    );
    return ["all", ...new Set(values.filter(Boolean))];
  }, [tableData, filterField]);

  const filteredData = useMemo(() => {
    const search = searchTerm.toLowerCase();

    return tableData.filter((item) => {
      const filterMatch =
        filter === "all" ||
        getNestedValue(item, filterField) === filter;

      const searchMatch = Object.values(item).some((val) =>
        val?.toString().toLowerCase().includes(search)
      );

      return filterMatch && searchMatch;
    });
  }, [tableData, filter, filterField, searchTerm]);

  const totals = useMemo(() => {
    return tableHead.reduce((acc, head) => {
      if (!["integer", "float"].includes(head.type)) return acc;

      acc[head.name] = filteredData.reduce(
        (sum, row) =>
          sum + (parseFloat(getNestedValue(row, head.name)) || 0),
        0
      );
      return acc;
    }, {});
  }, [filteredData, tableHead]);

  return {
    searchTerm,
    setSearchTerm,
    filter,
    setFilter,
    filterOptions,
    filteredData,
    totals,
  };
};

export default useUserTable;
