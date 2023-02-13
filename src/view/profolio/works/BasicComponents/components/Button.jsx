import className from "classnames";

// #classnames用法示範
// let finalClassName = className("px-2", "py-5", "bg-red-100");
// // console.log(finalClassName);
// finalClassName = className("text-white", {
//   "px-2": true,
//   "py-5": false,
//   "bg-blue-500": true,
// });
// console.log(finalClassName);

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outlined,
  rounded,
  // onClick,
  ...rest //剩餘的其他props，onClick, onMousemove, onMouseout...
}) {
  // console.log(rest);

  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      // "border-blue-500 bg-blue-500 text-white": primary,
      // 原本可以一次寫好，可是移過來vite後不能使用覆蓋的方法了...
      "border-blue-500": primary,
      "bg-blue-500": primary && !outlined,
      "border-gray-900": secondary,
      "bg-gray-900": secondary && !outlined,
      "border-green-500": success,
      "bg-green-500": success && !outlined,
      "border-yellow-400": warning,
      "bg-yellow-400": warning && !outlined,
      "border-red-500": danger,
      "bg-red-500": danger && !outlined,
      "text-white":
        (primary || secondary || success || warning || danger) && !outlined,
      "rounded-full": rounded,
      "bg-white": outlined,
      "text-blue-500": outlined && primary,
      "text-gray-900": outlined && secondary,
      "text-green-500": outlined && success,
      "text-yellow-400": outlined && warning,
      "text-red-500": outlined && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariantionValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1)
      return new Error(
        "Only one of primary, secondary, success, warning, danger, can be true"
      );
    // console.log(count);
  },
};
