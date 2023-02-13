import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

export default function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleChange = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleChange} />
      <Dropdown options={options} value={selection} onChange={handleChange} />
    </div>
  );
}
