import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./view/layout/Router";
// import HomePage from "./view/home";

function App() {
  return <RouterProvider router={router}>App</RouterProvider>;
}

export default App;
