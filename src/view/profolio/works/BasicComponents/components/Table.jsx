import React from "react";

const Table = ({ data, config, keyFn }) => {
  const renderHeaders = config.map((column) => {
    // 如果要客製化th
    if (column.header) {
      return (
        <React.Fragment key={column.label}>{column.header()}</React.Fragment>
      );
    }
    // 預設th
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRow = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {/* 調用Table使用者寫的每一個column的render方法 */}
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderHeaders}</tr>
      </thead>
      <tbody>{renderedRow}</tbody>
    </table>
  );
};

export default Table;
