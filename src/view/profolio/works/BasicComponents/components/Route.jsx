import useNavigation from "../hooks/use-navigation";

const Route = ({ children, path }) => {
  const { currentPath } = useNavigation();

  // const handler = getEventListeners(document);
  // console.log(handler);

  if (currentPath === `/profolio/basicComponents${path}`) return children;

  return null;
};

export default Route;
