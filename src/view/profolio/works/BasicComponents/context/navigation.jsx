import { useState, createContext, useEffect } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    //當點擊上一頁或下一頁或路徑(pathname)變更時觸發popState
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  // 給Link使用
  const navigate = (to) => {
    window.history.pushState({}, "", `/profolio/basicComponents${to}`);
    setCurrentPath(window.location.pathname);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
