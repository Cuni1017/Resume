import React, { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

export default function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // console.log("render");

  useEffect(() => {
    // 做預防，如果某些原因沒拿到divEl的話
    if (!divEl) return;

    // 如果點擊dropdown外，自動縮起清單的功能
    const handler = (event) => {
      // 如果divEl有包含點擊的目標 => 表示點擊裡面
      // 如果不成立，縮起清單
      if (!divEl.current.contains(event.target)) {
        // console.log("outside");
        setIsOpen(false);
      } else {
        // console.log("inside");
      }
    };

    // 這裡的第三個參數一定要是true，否則點options會被認為是outside
    // 原因:如果是false的話EventListener會先從目標階段開始抓event到最外層
    // 如果options先消失，寫在document上的EventListener就抓不到options了
    document.addEventListener("click", handler, true);

    return () => {
      // console.log("clean");
      document.removeEventListener("click", handler);
    };
  }, []);

  window.timeTwo = performance.now(); //重Render
  const renderedOptions = options.map((option) => {
    return (
      <div
        key={option.value}
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => {
          window.timeOne = performance.now(); //選項被按下
          onChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative" onClick={handleClick}>
      <Panel>
        <div className="flex justify-between items-center cursor-pointer">
          {value ? value.label : "Select..."}
          <GoChevronDown className="text-lg" />
        </div>
      </Panel>
      {isOpen ? (
        <Panel className="absolute top-full">{renderedOptions}</Panel>
      ) : null}
    </div>
  );
}
