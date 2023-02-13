import useNavigation from "../hooks/use-navigation";

const Route = ({ children, path }) => {
  const { currentPath } = useNavigation();

  if (currentPath === `/profolio/basicComponents${path}`) return children;

  return null;
};

export default Route;
