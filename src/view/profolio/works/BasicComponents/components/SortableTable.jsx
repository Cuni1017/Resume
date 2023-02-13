import React from "react";
import Table from "./Table";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";
import useSort from "../hooks/use-sort";

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column; //如果沒給sortValue方法，直接回傳

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => {
            setSortColumn(column.label);
          }}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  // 用updatedConfig覆蓋掉原本傳過來的config
  return (
    <div>
      {/* {sortOrder} - {sortBy} */}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
};

const getIcons = (label, sortBy, sortOrder) => {
  // 如果這個label不是sortBy
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }

  if (sortOrder === null)
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  else if (sortOrder === "asc")
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  else if (sortOrder === "desc")
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
};

export default SortableTable;
