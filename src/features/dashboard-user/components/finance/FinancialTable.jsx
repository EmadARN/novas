"use client";

import React from "react";
import UserTable from "@/shared/components/UserTable";

const FinancialTable = ({ tableConfig }) => (
  <div className="bg-white rounded-xl p-4 border border-gray-100">
    <UserTable
      tableHead={tableConfig.head}
      tableData={tableConfig.data}
      title={tableConfig.title}
      description={tableConfig.description}
      filterField={tableConfig.filterField}
    />
  </div>
);

export default FinancialTable;
