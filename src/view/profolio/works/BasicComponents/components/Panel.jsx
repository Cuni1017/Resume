import React from "react";
import className from "classnames";

export default function Panel({ children, ...rest }) {
  const finalClassName = className(
    "border rounded p-3 shadow bg-white w-full",
    rest.className
  );

  return (
    <div {...rest} className={finalClassName}>
      {children}
    </div>
  );
}
