import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  // 移過來後加的，因路徑不同
  let newPath = currentPath.replace("/profolio/basicComponents", "");

  const classes = classNames(
    "text-blue-500",
    className,
    newPath === to ? activeClassName : null //highLight active
  );

  const handleClick = (event) => {
    // console.log(event);
    //如果使用者是用control+點擊網址的話，讓瀏覽器幫他開新分頁
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  return (
    <a href={to} className={classes} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
