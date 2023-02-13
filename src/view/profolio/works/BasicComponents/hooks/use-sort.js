import { useState } from "react";

export default function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // 當sortOrder && sortBy 不為null時做sort
  // 在React中不要直接改傳下來的data List，如果他是props或state System內的東西，用複製的修改後再覆蓋上去
  // 找到正確的sortValue function and use it for sorting
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        // localeCompare() 回傳一個數字，用來表示其與被比較的字串的先後順序。
        return valueA.localeCompare(valueB) * reverseOrder;
      } else if (typeof valueA === "number") {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortBy,
    sortOrder,
    sortedData,
    setSortColumn,
  };
}
