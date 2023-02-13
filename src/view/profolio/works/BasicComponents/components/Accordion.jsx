import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    // $0.click(); 時會產生的bug 處理方法
    // 原因:因為setState不是同步的
    // 正常使用不可能發生
    setExpandedIndex((currentExpendedIndex) => {
      if (currentExpendedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });

    // if (expendedIndex === nextIndex) {
    //   setExpendedIndex(-1);
    // } else {
    //   setExpendedIndex(nextIndex);
    // }
  };

  const renderedItems = items.map((item, index) => {
    const isExpended = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpended ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => {
            handleClick(index);
          }}
        >
          {item.label}
          {icon}
        </div>
        {/* {isExpended && <div className="border-b p-5">{item.content}</div>} */}
        {isExpended ? <div className="border-b p-5">{item.content}</div> : null}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}
